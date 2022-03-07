<?php

namespace App\Http\Controllers\ProfilePicture;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class IndexController extends Controller
{
    function __invoke(Request $request)
    {
        $profilePicture = DB::table('profile_pictures')
            ->where('user_id', auth()->user()->id)
            ->first();
        return response()->json($profilePicture);
    }
}
