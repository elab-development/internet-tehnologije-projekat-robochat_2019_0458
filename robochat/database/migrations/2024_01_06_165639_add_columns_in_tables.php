<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('robochats', function (Blueprint $table) {
            $table->integer('number_of_positive_feedbacks');
            $table->integer('number_of_negative_feedbacks');
        });
        Schema::table('chats', function (Blueprint $table) {
            $table->string('response',500);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('robochats', function (Blueprint $table) {
            $table ->dropColumn('number_of_positive_feedbacks');
            $table ->dropColumn('number_of_negative_feedbacks');
        });
        Schema::table('chats', function (Blueprint $table) {
            $table ->dropColumn('response');
        });
    }
};
