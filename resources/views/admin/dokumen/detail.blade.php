@extends('layout.master')

@section('konten')
<div class="container">
    <div class="row">
        <div class="col-10">
            <h1 class="mt-3">Detail Dokumen</h1>

            <div class="card" >
                <div class="card-body">
                    <h5 class="card-title">{{ $document->namadokumen}}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{{ $document->update_at}}</h6>
                    <p class="card-text">{{ $document->deskripsi}}</p>
                    <a href="#" class="card-link">{{ $document->filepath}}</a>
                </div>
            </div>

        </div>
    </div>
</div>
<div class="mb-10"></div>

@endsection