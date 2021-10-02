<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateKontensTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('kontens', function (Blueprint $table) {
            $table->id();
            $table->longText('stmik_sejarah')->nullable();
            $table->longText('stmik_struktur')->nullable();
            $table->longText('pjm_deskripsi')->nullable();
            $table->longText('pjm_jobdesc')->nullable();
            $table->longText('pjm_about')->nullable();
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
        Schema::dropIfExists('kontens');
    }
}
