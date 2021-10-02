<?php

namespace App\Http\Controllers;

use App\Models\Konten;
use Illuminate\Http\Request;

class KontenController extends Controller
{
    public function stmikSejarah()
    {
        $datas = Konten::select('stmik_sejarah')->get();
        return view(
            'admin.konten.index',
            [
                'datas' => $datas,
                'judul' => 'Sejarah STMIK AKAKOM',
                'jenisKonten' => 'sejarah-stmik'
            ]
        );
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create($jenis)
    {
        //
        switch ($jenis) {
            case 'sejarah-stmik':
                $field = 'stmik_sejarah';
                $judul = 'Sejarah STMIK AKAKOM';
                break;

            case 'struktur-stmik':
                $field = 'stmik_struktur';
                $judul = 'Struktur Organisasi STMIK AKAKOM';
                break;

            case 'deskripsi-pjm':
                $field = 'pjm_deskripsi';
                $judul = 'Deskripsi Pusat Jaminan Mutu (PJM)';
                break;

            case 'jobdesc-pjm':
                $field = 'pjm_jobdesc';
                $judul = 'Job Description Pusat Jaminan Mutu (PJM)';
                break;

            case 'about-pjm':
                $field = 'pjm_about';
                $judul = 'Informasi Tentang Apa Itu Pusat Jaminan Mutu (PJM)';
                break;
    
            }

        $datas = Konten::select($field)->get();
        return view(
            'admin.konten.index',
            [
                'datas' => $datas,
                'judul' => $judul,
                'jenisKonten' => $field
            ]
        );
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

        $konten = Konten::find(1);
        $field = $request->jeniskonten;
        $konten->$field = $request->konten;
        $konten->update();
        return back()
            ->with('status', 'Isi Konten Sudah disimpan.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Konten  $konten
     * @return \Illuminate\Http\Response
     */
    public function show(Konten $konten)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Konten  $konten
     * @return \Illuminate\Http\Response
     */
    public function edit(Konten $konten)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Konten  $konten
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Konten $konten)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Konten  $konten
     * @return \Illuminate\Http\Response
     */
    public function destroy(Konten $konten)
    {
        //
    }
}
