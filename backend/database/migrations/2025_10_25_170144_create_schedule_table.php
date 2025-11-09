<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
	/**
	 * Run the migrations.
	 */
	public function up(): void {
		Schema::create( 'schedules', function ( Blueprint $table ) {
			$table->id();
			$table->string( 'title', 100 );
			$table->text( 'description' )->nullable();
			$table->bigInteger( 'owned_by' )->unsigned();
			$table->time( 'start_time' );
			$table->time( 'end_time' );
			$table->date( 'date' );
			$table->tinyInteger( 'status' )->default( 0 )->comment( '0: pending, 1: completed, 2: incompleted' );
			$table->dateTime( 'created_at' )->nullable()->useCurrent();
			$table->dateTime( 'updated_at' )->nullable()->useCurrentOnUpdate();
			$table->softDeletes();
			$table->foreign( 'owned_by' )->references( 'id' )->on( 'users' )->cascadeOnDelete();
		} );
	}

	/**
	 * Reverse the migrations.
	 */
	public function down(): void {
		Schema::dropIfExists( 'schedules' );
	}
};
