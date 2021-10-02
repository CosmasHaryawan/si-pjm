<?php

namespace App\Http\Controllers;
use App\Models\Kategori;
use Illuminate\Http\Request;

class Select2SearchController extends Controller
{
    //
    public function index()
    {
    	return view('admin.kategori.create');
    }


    public function selectSearch(Request $request)
    {
    	$kats = [];
        if($request->has('q')){
            $search = $request->q;
            $kats =Kategori::select("id", "namakategori")
            		->where('name', 'LIKE', "%$search%")
            		->get();
        }
        return response()->json($kats);
    }
}
