@extends('layout.admin')

@section('head-js')
<link rel="stylesheet" href="/assets/css/select2.min.css">
<script src="/assets/js/select2.full.min.js"></script>
@endsection

@section('konten')
<div class="container">
    <div class="row">
        <div class="col-10">
            <h1 class="mt-3">Tambah Dokumen</h1>

            <form method="post" action="/admin-dokumen/save" enctype="multipart/form-data">
                @csrf
                @if ($message = Session::get('success'))
                <div class="alert alert-success">
                    <strong>{{ $message }}</strong>
                </div>
                @endif

                <!-- @if (count($errors) > 0)
                <div class="alert alert-danger">
                    <ul>
                        @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
                @endif -->

                <div class="form-group">
                    <label for="kategori_id">Kategori</label>
                    <select class="form-control select2  @error('kategori_id') is-invalid @enderror" name="kategori_id">
                        <option value="">-Pilih Kategori Untuk File Ini-</option>
                        @foreach( $kats as $kat)
                        <option value="{{$kat['id']}}"  {{ old('kategori_id')== $kat['id'] ? 'selected="selected"' : '' }}  >
                            @for($i=0; $i < $kat['level']; $i++)
                                -
                            @endfor    
                            {{$kat['namakategori']}}
                        </option>
                        @endforeach
                        </select>
                    @error('kategori_id') <div class="invalid-feedback"> {{ $message }}   </div>@enderror
                </div>


                <div class="form-group">
                    <label for="juduldokumen">Judul Dokumen</label>
                    <input type="text" class="form-control @error('juduldokumen') is-invalid @enderror" id="juduldokumen" name="juduldokumen">
                    @error('juduldokumen') <div class="invalid-feedback"> {{ $message }}   </div>@enderror
                </div>
                <div class="form-group">
                    <label for="versi">Versi Dokumen</label>
                    <input type="number" class="form-control @error('versi') is-invalid @enderror" id="versi" name="versi">
                    @error('versi') <div class="invalid-feedback"> {{ $message }}   </div>@enderror
                </div>
                <div class="form-group">
                    <label for="deskripsi">Deskripsi</label>
                    <textarea class="form-control @error('deskripsi') is-invalid @enderror" id="deskripsi" name="deskripsi"></textarea>
                    @error('deskripsi') <div class="invalid-feedback"> {{ $message }}   </div>@enderror
                </div>
                <div class="form-group">
                    <label for="file-upload">File Upload</label>
                    <input type="file" class="form-control @error('file') is-invalid @enderror" id="file" name="file">
                    @error('file') <div class="invalid-feedback"> {{ $message }}   </div>@enderror
                </div>
 
                <button type="submit" class="btn btn-primary btn-block mt-4">Simpan</button>
            </form>
        </div>
    </div>
</div>
<div class="mb-10"></div>

@endsection
@section('foot-js')
<script>
$(document).ready(function() {
    $('.select2').select2({
        theme:"classic"
    });

    $(window).resize(function() {
    $('.select2').css('width', "100%");
});

});

$(document).on('select2:open', () => {
    document.querySelector('.select2-search__field').focus();
  });
</script>
@endsection
