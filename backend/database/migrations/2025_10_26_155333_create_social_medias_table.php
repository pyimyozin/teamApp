<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
	/**
	 * Run the migrations.
	 */
	public function up(): void {
		Schema::create( 'social_medias', function ( Blueprint $table ) {
			$table->id();
			$table->integer( 'type' )->comment( 'social type list' );
			$table->bigInteger( 'user' )->unsigned();
			$table->string( 'url', 255 );
			$table->boolean( 'is_publish' )->default( true );
			$table->dateTime( 'created_at' )->nullable()->useCurrent();
			$table->dateTime( 'updated_at' )->nullable()->useCurrentOnUpdate();
			$table->foreign( 'user' )->references( 'id' )->on( 'users' )->cascadeOnDelete();
		} );
	}

	/**
	 * Reverse the migrations.
	 */
	public function down(): void {
		Schema::dropIfExists( 'social_medias' );
	}
};
