@extends('layout.admin')

@section('head-js')
<!-- summernote -->
<link rel="stylesheet" href="/assets/admin/css/summernote/summernote-lite.min.css">
<link rel="stylesheet" href="/assets/admin/css/summernote/table/summernote-ext-table.css">

@endsection
@section('judul-page'," $judul ")
@if (session('status'))
@section('subjudul-page')
<div class="alert alert-dismissible alert-success">
    <button class="close" type="button" data-dismiss="alert">×</button>
    <strong>Sukses!</strong> {{ session('status') }}
</div>
@endsection
@endif


@section('konten')

<!-- <div class="col-md-12 col-lg-12"> -->
<form action="/admin-konten/save" method="post" enctype="multipart/form-data">
    @csrf
    <input type="hidden" name="jeniskonten" value="{{$jenisKonten}}">
    <div class="tile-body">

        @foreach($datas as $d)
        <textarea class="form-control summernote col-md-12" id="summernote" name="konten">{{ $d->$jenisKonten }}</textarea>
        @endforeach
    </div>
    <div class="tile-footer">
        <button type="submit" class="btn btn-primary">Simpan</button>
        <button type="button" class="btn btn-secondary" onclick="self.history.back()">Batal</button>
    </div>

</form>

@endsection

@section('foot-js')
<!-- summernote -->
<script src="/assets/admin/js/summernote/summernote-lite.min.js"></script>
<script src="/assets/admin/js/summernote/summernote-ext-table.js"></script>
<script>
    $(document).ready(function() {
        $('.summernote').summernote({
            height: 280,
            toolbar: [
                ['style', ['style']],
                ['font', ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript', 'clear']],
                ['fontname', ['fontname', 'fontsize', 'color']],
                ['para', ['ul', 'ol', 'paragraph', 'height']],
                ['insert', ['hr', 'jTable', 'link', 'picture']],
                ['misc', ['undo', 'redo', 'fullscreen']],
            ],
            popover: {
                table: [
                    ['merge', ['jMerge']],
                    ['style', ['jBackcolor', 'jBorderColor', 'jAlign', 'jAddDeleteRowCol']],
                    ['info', ['jTableInfo']],
                    ['delete', ['jWidthHeightReset', 'deleteTable']],
                ],
                image: [
                    ['image', ['resizeFull', 'resizeHalf', 'resizeQuarter', 'resizeNone']],
                    ['float', ['floatLeft', 'floatRight', 'floatNone']],
                    ['remove', ['removeMedia']]
                ],
            },
            jTable: {
                /**
                 * drag || dialog
                 */
                mergeMode: 'drag'
            }
        });
    })
</script>
@endsection