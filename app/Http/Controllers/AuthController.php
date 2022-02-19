<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\ProfilePicture;

class AuthController extends Controller
{
    function login(Request $request) {
        $loggedUser = $request->validate([
            'username' => 'required|string',
            'password' => 'required|string'
        ]);
        if (! Auth::attempt($loggedUser)) {
            return response()->json(401);
        }
        $user = User::select('users.*', 'profile_pictures.source')
            ->join('profile_pictures', 'profile_pictures.user_id', '=', 'users.id')
            ->where('username', $loggedUser['username'])
            ->first();
        $token = $user->createToken("{$user->first_name}'s token")->plainTextToken;
        return response()->json([
            'user' => $user,
            'token' => $token
        ], 200);
    }

    function register(Request $request) {
        $loggedUser = $request->validate([
            'firstname' => 'required|string|max:255',
            'lastname' => 'required|string|max:255',
            'username' => 'required|string|unique:users',
            'password' => 'required|string|min:8|confirmed',
        ]);
        $this->createUser($loggedUser);
        return response()->json(201);
    }

    private function createUser($loggedUser) {
        $user = new User;
        $user->first_name = $loggedUser['firstname'];
        $user->last_name = $loggedUser['lastname'];
        $user->username = $loggedUser['username'];
        $user->password = Hash::make($loggedUser['password']);
        $user->save();

        $profilePicture = new ProfilePicture;
        $profilePicture->user_id = $user->id;
        $profilePicture->save();
    }

    function logout(Request $request) {
        auth()->user()->tokens()->delete();
        return response()->json(200);
    }

    function currentUser(Request $request) {
        return response()->json(auth()->user());
    }
}
