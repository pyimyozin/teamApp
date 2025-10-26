<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
	/**
	 * Run the migrations.
	 */
	public function up(): void {
		Schema::create( 'transactions', function ( Blueprint $table ) {
			$table->id();
			$table->bigInteger( 'owner' )->unsigned();
			$table->string( 'title', 255 );
			$table->string( 'recipient', 100 );
			$table->enum( 'type', [ 'loan', 'borrow' ] );
			$table->bigInteger( 'total' );
			$table->dateTime( 'created_at' )->nullable()->useCurrent();
			$table->dateTime( 'updated_at' )->nullable()->useCurrentOnUpdate();
			$table->softDeletes();
			$table->foreign( 'owner' )->on( 'users' )->references( 'id' )->cascadeOnDelete();
		} );

		Schema::create( 'transaction_records', function ( Blueprint $table ) {
			$table->id();
			$table->bigInteger( 'trans_id' )->unsigned();
			$table->string( 'sender', 100 );
			$table->string( 'recipient', 100 );
			$table->text( 'message' );
			$table->bigInteger( 'total' );
			$table->dateTime( 'trans_time' );
			$table->dateTime( 'created_at' )->nullable()->useCurrent();
			$table->dateTime( 'updated_at' )->nullable()->useCurrentOnUpdate();
			$table->softDeletes();
			$table->foreign( 'trans_id' )->on( 'transactions' )->references( 'id' )->cascadeOnDelete();
		} );

		Schema::create( 'transaction_hashs', function ( Blueprint $table ) {
			$table->id();
			$table->string( 'hash', 255 );
			$table->string( 'detail', 255 );
			$table->string( 'key', 20 );
			$table->dateTime( 'created_at' )->nullable()->useCurrent();
			$table->dateTime( 'updated_at' )->nullable()->useCurrentOnUpdate();
		} );
	}

	/**
	 * Reverse the migrations.
	 */
	public function down(): void {
		Schema::dropIfExists( 'transactions' );
		Schema::dropIfExists( 'transaction_records' );
		Schema::dropIfExists( 'transaction_hashs' );
	}
};
