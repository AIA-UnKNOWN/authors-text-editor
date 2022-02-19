<?php

namespace App\Http\Controllers\Collection;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UpdateController extends Controller
{
    function __invoke(Request $request, $collectionId)
    {
        $affected = DB::table('collections')
            ->where('id', $collectionId)
            ->update(['title' => $request->get('title')]);
        return response()->json(['message' => 'updated'], 200);
    }
}
