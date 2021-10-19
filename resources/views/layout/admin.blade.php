<?php session_start();?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>::Admin SI-PJM::</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Main CSS-->
    <link rel="stylesheet" type="text/css" href="/assets/admin/css/main.css">
    <!-- Font-icon css-->
    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- <script src="/assets/vendor/jquery/jquery-3.6.0.min.js"></script> -->
    <script src="/assets/admin/js/jquery-3.3.1.min.js"></script>

@yield('head-js')
 
  </head>
  <body class="app sidebar-mini">
    <!-- Navbar-->
    <header class="app-header"><a class="app-header__logo" href="index.html">pusat jaminan mutu</a>
      <!-- Sidebar toggle button--><a class="app-sidebar__toggle" href="#" data-toggle="sidebar" aria-label="Hide Sidebar"></a>
      <!-- Navbar Right Menu-->
      <ul class="app-nav">
        <!-- User Menu-->
        <li class="dropdown"><a class="app-nav__item" href="#" data-toggle="dropdown" aria-label="Open Profile Menu"><i class="fa fa-user fa-lg"></i></a>
          <ul class="dropdown-menu settings-menu dropdown-menu-right">
            <li><a class="dropdown-item" href="page-user.html"><i class="fa fa-cog fa-lg"></i> Settings</a></li>
            <li><a class="dropdown-item" href="page-user.html"><i class="fa fa-user fa-lg"></i> Profile</a></li>
            <li><a class="dropdown-item" href="/logout"><i class="fa fa-sign-out fa-lg"></i> Logout</a></li>
          </ul>
        </li>
      </ul>
    </header>
    <!-- Sidebar menu-->
    <div class="app-sidebar__overlay" data-toggle="sidebar"></div>
    <aside class="app-sidebar">
      
      <div class="app-sidebar__user">
      <!-- <img class="app-sidebar__user-avatar" src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/48.jpg" alt="User Image"> -->
				<i class="fa fa-user"></i>
        <div>
          <p class="app-sidebar__user-name"> {{ auth()->user()->name }}</p>
          <p class="app-sidebar__user-designation">{{ auth()->user()->role }}</p>
        </div>
      </div>
      <?php
				//submenu=0->false, submenu=1->submenu, submenu=2->end submenu
				$menus = [
						['parent'=>false, 'submenu'=>0, 'icon'=>'fa-user', 'href'=>'/admin-kategori', 'label'=>'Kategori'],
						['parent'=>false, 'submenu'=>0, 'icon'=>'fa-file', 'href'=>'/admin-dokumen', 'label'=>'Upload Dokumen'],
						['parent'=>true, 'submenu'=>0, 'icon'=>'fa-laptop', 'href'=>'#', 'label'=>'STMIK AKAKOM'],
						['parent'=>false,'submenu'=>1, 'icon'=>'fa-circle','href'=>'/admin-konten/create/sejarah-stmik','label'=>'Sejarah'],
						['parent'=>false,'submenu'=>1, 'icon'=>'fa-circle','href'=>'/admin-konten/create/struktur-stmik','label'=>'Struktur Organisasi'],
						['parent'=>false, 'submenu'=>2],
						['parent'=>true, 'submenu'=>0, 'icon'=>'fa-laptop', 'href'=>'#', 'label'=>'PJM'],
						['parent'=>false,'submenu'=>1, 'icon'=>'fa-circle','href'=>'/admin-konten/create/deskripsi-pjm','label'=>'Deskripsi'],
						['parent'=>false,'submenu'=>1, 'icon'=>'fa-circle','href'=>'/admin-konten/create/jobdesc-pjm','label'=>'Job Desc'],
						['parent'=>false,'submenu'=>1, 'icon'=>'fa-circle','href'=>'/admin-konten/create/about-pjm','label'=>'Tentang PJM'],
						['parent'=>false, 'submenu'=>2],
						['parent'=>false, 'submenu'=>0, 'icon'=>'fa-file', 'href'=>'#', 'label'=>'Kegiatan'],
						['parent'=>false, 'submenu'=>0, 'icon'=>'fa-file', 'href'=>'#', 'label'=>'Gallery'],
				];
      ?>
      
      <ul class="app-menu">
        <li><a class="app-menu__item" href="/admin/home"><i class="app-menu__icon fa fa-dashboard"></i><span class="app-menu__label">Dashboard</span></a></li>
				<?php foreach($menus as $m) { ?>
					<?php if($m['parent']) { ?>
							<li class="treeview"><a class="app-menu__item" href="<?=$m['href'];?>" data-toggle="treeview">
									<i class="app-menu__icon fa <?=$m['icon'];?>"></i>
									<span class="app-menu__label"><?=$m['label'];?></span><i class="treeview-indicator fa fa-angle-right"></i></a>
								<ul class="treeview-menu">
					
					<?php } elseif($m['submenu'] == 1) { ?>
									<li><a class="treeview-item" href="<?=$m['href'];?>"><i class="icon fa <?=$m['icon'];?> "></i> <?=$m['label'];?></a></li>
					
					<?php } elseif($m['submenu'] == 2) { ?>
								</ul>
							</li>
				  <?php } else { ?>
							<li><a class="app-menu__item" href="<?=$m['href'];?>">
									<i class="app-menu__icon fa <?=$m['icon'];?>"></i>
									<span class="app-menu__label"><?=$m['label'];?></span></a></li>
				  <?php } ?>

				<?php } ?>

			</ul>

    </aside>
    
    
    
    <main class="app-content">

      <div class="app-title">
        <div>
          <h1><i class="fa fa-dashboard"></i> @yield('judul-page')</h1>
          <p>@yield('subjudul-page')</p>
        </div>
      <!--
        <ul class="app-breadcrumb breadcrumb">
          <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
          <li class="breadcrumb-item"><a href="#">Blank Page</a></li>
        </ul>
      -->
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="tile">
            @yield('konten')
          </div>
        </div>
      </div>
    </main>
    
    
    <!-- Essential javascripts for application to work-->

    <!-- <script src="/assets/admin/js/jquery-3.3.1.min.js"></script> -->
    <script src="/assets/admin/js/popper.min.js"></script>
    <script src="/assets/admin/js/bootstrap.min.js"></script>
    <script src="/assets/admin/js/main.js"></script>
    <!-- The javascript plugin to display page loading on top-->
    <!--
    <script src="js/plugins/pace.min.js"></script>
    -->
    <!-- Page specific javascripts-->
    @yield('foot-js')
</body>
</html>