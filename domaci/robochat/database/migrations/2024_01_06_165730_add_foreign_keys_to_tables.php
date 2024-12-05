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
        Schema::table('feedbacks', function (Blueprint $table) {
            $table->foreignId('user_id')->nullable()->references('id')->on('users')->onDelete('set null');
         });

         Schema::table('chats', function (Blueprint $table) {
            $table->foreignId('user_id')->nullable()->references('id')->on('users')->onDelete('cascade');
            $table->foreignId('robochat_id')->nullable()->references('id')->on('robochats')->onDelete('cascade');
            $table->foreignId('feedback_id')->nullable()->references('id')->on('feedbacks')->onDelete('set null');
         });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('feedbacks', function (Blueprint $table) {
            $table->dropForeign('user_id');
         });

         Schema::table('chats', function (Blueprint $table) {
            $table->dropForeign('user_id');
            $table->dropForeign('robochat_id');
            $table->dropForeign('feedback_id');
         });
    }
};
