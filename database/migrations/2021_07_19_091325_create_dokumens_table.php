<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDokumensTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dokumens', function (Blueprint $table) {
            $table->id();
            $table->string("juduldokumen",100);
            $table->integer("kategori_id");
            $table->string("namafile",100);
            $table->string("namaorifile",100);
            $table->string("deskripsi",200)->nullable();
            $table->tinyInteger("versi")->default(0)->nullable();
            $table->string("filemimetype",100)->nullable();
            $table->string("fileext",10)->nullable();
            $table->integer("filesize")->nullable()->default(0);
            $table->softDeletes($column = 'deleted_at', $precision = 0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('dokumens');
    }
}
