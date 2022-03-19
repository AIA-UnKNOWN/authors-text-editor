<?php

namespace App\Http\Controllers\Notes;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SearchController extends Controller
{
    function __invoke(Request $request, $collectionId)
    {
        $queriedNotes = DB::table('notes')
            ->where('title', 'LIKE', "%{$request->get('note')}%")
            ->where('collection_id', $collectionId)
            ->get();
        return response()->json($queriedNotes);
    }
}
