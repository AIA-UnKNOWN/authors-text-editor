<?php

namespace App\Http\Controllers\ProfilePicture;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UpdateController extends Controller
{
    function __invoke(Request $request)
    {
        DB::table('profile_pictures')
            ->updateOrInsert(
                ['user_id' => auth()->user()->id],
                ['source' => $request->get('imageData')]
            );

        return response()->json(['message' => 'updated'], 201);
    }
}
