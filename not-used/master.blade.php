<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>Pusat Jaminan Mutu - STMIK AKAKOM</title>
  <meta content="" name="descriptison">
  <meta content="" name="keywords">

  <!-- Favicons -->
  <link href="assets/img/favicon.png" rel="icon">
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,600,600i,700,700i,900" rel="stylesheet">

  <!-- Template Main CSS File -->
  <link href="/assets/css/style.css" rel="stylesheet">
  
  <!-- font awesome -->
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />

  <script src="/assets/vendor/jquery/jquery-3.6.0.min.js"></script>

  <!-- Vendor CSS Files -->
  <link href="/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">


  <!-- <link href="/assets/vendor/icofont/icofont.min.css" rel="stylesheet">
  <link href="/assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
  <link href="/assets/vendor/animate.css/animate.min.css" rel="stylesheet">
  <link href="/assets/vendor/venobox/venobox.css" rel="stylesheet">
  <link href="/assets/vendor/aos/aos.css" rel="stylesheet"> -->
<!-- 
  @component("components.umum")
  @endcomponent -->
  
  @include("components.umum")

  <script type="text/javascript" src="/assets/js/jquery.treegrid.min.js"></script>
<script type="text/javascript" src="/assets/js/jquery.cookie.js"></script>

  <!-- =======================================================
  * Template Name: Mamba - v2.0.1
  * Template URL: https://bootstrapmade.com/mamba-one-page-bootstrap-template-free/
  * Author: BootstrapMade.com
  * License: https://bootstrapmade.com/license/
  ======================================================== -->
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
        <a href="index.php"><img src="assets/img/logo-pjm.png" alt="" class="img-fluid"></a>

      </div>

      <nav class="nav-menu float-right d-none d-lg-block">
        <ul>
          <li class="active"><a href="/">Home</a></li>

          <li class="drop-down"><a href="">Institusinya</a>
            <ul>
              <li class="drop-down"><a href="#">STMIK AKAKOM</a>
                <ul>
                  <li><a href="#">Sejarah</a></li>
                  <li><a href="#">Struktur Organisasi</a></li>
                </ul>
              </li>
              <li class="drop-down"><a href="#">PJM</a>
                <ul>
                  <li><a href="#">Deskripsi</a></li>
                  <li><a href="#">Job Description</a></li>
                </ul>
              </li>
            </ul>
          </li>

          <li class="drop-down"><a href="">Dokumen</a>
            <ul>
              <li><a href="#">Institusi</a></li>
              <li class="drop-down"><a href="#">Mutu</a>
                <ul>
                  <li><a href="#">Kebijakan Mutu</a></li>
                  <li><a href="#">Manual Mutu</a></li>
                  <li><a href="#">Standar Mutu</a></li>
                  <li><a href="#">Tata Kelola SPMI</a></li>
                  <li><a href="#">Borang</a></li>
                </ul>
              </li>
              <li><a href="#">Regulasi</a></li>
            </ul>
          </li>

          <li class="drop-down"><a href="">Hasil Evaluasi</a>
            <ul>
              <li class="drop-down"><a href="#">Monev</a>
                <ul>
                  <li><a href="/file-manager">Program Studi</a></li>
                  <li><a href="#">Penelitian dan PKM</a></li>
                  <li><a href="#">Kemahasiswaan</a></li>
                </ul>
              </li>
              <li><a href="#">Audit Akademik Internal</a></li>
              <li><a href="#">Institusi</a></li>
            </ul>
          </li>



          <li><a href="/kegiatan">Kegiatan</a></li>
          <li><a href="/galeri">Gallery</a></li>
        </ul>
      </nav><!-- .nav-menu -->

      <div class="logo float-left">
        <a href="https://www.akakom.ac.id" target="_blank">
          <img src="assets/img/logo-akakom.png" alt="" class="img-fluid">
        </a>
      </div>
    </div>
  </header><!-- End Header -->

  @yield('konten')
<div class="mb-3"></div>


  <!-- ======= Footer ======= -->
  <footer id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="col-lg-3 col-md-6 footer-info">
            <h3>PJM STMIK AKAKOM</h3>
            <p>
              Jl. Raya Janti Karang Jambe No. 143<br>
              Yogyakarta 55198, Indonesia <br><br>
              <strong>Phone:</strong> +62 274 486 664<br>
              <strong>Email:</strong> pjm@akakom.ac.id<br>
            </p>
            <div class="social-links mt-3">
              <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
              <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
              <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
              <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
              <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
            </div>
          </div>

          <div class="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">About us</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Services</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
            </ul>
          </div>

          <div class="col-lg-4 col-md-6 footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
            <form action="" method="post">
              <input type="email" name="email"><input type="submit" value="Subscribe">
            </form>

          </div>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong><span>Mamba</span></strong>. All Rights Reserved
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
  <script src="/assets/vendor/jquery.easing/jquery.easing.min.js"></script>
  <script src="/assets/vendor/php-email-form/validate.js"></script>
  <script src="/assets/vendor/jquery-sticky/jquery.sticky.js"></script>
  <script src="/assets/vendor/venobox/venobox.min.js"></script>
  <script src="/assets/vendor/waypoints/jquery.waypoints.min.js"></script>
  <script src="/assets/vendor/counterup/counterup.min.js"></script>
  <script src="/assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
  <script src="/assets/vendor/aos/aos.js"></script>

  <!-- Template Main JS File -->
  <script src="/assets/js/main.js"></script>

</body>

</html>