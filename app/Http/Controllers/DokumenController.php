<?php

namespace App\Http\Controllers;

use App\Models\Dokumen;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Helper\Helper;
use App\Models\Kategori;
// use App\Models\File;

class DokumenController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $dokumens = DB::table("dokumens")
            ->join('kategoris as k1', 'k1.id', '=', 'dokumens.kategori_id')
            ->join('kategoris as k2', 'k2.id', '=', 'k1.parent')
            ->select('dokumens.*', DB::raw('CONCAT(k2.namakategori,"-",k1.namakategori) as namakategori'))
            ->get();
        // dd($dokumens);
        // $dokumens = \App\Models\Document::all();
        return view("admin.dokumen.index", ['dokumens' => $dokumens]);
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
        return view("admin.dokumen.create", ['kats' => $kats]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $request->validate([
            'juduldokumen' => 'required',
            'deskripsi' => 'min:10',
            'versi' => 'integer',
            'file' => 'required|mimes:csv,txt,xlsx,xls,doc,docx,pdf,jpg,png,jpeg,zip,rar|max:50000'
        ]);

        $fileModel = new Dokumen;

        if ($request->file()) {
            // $realpath = $request->file->getRealPath();
            // $lastmodif = date("F d Y H:i:s.", filemtime($realpath));

            $namaorifile = $request->file->getClientOriginalName();
            $fileext = $request->file->getClientOriginalExtension();
            $juduldokumennospace = str_replace(" ", "-", $request->juduldokumen);
            $fileName = $juduldokumennospace . '-' . time() . "." . $fileext;
            // $filePath = $request->file('file')->storeAs('uploads', $fileName, 'public');
            $filePath = $request->file('file')->storeAs('documents', $fileName, 'public');

            // $fileModel->name = time() . '_' . $request->file->getClientOriginalName();
            $fileModel->juduldokumen = $request->juduldokumen;
            $fileModel->deskripsi = $request->deskripsi;
            $fileModel->versi = $request->versi;
            $fileModel->kategori_id = $request->kategori_id;
            $fileModel->fileext = $fileext;
            $fileModel->namafile =  $fileName; //'/storage/' . $filePath;
            $fileModel->filemimetype = $request->file->getClientMimetype();
            $fileModel->namaorifile = $namaorifile;
            $fileModel->filesize = $request->file->getSize();
            $fileModel->save();

            return redirect("/admin-dokumen")->with("status", "Dokumen " . $namaorifile . " Berhasil DiUpload");

            // return back()
            //     ->with('success', 'File has been uploaded.')
            //     ->with('file', $fileName);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function fileManager($idparent, $idkategori)
    {
        $arExt = [
            'xls' => 'excel', 'xlsx' => 'excel',
            'doc' => 'word', 'docx' => 'word',
            'pdf' => 'pdf', 'csv' => 'csv', 'txt' => 'alt',
            'jpg' => 'image', 'jpeg' => 'image', 'png' => 'image'
        ];

        $arClr = [
            'xls' => 'warning', 'xlsx' => 'warning',
            'doc' => 'primary', 'docx' => 'primary',
            'pdf' => 'success', 'csv' => 'info', 'txt' => 'info',
            'jpg' => 'danger', 'jpeg' => 'danger', 'png' => 'danger'
        ];

        $menuDipilihs = Kategori::where('id', $idparent)->first();
        $menuDipilih = $menuDipilihs['namakategori'];

        $kats = Kategori::where('parent', $idparent)
            ->orderBy('id')->get();
        
        if ($idkategori == 0) {
            $kats2 = Kategori::where('parent', $idparent)
                ->orderBy('id')->first();
            if ($kats2 == null){
                // brarti kategori ini tidak ada di parent, ambil id nya saja
                $kats2 = Kategori::where('id', $idparent)
                        ->orderBy('id')->first();
            }
            $idkategori = $kats2['id'];
        }
        $doks = Dokumen::where('kategori_id', $idkategori)
                    ->orderBy('updated_at','DESC')
                    ->orderBy('versi', 'DESC')->get();
        return view('file-manager', [
            'kats' => $kats, 'doks' => $doks,
            'idkategori' => $idkategori, 'arExt' => $arExt, 'arClr' => $arClr,
            'menuDipilih'=>$menuDipilih
        ]);
    }

    public function showPDF($id)
    {
        $pdfs = Dokumen::where('id', $id)->orderBy('id')->first();
//        $filenya = asset('/storage/documents/' . $pdfs['namafile']);
        $filenya = asset('/public/documents/' . $pdfs['namafile']);
        return view('showpdf', ['namafile' => $filenya]);
    }
}
