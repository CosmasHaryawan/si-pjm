@extends('layout.admin')


@section('head-js')
<script type="text/javascript" src="/assets/js/jquery.treegrid.min.js"></script>
<script type="text/javascript" src="/assets/js/jquery.cookie.js"></script>
<link rel="stylesheet" href="/assets/css/sweetalert2.min.css">
<script src="/assets/js/sweetalert2.min.js"></script>
<style>
    .level-0 {
        font-weight: bold;
    }

    .level-1 {
        color: brown;
    }

    .level-2 {
        color: blue;
    }

    .level-3 {
        color: darkgreen;
    }

    .level-4 {
        color: darkmagenta;
    }
</style>
@endsection

@section('foot-js')
<link rel="stylesheet" href="/assets/css/jquery.treegrid.css">

<script type="text/javascript">
    $(document).ready(function() {
        //     $('.tree').treegrid();

        $('.tree').treegrid({
            'initialState': 'collapsed',
            'saveState': true,
        });

    });


    function expand_all() {
        $('.tree').treegrid('expandAll');
    }

    function collapse_all() {
        $('.tree').treegrid('collapseAll');
    }
</script>

<script>
    //         $('.delete-confirm').on('click', function (event) {
    //     event.preventDefault();
    //     const url = $(this).attr('href');
    //     swal({
    //         title: 'Are you sure?',
    //         text: 'This record and it`s details will be permanantly deleted!',
    //         icon: 'warning',
    //         buttons: ["Cancel", "Yes!"],
    //     }).then(function(value) {
    //         if (value) {
    //             window.location.href = url;
    //         }
    //     });
    // });
    $(".deleteRecord").click(function() {
        var id = $(this).data("id");
        var nama = $(this).data("nama");
        var token = $("meta[name='csrf-token']").attr("content");
        var url = "/admin-kategori/"+id;
        Swal.fire({
            title: 'Hapus Data',
            html: 'Akan Menghapus Kategori : <strong>' + url + '</strong> ?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            confirmButtonText: 'ya, Hapus Data',
            cancelButtonText: 'Batal Hapus'
        }).then((r) => {
            if (r.isConfirmed) {
                console.log("masuk Ajax");
                $.ajax({
                    url:url,
                    type:"delete",
                    data:{'id':id, "_token": token,"_method":"delete"},
                    succes:function(d){
                        //window.location.href = "/admin-kategori"
                        console.log("Sukses");
                    },
                    error:function(e){
                        console.log(e);
                    }
                })
            } else {
                swal.fire({
                    title: 'Informasi',
                    html: "Batal Hapus " + nama,
                    icon: "info",
                    timer: 2000
                })
                
            }
        })

    })

</script>

@endsection