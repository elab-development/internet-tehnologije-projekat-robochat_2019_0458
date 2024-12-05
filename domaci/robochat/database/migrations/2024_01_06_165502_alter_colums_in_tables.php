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
            $table->string('robochat_name', 50)->change();
        });

        Schema::table('chats', function (Blueprint $table) {
            $table->renameColumn('dateAndTime', 'timestamp');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('robochats', function (Blueprint $table) {
            $table->string('robochat_name', 10)->change();
        });

        Schema::table('chats', function (Blueprint $table) {
            $table->renameColumn('timestamp', 'dateAndTime');
        });
    }
};
