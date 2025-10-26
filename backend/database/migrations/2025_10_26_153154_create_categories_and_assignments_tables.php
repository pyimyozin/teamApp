<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
	/**
	 * Run the migrations.
	 */
	public function up(): void {
		Schema::create( 'categories', function ( Blueprint $table ) {
			$table->id();
			$table->string( 'name', 100 );
			$table->bigInteger( 'created_by' );
			$table->dateTime( 'created_at' )->useCurrent();
		} );

		Schema::create( 'assignments', function ( Blueprint $table ) {
			$table->id();
			$table->unsignedBigInteger( 'project_id' );
			$table->unsignedBigInteger( 'category_id' );
			$table->bigInteger( 'assignee' );
			$table->string( 'title', 100 );
			$table->text( 'description' );
			$table->tinyInteger( 'status' )->default( 0 )->comment( '0: pending, 1: in progress, 3: completed' );
			$table->dateTime( 'esti_start' );
			$table->dateTime( 'esti_end' );
			$table->dateTime( 'act_start' );
			$table->dateTime( 'act_end' );
			$table->bigInteger( 'created_by' )->nullable()->comment( 'Assigner defined as creator' );
			$table->dateTime( 'created_at' )->nullable()->useCurrent();
			$table->bigInteger( 'updated_by' )->nullable();
			$table->dateTime( 'updated_at' )->nullable()->useCurrentOnUpdate();
			$table->bigInteger( 'deleted_by' )->nullable();
			$table->dateTime( 'deleted_at' )->nullable();
			$table->foreign( 'project_id' )->references( 'id' )->on( 'projects' )->cascadeOnDelete();
			$table->foreign( 'category_id' )->references( 'id' )->on( 'categories' );
		} );
	}

	/**
	 * Reverse the migrations.
	 */
	public function down(): void {
		Schema::dropIfExists( 'categories' );
		Schema::dropIfExists( 'assignments' );
	}
};
