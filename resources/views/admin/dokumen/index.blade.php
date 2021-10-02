@extends('layout.admin')
@section('judul-page','Daftar Dokumen')
@section('konten')
<div class="container-fluid">
    <div class="row">
        <div class="col-12 mt-3">
            <div class="row">
                <!-- <div class="col-7 pull-left">
                    <h1 class="">Daftar Dokumen</h1>
                </div> -->
                <div class="col-12 text-right pull-right mb-2">
                    <a href="/admin-dokumen/create" class="btn btn-primary">Tambah Data</a>
                </div>
            </div>
            @if (session('status'))
            <div class="alert alert-success col-12">
                {{ session('status') }}
            </div>
            @endif

            <table class="table table-bordered">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Kategori</th>
                        <th scope="col">Nama Dokumen</th>
                        <th scope="col">Deskripsi</th>
                        <th scope="col">File</th>
                        <th scope="col">Updated At</th>
                        <th scope="col">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach( $dokumens as $d )
                    <!-- $filenya = asset('/storage/documents/'.$d->namafile) 
         dd($filenya) 
         $time = Storage::lastModified('/storage/documents/'.$d->namafile)  -->

                    <tr>
                        <td>{{ $loop->iteration }}</td>
                        <td>{{ $d->namakategori }}</td>
                        <td>{{ $d->juduldokumen }}</td>
                        <td>{{ $d->deskripsi }}</td>
                        <td>{{ $d->namafile }}</td>
                        <td>{{ $d->updated_at }}</td>
                        <td>
                            <a href="" class="badge badge-success">Edit</a>
                            <a href="" class="badge badge-danger">Hapus</a>
                            <a href="/admin-dokumen/{{ $d->id }}" class="badge badge-warning">Detail</a>
                        </td>
                    </tr>
                    @endforeach
                </tbody>
            </table>


        </div>
    </div>
</div>


@endsection