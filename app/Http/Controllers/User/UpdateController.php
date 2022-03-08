<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UpdateController extends Controller
{
    function __invoke(Request $request)
    {
        $user = User::find(auth()->user()->id);
        if ($request->has(['firstName', 'lastName'])) {
            $user->first_name = $request->get('firstName');
            $user->last_name = $request->get('lastName');
        }
        if ($request->has(['password', 'newPassword', 'confirmNewPassword'])) {
            $inputs = $request->validate([
                'newPassword' => 'required|min:8|required_with:confirmNewPassword|same:confirmNewPassword',
                'confirmNewPassword' => 'min:8'
            ]);
            if (! Hash::check($request->get('password'), $user->password)) {
                return response()->json(['message' => 'wrong password'], 401);
            }
            $user->password = Hash::make($inputs['newPassword']);
        }
        $user->save();

        return response()->json(['message' => 'updated'], 201);
    }
}
