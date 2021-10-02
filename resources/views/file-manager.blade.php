@extends('layout.master')   

@section('head-js')
<style>

.card-folder {
    /* position: fixed; */
    position: static;
    margin-left: 5px;
    margin-top: 5px;
    max-width: 300px;
    margin-bottom: 10px;
}

.card-file {
    /* position:absolute; */
    position:static;
    /* margin-left: 301px; */
    margin-top: 5px;
}

.card-file .card {
    min-height: 300px;
}

.card-file .card .car-body .card-title {
    font-size: 0.9rem;
}

.card-file .card .card-body .card-text {
    font-size: 0.8rem;
}
.card-file .card-header p {
    float: left;
    color: black;
    font-size: 0.9rem;
}
.card-file a {
    text-decoration: none;
}
.card-file .card-body .card:hover {
    background-color:skyblue;
}
.small {
    font-weight: bold;
}
@media (max-width:768px){
    .card-folder {
        max-width: 100%;

    }
    .card-file {
        margin-left: 5px;
    }
}

/* @media (max-width:760px){
    .card-file {
        width: calc(100vw-300px);
    }
} */
body {
    background-color: lightcyan;
}    
</style>

@endsection

@section('konten')
<div class="container-file-manager mt-4">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 col-md-3 col-lg-3 card-folder">
                <div class="card bg-light">
                    <div class="card-header">Folder Dokumen</div>
                    <div class="card-body">
                        <p class="card-text">
                        <ul class="list-group list-group-flush">
                @if ($kats->count() > 0)
                    @foreach($kats as $k)
                        <li class="list-group-item">
                        @if ($idkategori == $k->id) 
                            <i class="far fa-folder-open"></i>
                            <?php $namaFolder = $k->namakategori; ?> 
                        @else
                            <i class="far fa-folder"></i>
                        @endif
                            <a href="/file-manager/{{ $k->parent }}/{{ $k->id }}">{{ $k->namakategori }}</a>
                        </li>
                    @endforeach
                @else
                    <?php $namaFolder = $menuDipilih; ?> 

                    <li class="list-group-item">
                        <i class="far fa-folder-open"></i>
                        <a href="#">{{ $menuDipilih }}</a>
                    </li>
                @endif
                        </ul>
                        </p>
                    </div>
                </div>
            </div>

            <div class="col-12 col-md-9 col-lg-9 card-file">
                <div class="card bg-light mb-3">
                    <div class="card-header">File Dokumen  ({{ $doks->count() }} File di dalam Folder {{ $namaFolder }})</div>
                    <div class="card-body">

                        <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
                        @foreach($doks as $d)
                            <div class="col mb-4">
                            @if ($d->fileext == 'pdf')    
                            <a href="/showpdf/{{ $d->id }}">
                            @else
                            <a href="{{ asset('/storage/documents/'.$d->namafile) }}">
                            @endif
                                <div class="card border-success ">
                                    <div class="col-12 card-header text-center  bg-{{ $arClr[$d->fileext] }} text-white">
                                        <i class="col-2 far fa-file-{{ $arExt[$d->fileext] }} fa-3x"></i>
                                        <p class="col-10">{{ $d->namafile }}</p>
                                    </div>

                                    <div class="card-body text-success">
                                        <h5 class="card-title">{{ $d->juduldokumen }}</h5>
                                        
                                        <p class="card-text">{{ $d->deskripsi }}</p>
                                        <p class="card-text">Versi:{{ $d->versi }}</p>
                                    </div>
                                    <div class="card-footer text-white bg-{{ $arClr[$d->fileext] }}">
                                        <div class="small">Last Modified: {{ $d->updated_at }}</div>
                                    </div>
                                </div>
                            </a>
                            </div>
                            @endforeach

                        </div>


                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- <div class="clearposition"></div> -->
@endsection

@section("foot-js")
  <script src="/assets/vendor/venobox/venobox.min.js"></script>
  <script src="/assets/vendor/counterup/counterup.min.js"></script>
  <script src="/assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
  <script src="/assets/vendor/aos/aos.js"></script>

  <!-- Template Main JS File -->
  <script src="/assets/js/main.js"></script>

@endsection

