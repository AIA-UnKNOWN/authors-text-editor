<?php

namespace App\Http\Controllers\Collections;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class IndexController extends Controller
{
    function __invoke(Request $request)
    {
        $collections = DB::table('collections')
            ->select(
                'collections.*',
                DB::raw(
                    '(SELECT
                        COUNT(*)
                    FROM notes
                    WHERE notes.collection_id = collections.id) AS notes_count'
                )
            )
            ->join('users', 'collections.user_id', '=', 'users.id')
            ->where('collections.user_id', auth()->user()->id)
            ->get();
        return response()->json($collections);
    }
}
