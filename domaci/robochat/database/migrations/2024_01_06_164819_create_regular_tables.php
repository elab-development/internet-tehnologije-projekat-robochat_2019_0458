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
        Schema::create('robochats', function (Blueprint $table) {
            $table->id();
            $table->string('robochat_name',10);
            $table->timestamps();
        });
        Schema::create('feedbacks', function (Blueprint $table) {
            $table->id();
            $table->string('feedbackType',50);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('robochats');
        Schema::dropIfExists('feedbacks');
    }
};
