@extends('layout.tree')
@section('judul-page','Daftar Kategori / Sub Kategori Dokumen')
@section('subjudul-page','Pembuatan Kategori Dokumen')
@section('konten')
<div class="container">
    <div class="row">
        <div class="col-12 mt-3">
            <!-- <div class="col-9 pull-left">
                <h1 class="">Daftar Kategori / Sub Kategori Dokumen</h1>
            </div> -->
            <div class="col-3 pull-right">
                <a href="/admin-kategori/create" class="btn btn-primary">Tambah Data</a>
            </div>
            <div class="clearfix"></div>
            <div class="col-12 my-2">
                <button class="badge badge-info" onclick='expand_all()'>Expand All</button>
                <button class="badge badge-success" onclick='collapse_all()'>Collapse All</button>
            </div>
            @if (session('status'))
            <div class="alert alert-success">
                {{ session('status') }}
            </div>
            @endif
            <table class="tree table table-bordered">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">Kategori / Sub Kategori Dokumen</th>
                        <th scope="col">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($kategoris as $k)
                    @if ($k['parent'] == 0)
                    <tr class="treegrid-{{$k['id']}}">
                        @else
                    <tr class="treegrid-{{$k['id']}} treegrid-parent-{{$k['parent']}}">
                        @endif
                        <td class="level-{{$k['level']}}">{{$k['namakategori']}}</td>
                        <td>
                            @if ($k['unedit'] == 'Y')
                            &nbsp;
                            @else
                            <a href="/admin-kategori/edit/{{$k['id']}}" class="badge badge-warning">Edit</a>
                            <!-- <form action="/admin-kategori/{{$k['id']}}" method="post" class="d-inline"> -->
                                <!-- @method('delete') -->
                                <!-- @csrf -->
                                <!-- <button class="badge badge-danger delete-confirm" >Hapus</button> -->
                                <!-- onclick="return konfirm(<?=$k['id'];?>,'<?=$k['namakategori'];?>')" -->
                            <!-- </form> -->
                            <meta name="csrf-token" content="{{ csrf_token() }}">
                            <button class="badge badge-danger deleteRecord" data-id="{{ $k['id'] }}" data-nama="{{ $k['namakategori'] }}" >Hapus Data</button>
                            @endif
                        </td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
</div>

@endsection