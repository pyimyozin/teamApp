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
        Schema::create('member', function (Blueprint $table) {
            $table->id();
            $table->string('code', 20)->unique();
            $table->string('name', 100);
            $table->string('password', 255);
            $table->string('email', 100)->unique();
            $table->integer('phone')->unique();
            $table->date('birthday');
            $table->string('nickname', 100)->nullable();
            $table->text('address');
            $table->text('about')->nullable();
            $table->string('created_by', 20)->nullable();
            $table->dateTime('created_at')->nullable()->useCurrent();
            $table->string('updated_by', 20)->nullable();
            $table->dateTime('updated_at')->nullable()->useCurrentOnUpdate();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('member');
    }
};
