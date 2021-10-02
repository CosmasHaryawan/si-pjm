<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\DokumenController;
use App\Http\Controllers\KategoriController;
use App\Http\Controllers\KontenController;
use App\Http\Controllers\UserController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/',[HomeController::class, 'index']);

Route::get('/galeri',[HomeController::class, 'galeri']);
Route::get('/kegiatan',[HomeController::class, 'kegiatan']);

Route::get('/showkonten/{field}',[HomeController::class, 'show']);

Route::get('/admin-dokumen',[DokumenController::class, 'index']);
Route::get('/admin-dokumen/create',[DokumenController::class, 'create']);
Route::post('/admin-dokumen/save', [DokumenController::class, 'store'])->name('fileUpload');
Route::get('/admin-dokumen/{document}',[DokumenController::class, 'show']);

Route::get('/admin-kategori',[KategoriController::class, 'index']);
Route::delete('/admin-kategori',[KategoriController::class, 'index']);
Route::get('/admin-kategori/create',[KategoriController::class, 'create']);
Route::post('/admin-kategori/save',[KategoriController::class, 'store']);
Route::delete('/admin-kategori/{id}',[KategoriController::class, 'destroy']);

Route::get('/file-manager/{idparent}/{idkategori}',[DokumenController::class, 'fileManager']);
Route::get('/showpdf/{id}',[DokumenController::class, 'showPdf']);

Route::get('/login',[UserController::class, 'login']);
Route::post('/login',[UserController::class, 'validasi']);

Route::get('/user/create',[UserController::class, 'create']);
Route::get('/user/save',[UserController::class, 'store']);
Route::get('/admin/home',[UserController::class, 'dashboard']);



Route::get('/admin-konten/create/{jenis}',[KontenController::class, 'create']);
Route::post('/admin-konten/save',[KontenController::class, 'store']);




