<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
// use App\Helper\Helper;
use App\Models\Konten;
use \App\Models\Slide;
use \App\Models\Kegiatan;
use App\Models\Galeri;
use CreateKategorisTable;

class HomeController extends Controller
{
    //
    public function index(){
        // $kategoris = Helper::getKategoris("Y");
        $kegiatans = Kegiatan::where('nonaktif',0)
                            ->orderBy('created_at','DESC')
                            ->offset(0)
                            ->limit(3)
                            ->get();
        $slides = Slide::where('nonaktif',0)->get();
        $konten = Konten::first();
        return view("index", ['isikonten'=>$konten->pjm_about, 
                              'slides'=>$slides,
                              'kegiatans'=>$kegiatans]);
    }
    public function show($id){
        switch($id){
            case 'sejarah-stmik': $field="stmik_sejarah";break;
            case 'struktur-stmik': $field="stmik_struktur";break;
            case 'deskripsi-pjm': $field="pjm_deskripsi";break;
            case 'jobdesc-pjm': $field="pjm_jobdesc";break;
        }
        $konten = Konten::first();
        return view("showkonten", ['isikonten'=>$konten->$field]);
    }

    public function galeri(){
        $galeris = Galeri::where('nonaktif',0)
                            ->orderBy('created_at','DESC')
                            ->get();
        return view('galeri',['galeris'=>$galeris]);
    }

    public function kegiatan()
    {
        $kegiatans = Kegiatan::where('nonaktif',0)
                            ->orderBy('created_at','DESC')
                            ->get();
        return view('kegiatan' ,['kegiatans'=>$kegiatans]);
    }
}
