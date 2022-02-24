<?php

namespace App\Http\Controllers\Note;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Note;

class IndexController extends Controller
{
    function __invoke(Request $request, $id)
    {
        $note = Note::find($id);
        return response()->json($note);
    }
}
