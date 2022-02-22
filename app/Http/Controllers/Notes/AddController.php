<?php

namespace App\Http\Controllers\Notes;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AddController extends Controller
{
    function __invoke(Request $request)
    {
        DB::table('notes')->insert([
            'collection_id' => $request->get('collectionId')
        ]);
        return response()->json(['message' => 'added'], 200);
    }
}
