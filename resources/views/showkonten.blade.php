@extends('layout.home')

@section('head-js')
<style>
    .konten {
        background-color: white;
        margin: 20px auto 50px auto;
        border: none;
        box-shadow: -2px 2px 5px 5px lightgrey;
    }
    .konten .card {
        border: none;
    }
</style>
@endsection

@section('konten')
<div class="konten col-11">
    <div class="card">
        <div class="card-body">
            <?= $isikonten; ?>
        </div>
    </div>
</div>
@endsection