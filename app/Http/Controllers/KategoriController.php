<?php

namespace App\Http\Controllers;

use App\Models\Kategori;
use Illuminate\Http\Request;
use phpDocumentor\Reflection\Types\Void_;
use App\Helper\Helper;

class KategoriController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        // $kats = Kategori::orderBy('parent','ASC')
        //             ->orderBy('level','ASC')->get();
        $kategoris = Helper::getKategoris();
        return view("admin.kategori.index", ['kategoris'=>$kategoris]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
            $kats = Helper::getKategoris();
        return view("admin.kategori.create",['kats'=>$kats]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $valid = $request->validate([
            'namakategori'=>'required',
            'parent'=>'required'
        ]);
        //
        $kategori = new Kategori;
        $kategori->namakategori = $request->namakategori;
        $kategori->route = $request->route;
        $kategori->unedit = "";
        $kategori->parent = $request->parent;
        $levs = Kategori::select("level")
                    ->where("id","=",$kategori->parent)->get();
        foreach($levs as $l);
        $kategori->level = $l['level']+1;
        // $kategori = $request->all();
        $kategori->save();
        return redirect("/admin-kategori")->with("status","Kategori ".$kategori->namakategori." Berhasil ditambahkan");
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Kategori  $kategori
     * @return \Illuminate\Http\Response
     */
    public function show(Kategori $kategori)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Kategori  $kategori
     * @return \Illuminate\Http\Response
     */
    public function edit(Kategori $kategori)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Kategori  $kategori
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Kategori $kategori)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Kategori  $kategori
     * @return \Illuminate\Http\Response
     */
    public function destroy(Kategori $kategori)
    {
        
//        Kategori::destroy($kategori->id);
        // $kategoris = Helper::getKategoris();
//        $kategori->session()->put('status','Data sudah dihapus');
//        dd($kategoris);
        // return view("admin.kategori.index", ['kategoris'=>$kategoris]);

        //
        //  dd($kategori);
        return redirect("/admin-kategori")->with("status","Kategori ".$kategori->namakategori." Sudah dihapus");
        // return redirect()->action([KategoriController::class, 'index'])->with("status","Kategori ".$kategori->namakategori." Sudah dihapus");
        // return back()->with("status","Kategori ".$kategori->namakategori." Sudah dihapus");

    }
}
