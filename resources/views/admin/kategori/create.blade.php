@extends('layout.admin')

@section('head-js')
<link rel="stylesheet" href="/assets/css/select2.min.css">
<script src="/assets/js/select2.full.min.js"></script>
@endsection

@section('konten')
<div class="container">
    <div class="row">
        <div class="col-10">
            <h1 class="mt-3">Tambah Kategori</h1>

            <form method="post" action="/admin-kategori/save">
            @csrf
                <div class="form-group">
                    <label for="namakategori">Nama Kategori</label>
                    <input type="text" class="form-control @error('namakategori') is-invalid @enderror" 
                            id="namakategori" name="namakategori" value="{{ old('namakategori') }}">
                    @error('namakategori') <div class="invalid-feedback"> {{ $message }}   </div>@enderror
                </div>
                <div class="form-group">
                    <label for="parent">Parent</label>
                    <select class="form-control select2  @error('parent') is-invalid @enderror" name="parent">
                        <option value="">-Pilih Parent dari Kategori Ini-</option>
                        @foreach( $kats as $kat)
                        <option value="{{$kat['id']}}"  {{ old('parent')== $kat['id'] ? 'selected="selected"' : '' }} {{ $kat['unedit'] != 'Y' ? 'disabled' : '' }}  >
                            @for($i=0; $i < $kat['level']; $i++)
                                -
                            @endfor    
                            {{$kat['namakategori']}}
                        </option>
                        @endforeach
                    </select>
                    @error('parent') <div class="invalid-feedback"> {{ $message }}   </div>@enderror
                </div>

                <!-- <div class="form-group">
                <label for="route">Route</label>
                <input type="text" name="route" id="route" class="form-control">
                </div> -->

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</div>
<div style="margin-bottom: 100px;"></div>
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

<!-- <div class="mb-20"></div> -->
