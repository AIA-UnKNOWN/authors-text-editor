<?php

namespace App\Http\Controllers\Collections;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AddController extends Controller
{
    function __invoke(Request $request)
    {
        DB::table('collections')->insert([
            'user_id' => auth()->user()->id,
            'title' => $request->get('title')
        ]);
        return response()->json(['message' => 'added'], 201);
    }
}
