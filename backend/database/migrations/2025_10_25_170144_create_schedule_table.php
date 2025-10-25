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
        Schema::create('schedule', function (Blueprint $table) {
            $table->id();
            $table->string('title', 255);
            $table->text('description')->nullable();
            $table->time('start_time');
            $table->time('end_time');
            $table->date('date');
            $table->tinyInteger('status')->default(0)->comment('0: pending, 1: completed, 2: incompleted');
            $table->string('created_by', 20)->nullable();
            $table->dateTime('created_at')->nullable()->useCurrent();
            $table->string('updated_by', 20)->nullable();
            $table->dateTime('updated_at')->nullable()->useCurrentOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('schedule');
    }
};
