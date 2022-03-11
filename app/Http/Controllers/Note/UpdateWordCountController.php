<?php

namespace App\Http\Controllers\Note;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UpdateWordCountController extends Controller
{
    function __invoke(Request $request, $id)
    {
        $affected = DB::table('notes')
            ->where('id', $id)
            ->update([
                'target_word_count' => $request->get('targetWordCount')
            ]);
        return response()->json(['message' => 'updated'], 201);
    }
}
