<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>Pusat Jaminan Mutu - STMIK AKAKOM</title>
  <meta content="" name="descriptison">
  <meta content="" name="keywords">

  <!-- Favicons -->
  <link href="/assets/img/favicon.png" rel="icon">
  <link href="/assets/img/apple-touch-icon.png" rel="apple-touch-icon">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,600,600i,700,700i,900" rel="stylesheet">

  <!-- Template Main CSS File -->
  <link href="/assets/css/style.css" rel="stylesheet">
  <link href="/assets/css/mystyle.css" rel="stylesheet">

  <!-- font awesome -->
  <!-- <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" /> -->
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">

  <script src="/assets/vendor/jquery/jquery-3.6.0.min.js"></script>

  <!-- Vendor CSS Files -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
  <!-- <link href="/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"> -->
  <link href="/assets/vendor/icofont/icofont.min.css" rel="stylesheet">

  @yield('head-js')


  <!-- =======================================================
  * Template Name: Mamba - v2.0.1
  * Template URL: https://bootstrapmade.com/mamba-one-page-bootstrap-template-free/
  * Author: BootstrapMade.com
  * License: https://bootstrapmade.com/license/
  ======================================================== -->
  <style>
    #header .logo {
      height: 80px;
      margin-top: -10px;
      margin-left: 0px;
      /* background-color: white; */
      width: 300px;
      display: flex;
      justify-content: space-evenly;
    }

    body {
      background-color: white;
    }
  </style>
</head>

<body>

  <!-- ======= Top Bar ======= -->
  <!-- <section id="topbar" class="d-none d-lg-block">
    <div class="container clearfix">
      <div class="contact-info float-left">
        <i class="icofont-envelope"></i><a href="mailto:pjm@akakom.ac.id">pjm@akakom.ac.id</a>
        <i class="icofont-phone"></i> 0274-486 664
      </div>
      <div class="social-links float-right">
        <a href="#" class="twitter"><i class="icofont-twitter"></i></a>
        <a href="#" class="facebook"><i class="icofont-facebook"></i></a>
        <a href="#" class="instagram"><i class="icofont-instagram"></i></a>
        <a href="#" class="skype"><i class="icofont-skype"></i></a>
        <a href="#" class="linkedin"><i class="icofont-linkedin"></i></i></a>
      </div>
    </div>
  </section> -->

  <!-- ======= Header ======= -->
  <header id="header">
    <div class="container">

      <div class="logo float-left">
        <!-- <h1 class="text-light"><a href="index.html"><span>PJM STMIK AKAKOM</span></a></h1> -->
        <!-- Uncomment below if you prefer to use an image logo -->

        <a href="index.php">
          <img src="/assets/img/logo-pjm-nobg.png" alt="" class="img-fluid">
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://www.akakom.ac.id" target="_blank">
          <img src="/assets/img/logo-stmik-akakom-nobg.png" alt="" class="img-fluid">
        </a>
      </div>

      <nav class="nav-menu float-right d-none d-lg-block">
        <ul>
          <li class=""><a href="/">Home</a></li>
          <li class="drop-down"><a href="">Institusi</a>
            <ul>
              <li class="drop-down"><a href="#">STMIK AKAKOM</a>
                <ul>
                  <li><a href="/showkonten/sejarah-stmik">Sejarah</a></li>
                  <li><a href="/showkonten/struktur-stmik">Struktur Organisasi</a></li>
                </ul>
              </li>
              <li class="drop-down"><a href="#">PJM</a>
                <ul>
                  <li><a href="/showkonten/deskripsi-pjm">Deskripsi</a></li>
                  <li><a href="/showkonten/jobdesc-pjm">Job Description</a></li>
                </ul>
              </li>
            </ul>
          </li>

          <li class="drop-down"><a href="">Dokumen</a>
            <ul>
              <li><a href="/file-manager/6/0">Institusi</a></li>
              <li class="drop-down"><a href="#">Mutu</a>
                <ul>
                  <li><a href="/file-manager/8/0">Kebijakan Mutu</a></li>
                  <li><a href="/file-manager/9/0">Manual Mutu</a></li>
                  <li><a href="/file-manager/10/0">Standar Mutu</a></li>
                  <li><a href="/file-manager/11/0">Tata Kelola SPMI</a></li>
                  <li><a href="/file-manager/12/0">Borang</a></li>
                </ul>
              </li>
              <li><a href="/file-manager/13/0">Regulasi</a></li>
            </ul>
          </li>
@if (!isset(auth()->user()->role) or (auth()->user()->role == ""))
@else
          <li class="drop-down"><a href="">Hasil Evaluasi</a>
            <ul>
              <li class="drop-down"><a href="#">Monev</a>
                <ul>
                  <li><a href="/file-manager/5/0">Program Studi</a></li>
                  <li><a href="/file-manager/14/0">Penelitian dan PKM</a></li>
                  <li><a href="/file-manager/15/0">Selain Bidang Tridharma</a></li>
                </ul>
              </li>
              <li><a href="/file-manager/4/0">Audit Akademik Internal</a></li>
              <li><a href="/file-manager/16/0">Evaluasi Institusi</a></li>
            </ul>
          </li>
@endif


          <li><a href="/kegiatan">Kegiatan</a></li>
          <li><a href="/galeri">Gallery</a></li>
@if (!isset(auth()->user()->role) or (auth()->user()->role == ""))
          <li><a href="/login">Login</a></li>
@else
          <li><a href="/logout">Logout</a></li>
@endif
        </ul>
      </nav><!-- .nav-menu -->

      <!-- <div class="logo float-left">
        <a href="https://www.akakom.ac.id" target="_blank">
          <img src="/assets/img/logo-akakom.png" alt="" class="img-fluid">
        </a>
      </div> -->
    </div>
  </header><!-- End Header -->

  @yield('konten')
  <div class="mb-3"></div>


  <!-- ======= Footer ======= -->
  <style>
    .foot-bawah {
      background-color: white;
      color: navy;
      border-top: 1px solid gray;
      box-shadow: -2px 0px 0px 0px gray;
      padding: 10px;
    }

    .foot-bawah img {
      max-width: 150px;
      max-height: 150px;
      margin: auto;
      padding-top: 10px;
    }

    .copyright strong,
    .credits {
      display: none;
    }
  </style>
  <footer id="footer">
    <div class="d-flex flex-row justify-content-between flex-wrap bd-highlight mb-3 foot-bawah">
      <div class="p-2 bd-highlight">
        <img src="/assets/img/logo-pjm-nobg.png" alt="" class="img-fluid">
      </div>
      <div class="p-2 bd-highlight bg-light">
        <h3>PJM STMIK AKAKOM</h3>
        <p>
          Jl. Raya Janti Karang Jambe No. 143<br>
          Yogyakarta 55198, Indonesia <br><br>
          <strong>Phone:</strong> +62 274 486 664<br>
          <strong>Email:</strong> pjm@akakom.ac.id<br>
        </p>
      </div>
      <div class="p-2 bd-highlight text-center">
        <div class="card h-100">
          <img src="/assets/img/ban-pt-small.png" alt="" class="img-fluid"><br />
          <div class="card-footer">
            <a href="https://banpt.or.id/" target="_blank">BANPT</a><br />
            <a href="https://sapto.banpt.or.id/" target="_blank">SAPTO</a>
          </div>
        </div>
      </div>
      <!-- <div class="p-2 bd-highlight">
          <img src="/assets/img/ban-pt-sapto-small.png" alt="" class="img-fluid">
      </div> -->
      <div class="p-2 bd-highlight text-center">
        <div class="card h-100">
          <img src="/assets/img/dikbud-small.png" alt="" class="img-fluid"><br />
          <div class="card-footer">
            <a href="https://www.kemdikbud.go.id/" target="_blank">kemdikbud.go.id</a><br />
            <a href="https://www.dikti.kemdikbud.go.id/" target="_blank">dikti.kemdikbud.go.id</a>
          </div>
        </div>
      </div>
      <div class="p-2 bd-highlight">
        <div class="card h-100">
          <img src="/assets/img/logo-stmik-akakom-nobg.png" alt="" class="img-fluid">
          <div class="card-footer">
            <a href="https://www.akakom.ac.id/" target="_blank">www.akakom.ac.id</a>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="copyright">
          &copy; 2021 Copyright <strong><span>Mamba</span></strong><b>PJM STMIK AKAKOM</b>. All Rights Reserved
        </div>
        <div class="credits">
          <!-- All the links in the footer should remain intact. -->
          <!-- You can delete the links only if you purchased the pro version. -->
          <!-- Licensing information: https://bootstrapmade.com/license/ -->
          <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/mamba-one-page-bootstrap-template-free/ -->
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
  </footer><!-- End Footer -->

  <a href="#" class="back-to-top"><i class="icofont-simple-up"></i></a>

  <!-- Vendor JS Files -->
  <script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="/assets/vendor/jquery-sticky/jquery.sticky.js"></script>

  @yield("foot-js")
</body>

</html>