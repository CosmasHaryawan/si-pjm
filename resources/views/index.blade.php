@extends('layout.home')

@section('konten')
<!-- carousel -->
<section id="hero">
  <div class="hero-container">
    <div id="heroCarousel" class="carousel slide carousel-fade" data-ride="carousel">
      <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>

      <div class="carousel-inner" role="listbox">

        @foreach($slides as $s)
        <div class="carousel-item {{ ($s->first) ?'active':'' }}" style="background-image: url('assets/img/slide/{{ $s->foto }}');">

          <div class="carousel-container">
            <div class="carousel-content container">
              <h3 class="animated fadeInDown">{{ $s->judul }}</span></h3>
              <p class="animated fadeInUp">{{ $s->subjudul }}</p>
              <!-- <a href="#about" class="btn-get-started animated fadeInUp scrollto">Read More</a> -->
            </div>
          </div>


        </div>
        @endforeach

      </div>

      <a class="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon icofont-rounded-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon icofont-rounded-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>


    </div>
  </div>
</section>
<!-- end carousel -->



<main id="main">

  <!-- ======= About Us Section ======= -->
  <section id="about" class="about">
    <div class="container">

      <div class="row no-gutters">
        <div class="col-lg-12 text-center p-3">
          <h2>Tentang PJM</h2>
          <?= $isikonten; ?>
        </div>
      </div>

    </div>
  </section><!-- End About Us Section -->

<!-- kegiatan -->
<section id="kegiatan">
<div class="container">
  <h2>Kegiatan PJM</h2>
<div class="card-deck">

@foreach($kegiatans as $k)
  <div class="card">
  <?php
  if($k->foto == null or empty($k->foto)){
    $panjang_kata = 50;
  } else {
    $panjang_kata = 20;
  }
  ?>
  @if($panjang_kata == 20)   
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
@endforeach

</div>
</div>
</section>
  <!-- endkegiatan -->







</main><!-- End #main -->
@endsection

