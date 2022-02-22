<?php

namespace App\Http\Controllers\Notes;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class IndexController extends Controller
{
    function __invoke(Request $request, $collectionId)
    {
        $notes = DB::table('notes')
            ->select(DB::raw('notes.*'))
            ->join('collections', function ($join) {
                $join->on('collections.id', '=', 'notes.collection_id');
            })
            ->where('notes.collection_id', $collectionId)
            ->get();
        
        return response()->json($notes);
    }
}
