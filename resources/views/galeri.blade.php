@extends('layout.master')   

@section('konten')
    <!-- ======= Our Portfolio Section ======= -->
    <section id="portfolio" class="portfolio section-bg">
      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="section-title">
          <h2>Gallery Foto</h2>
          <p>
            Galeri ini berisi foto kegiatan maupun hal-hal yang berhubungan dengan Pusat Jaminan Mutu
          </p>
        </div>

        <!-- <div class="row">
          <div class="col-lg-12">
            <ul id="portfolio-flters">
              <li data-filter="*" class="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div> -->

        <div class="row portfolio-container">

        @foreach($galeris as $g)  
          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src="assets/img/galeri/{{$g->foto}}" class="img-fluid" alt="">
              <div class="portfolio-info">
                <!-- <h4>App 1</h4>
                <p>App</p> -->
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/{{ $g->foto }}" data-gall="portfolioGallery" class="venobox" title="App 1"><i class="icofont-eye"></i></a>
                  <!-- <a href="#" title="More Details"><i class="icofont-external-link"></i></a> -->
                </div>
              </div>
            </div>
          </div>
        @endforeach

          

        </div>

      </div>
    </section><!-- End Our Portfolio Section -->
@endsection