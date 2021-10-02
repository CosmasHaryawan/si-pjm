<!DOCTYPE html>
<html lang="en-US">
<head>
    <title>Tampilkan PDF</title>
	<!-- css -->
	<link rel="stylesheet" type="text/css" href="/assets/css/style.css">
	<link rel="stylesheet" type="text/css" href="/assets/css/kurasa.min.css">
	<!-- /end css -->
    <style>
        .flipbook {
            position: relative;
        }
        .btn {
            position: fixed;
            z-index: 1000;
            background-color: red;
            color: yellow;
        }
    </style>
</head>
<body>
    <button class="btn btn-success" onclick="self.history.back()">Kembali</button>

<div id="flipbook" class="flipbook" style="height:750px;margin-top: 0;"></div>


<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script type="text/javascript" src="/assets/js/pdf.min.js"></script>

<!-- <script type="text/javascript" src="assets/js/jquery.kurasa.min.js"></script> -->
<script type="text/javascript" src="/assets/js/jquery.kurasa.js"></script>
<script>
$(document).ready(function() {
	var options = {
		responsive:true,
		autoFit:true,
		autoHeight: false,
		
		padding:{
			top:10,
			left:10,
			right:10,
			bottom:70
		},
		
		// pdfUrl: 'files/Shujaaz.pdf',
		pdfUrl: '{{ $namafile }}',
		pdfAutoCreatePages: true,
		pdfBookSizeFromDocument: true,
		
		zoom:1,
		
		toolbarControls: [
			{type:'share',        active:false},
			{type:'sound',        active:true, optional: false},
			{type:'outline',      active:false},
			{type:'thumbnails',   active:true},
			{type:'gotofirst',    active:true},
			{type:'prev',         active:true},
			{type:'pagenumber',   active:true},
			{type:'next',         active:true},
			{type:'gotolast',     active:true},
			{type:'zoom-in',      active:true, optional: false},
			{type:'zoom-out',     active:true, optional: false},
			{type:'zoom-default', active:true, optional: false},
			{type:'optional',     active:false},
			{type:'download',     active:false, optional: false},
			{type:'fullscreen',   active:true, optional: false},
		],
		
	};
	
	$('#flipbook').kurasa(options);

});
</script>