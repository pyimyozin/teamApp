<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
	/**
	 * Run the migrations.
	 */
	public function up(): void {
		Schema::create( 'users', function ( Blueprint $table ) {
			$table->id();
			$table->string( 'code', 20 );
			$table->string( 'name', 100 );
			$table->string( 'password', 255 );
			$table->enum( 'gender', [ 'male', 'female', 'gay', 'trans', 'bi', 'lebsian' ] );
			$table->string( 'email', 100 )->unique();
			$table->integer( 'phone' )->unique();
			$table->boolean( 'is_accepted' )->default( false );
			$table->bigInteger( 'accepted_by' )->nullable();
			$table->dateTime( 'accepted_at' )->nullable()->useCurrent();
			$table->bigInteger( 'updated_by' )->nullable();
			$table->dateTime( 'updated_at' )->nullable()->useCurrentOnUpdate();
			$table->bigInteger( 'deleted_by' )->nullable();
			$table->softDeletes();
		} );

		Schema::create( 'users_infos', function ( Blueprint $table ) {
			$table->id();
			$table->bigInteger( 'user' )->unsigned()->unique();
			$table->integer( 'phone_2' )->unique()->nullable()->comment( 'Phone 1 and Phone 2 must not be same, All phones must be unique' );
			$table->date( 'birthday' );
			$table->text( 'address' );
			$table->text( 'about' );
			$table->string( 'nickname', 100 )->nullable();
			$table->tinyInteger( 'role' )->default( 1 )->comment( '0: admin,1: junior,2: senior,3: leader,4: project manager' );
			$table->tinyInteger( 'department' )->comment( '0: frontend,1: backend' );
			$table->softDeletes();
			$table->foreign( 'user' )->references( 'id' )->on( 'users' )->cascadeOnDelete();
		} );
	}

	/**
	 * Reverse the migrations.
	 */
	public function down(): void {
		Schema::dropIfExists( 'users' );
		Schema::dropIfExists( 'users_infos' );
	}
};
