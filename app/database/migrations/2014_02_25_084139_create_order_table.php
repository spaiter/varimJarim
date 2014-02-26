<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateOrderTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('order', function(Blueprint $table) {
			$table->increments('id');
			$table->integer('user_id')->unsigned()->index()->foreign('user')->references('id');
			$table->string('address');
			$table->timestamp('delivery_time');
			$table->integer('order_status_id')->unsigned()->index()->foreign('order_status')->references('id');
			$table->string('code');
			$table->string('comment');
			$table->timestamps();
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('order');
	}

}
