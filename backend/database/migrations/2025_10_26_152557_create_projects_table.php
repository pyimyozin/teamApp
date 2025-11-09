<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
	/**
	 * Run the migrations.
	 */
	public function up(): void {
		Schema::create( 'projects', function ( Blueprint $table ) {
			$table->id();
			$table->string( 'name', 255 );
			$table->text( 'description' )->nullable();
			$table->bigInteger( 'owned_by' );
			$table->bigInteger( 'lead_by' );
			$table->tinyInteger( 'state' )->default( 0 )->comment( '0: pending, 1: developing, 2: break, 3: testing, 4: released, 5: updating' );
			$table->dateTime( 'start_date' );
			$table->dateTime( 'end_date' );
			$table->bigInteger( 'created_by' )->nullable();
			$table->dateTime( 'created_at' )->nullable()->useCurrent();
			$table->bigInteger( 'updated_by' )->nullable();
			$table->dateTime( 'updated_at' )->nullable()->useCurrentOnUpdate();
		} );
	}

	/**
	 * Reverse the migrations.
	 */
	public function down(): void {
		Schema::dropIfExists( 'projects' );
	}
};
