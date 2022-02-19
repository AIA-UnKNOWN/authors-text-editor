<?php

namespace App\Http\Controllers\Collection;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DeleteController extends Controller
{
    function __invoke(Request $request, $collectionId)
    {
        $deleted = DB::table('collections')
            ->where('id', $collectionId)
            ->delete();
        return response()->json(['message' => 'deleted']);
    }
}
