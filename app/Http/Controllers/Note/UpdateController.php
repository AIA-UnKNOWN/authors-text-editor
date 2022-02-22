<?php

namespace App\Http\Controllers\Note;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UpdateController extends Controller
{
    function __invoke(Request $request, $id)
    {
        $affected = DB::table('notes')
            ->where('id', $id)
            ->update(['title' => $request->get('title')]);
        return response()->json(['message' => 'updated'], 200);
    }
}
