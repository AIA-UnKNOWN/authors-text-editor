<?php

namespace App\Http\Controllers\Collections;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SearchController extends Controller
{
    function __invoke(Request $request)
    {
        $queriedCollections = DB::table('collections')
            ->where('title', 'LIKE', "%{$request->get('collection')}%")
            ->where('user_id', auth()->user()->id)
            ->get();
        return response()->json($queriedCollections);
    }
}
