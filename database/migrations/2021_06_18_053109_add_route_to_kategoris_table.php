<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRouteToKategorisTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('kategoris', function (Blueprint $table) {
            //
            $table->char("unedit",1)->default("Y");
            $table->string("route",200)->default("");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('kategoris', function (Blueprint $table) {
            //
            $table->dropColumn('unedit');
            $table->dropColumn('route');
        });
    }
}
