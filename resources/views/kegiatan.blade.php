@extends('layout.master')

@section('konten')

<!-- kegiatan -->
<section id="kegiatan">
    <div class="container col-11">
        <h2>Kegiatan PJM</h2>
        <!-- <div class="card-deck"> -->
        <div class="row">
            @foreach($kegiatans as $k)
            <div class="col-md-3">
            <div class="card h-100">
                <?php
                if ($k->foto == null or empty($k->foto)) {
                    $panjang_kata = 30;
                } else {
                    $panjang_kata = 15;
                }
                ?>
                @if($panjang_kata == 15)
                <img src="/assets/img/kegiatan/{{ $k->foto }}" class="card-img-top" alt="...">
                @endif
                <div class="card-body">
                    <h5 class="card-title">{{$k->judul}}</h5>
                    <p class="card-text">
                        {{ Str::words($k->narasi,$panjang_kata,'...') }}
                    </p>
                    <button class="btn btn-primary">Baca Selengkapnya</button>
                </div>
                <div class="card-footer">
                    <small class="text-muted">Update: {{$k->updated_at}}</small>
                </div>
            </div>
            </div>
            @endforeach

        </div>
    </div>
</section>


@endsection