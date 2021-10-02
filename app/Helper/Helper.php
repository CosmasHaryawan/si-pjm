<?php

namespace App\Helper;
use \App\Models\Kategori;

class Helper
{

    public static function getKategoris($unedit=""){

        $kategoris = [];
        $kats = Kategori::where('parent',0)
                                ->orderBy('id')->get();
        $n=0;
        foreach($kats as $k){
            $kategoris[$n]['unedit'] = $k->unedit;
            $kategoris[$n]['level'] = $k->level;
            $kategoris[$n]['id'] = $k->id;
            $kategoris[$n]['parent'] = $k->parent;
            $kategoris[$n]['namakategori'] = trim($k->namakategori);
            $kategoris[$n]['route'] = trim($k->route);
            $n++; 

            // cari level bawahnya
            $id = $k->id;
            if ($unedit == 'Y'){
                $k1s = Kategori::where('parent',$id)
                                ->where('unedit','Y')
                                ->orderBy('id')->get();
            } else {
                $k1s = Kategori::where('parent',$id)
                                ->orderBy('id')->get();
            }
            foreach($k1s as $k1){
                $kategoris[$n]['unedit'] = $k1->unedit;
                $kategoris[$n]['level'] = $k1->level;
                $kategoris[$n]['id'] = $k1->id;
                $kategoris[$n]['parent'] = $k1->parent;
                $kategoris[$n]['namakategori'] = trim($k1->namakategori);
                $kategoris[$n]['route'] = trim($k1->route);
                $n++; 

                // cari level bawahnya
                $id = $k1->id;
                if ($unedit == 'Y'){
                    $k2s = Kategori::where('parent',$id)
                                        ->where('unedit','Y')
                                        ->orderBy('id')->get();
                } else {
                    $k2s = Kategori::where('parent',$id)
                                        ->orderBy('id')->get();
                }
                foreach($k2s as $k2){
                    $kategoris[$n]['unedit'] = $k2->unedit;
                    $kategoris[$n]['level'] = $k2->level;
                    $kategoris[$n]['id'] = $k2->id;
                    $kategoris[$n]['parent'] = $k2->parent;
                    $kategoris[$n]['namakategori'] = trim($k2->namakategori);
                    $kategoris[$n]['route'] = trim($k2->route);
                    $n++; 

                    // cari level bawahnya
                    $id = $k2->id;
                    if ($unedit == 'Y'){
                        $k3s = Kategori::where('parent',$id)
                                            ->where('unedit','Y')
                                            ->orderBy('id')->get();
                    } else {
                        $k3s = Kategori::where('parent',$id)
                                            ->orderBy('id')->get();
                    }

                    foreach($k3s as $k3){
                        $kategoris[$n]['unedit'] = $k3->unedit;
                        $kategoris[$n]['level'] = $k3->level;
                        $kategoris[$n]['id'] = $k3->id;
                        $kategoris[$n]['parent'] = $k3->parent;
                        $kategoris[$n]['namakategori'] = trim($k3->namakategori);
                        $kategoris[$n]['route'] = trim($k3->route);
                        $n++; 

                        // cari level bawahnya
                        $id = $k3->id;
                        if ($unedit == 'Y'){
                            $k4s = Kategori::where('parent',$id)
                                                ->where('unedit','Y')
                                                ->orderBy('id')->get();
                        } else {
                            $k4s = Kategori::where('parent',$id)
                                                ->orderBy('id')->get();
                        }

                        foreach($k4s as $k4){
                            $kategoris[$n]['unedit'] = $k4->unedit;
                            $kategoris[$n]['level'] = $k4->level;
                            $kategoris[$n]['id'] = $k4->id;
                            $kategoris[$n]['parent'] = $k4->parent;
                            $kategoris[$n]['namakategori'] = trim($k4->namakategori);
                            $kategoris[$n]['route'] = trim($k4->route);
                            $n++; 
                        }    
                    }    
                }    
    
            }
        }
        return $kategoris;
    }


    public static function getKategorisPerId($id=0){

        $kategoris = [];
        $kats = Kategori::where('parent',$id)
                                ->orderBy('id')->get();
        $n=0;
        foreach($kats as $k){
            $kategoris[$n]['unedit'] = $k->unedit;
            $kategoris[$n]['level'] = $k->level;
            $kategoris[$n]['id'] = $k->id;
            $kategoris[$n]['parent'] = $k->parent;
            $kategoris[$n]['namakategori'] = trim($k->namakategori);
            $kategoris[$n]['route'] = trim($k->route);
            $n++; 

            // cari level bawahnya
            $id = $k->id;
            $k1s = Kategori::where('parent',$id)
                            ->orderBy('id')->get();
            foreach($k1s as $k1){
                $kategoris[$n]['unedit'] = $k1->unedit;
                $kategoris[$n]['level'] = $k1->level;
                $kategoris[$n]['id'] = $k1->id;
                $kategoris[$n]['parent'] = $k1->parent;
                $kategoris[$n]['namakategori'] = trim($k1->namakategori);
                $kategoris[$n]['route'] = trim($k1->route);
                $n++; 

                // cari level bawahnya
                $id = $k1->id;
                $k2s = Kategori::where('parent',$id)
                                    ->orderBy('id')->get();
                foreach($k2s as $k2){
                    $kategoris[$n]['unedit'] = $k2->unedit;
                    $kategoris[$n]['level'] = $k2->level;
                    $kategoris[$n]['id'] = $k2->id;
                    $kategoris[$n]['parent'] = $k2->parent;
                    $kategoris[$n]['namakategori'] = trim($k2->namakategori);
                    $kategoris[$n]['route'] = trim($k2->route);
                    $n++; 

                    // cari level bawahnya
                    $id = $k2->id;
                    $k3s = Kategori::where('parent',$id)
                                        ->orderBy('id')->get();
                    foreach($k3s as $k3){
                        $kategoris[$n]['unedit'] = $k3->unedit;
                        $kategoris[$n]['level'] = $k3->level;
                        $kategoris[$n]['id'] = $k3->id;
                        $kategoris[$n]['parent'] = $k3->parent;
                        $kategoris[$n]['namakategori'] = trim($k3->namakategori);
                        $kategoris[$n]['route'] = trim($k3->route);
                        $n++; 

                        // cari level bawahnya
                        $id = $k3->id;
                        $k4s = Kategori::where('parent',$id)
                                            ->orderBy('id')->get();
                        foreach($k4s as $k4){
                            $kategoris[$n]['unedit'] = $k4->unedit;
                            $kategoris[$n]['level'] = $k4->level;
                            $kategoris[$n]['id'] = $k4->id;
                            $kategoris[$n]['parent'] = $k4->parent;
                            $kategoris[$n]['namakategori'] = trim($k4->namakategori);
                            $kategoris[$n]['route'] = trim($k4->route);
                            $n++; 
                        }    
                    }    
                }    
    
            }
        }
        return $kategoris;
    }




    // public static function getKategoriMenus(){
    //     $unedit = "Y";
    //     $kategoris = [];
    //     $kats = Kategori::where('parent',0)
    //                         ->where('unedit',$unedit)
    //                         ->orderBy('id')->get();
    //     $n=0;
    //     foreach($kats as $k){
    //         $kategoris[$n]['unedit'] = $k->unedit;
    //         $kategoris[$n]['level'] = $k->level;
    //         $kategoris[$n]['id'] = $k->id;
    //         $kategoris[$n]['parent'] = $k->parent;
    //         $kategoris[$n]['namakategori'] = trim($k->namakategori);
    //         $kategoris[$n]['route'] = trim($k->route);
    //         $n++; 

    //         // cari level bawahnya
    //         $id = $k->id;
    //         $k1s = Kategori::where('parent',$id)
    //                             ->where('unedit',$unedit)
    //                             ->orderBy('id')->get();
    //         foreach($k1s as $k1){
    //             $kategoris[$n]['unedit'] = $k1->unedit;
    //             $kategoris[$n]['level'] = $k1->level;
    //             $kategoris[$n]['id'] = $k1->id;
    //             $kategoris[$n]['parent'] = $k1->parent;
    //             $kategoris[$n]['namakategori'] = trim($k1->namakategori);
    //             $kategoris[$n]['route'] = trim($k1->route);
    //             $n++; 

    //             // cari level bawahnya
    //             $id = $k1->id;
    //             $k2s = Kategori::where('parent',$id)
    //                                 ->where('unedit',$unedit)
    //                                 ->orderBy('id')->get();
    //             foreach($k2s as $k2){
    //                 $kategoris[$n]['unedit'] = $k2->unedit;
    //                 $kategoris[$n]['level'] = $k2->level;
    //                 $kategoris[$n]['id'] = $k2->id;
    //                 $kategoris[$n]['parent'] = $k2->parent;
    //                 $kategoris[$n]['namakategori'] = trim($k2->namakategori);
    //                 $kategoris[$n]['route'] = trim($k2->route);
    //                 $n++; 

    //                 // cari level bawahnya
    //                 $id = $k2->id;
    //                 $k3s = Kategori::where('parent',$id)
    //                                     ->where('unedit',$unedit)
    //                                     ->orderBy('id')->get();

    //                 foreach($k3s as $k3){
    //                     $kategoris[$n]['unedit'] = $k3->unedit;
    //                     $kategoris[$n]['level'] = $k3->level;
    //                     $kategoris[$n]['id'] = $k3->id;
    //                     $kategoris[$n]['parent'] = $k3->parent;
    //                     $kategoris[$n]['namakategori'] = trim($k3->namakategori);
    //                     $kategoris[$n]['route'] = trim($k3->route);
    //                     $n++; 

    //                     // cari level bawahnya
    //                     $id = $k3->id;
    //                     $k4s = Kategori::where('parent',$id)
    //                                         ->where('unedit',$unedit)
    //                                         ->orderBy('id')->get();

    //                     foreach($k4s as $k4){
    //                         $kategoris[$n]['unedit'] = $k4->unedit;
    //                         $kategoris[$n]['level'] = $k4->level;
    //                         $kategoris[$n]['id'] = $k4->id;
    //                         $kategoris[$n]['parent'] = $k4->parent;
    //                         $kategoris[$n]['namakategori'] = trim($k4->namakategori);
    //                         $kategoris[$n]['route'] = trim($k4->route);
    //                         $n++; 
    //                     }    
    //                 }    
    //             }    
    
    //         }
    //     }
    //     return $kategoris;
    // }
}
