<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateProductsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('products', function(Blueprint $table) {
			$table->increments('id');
			$table->integer('category_id')->unsigned()->index()->foreign('category')->references('id');
			$table->string('name');
			$table->integer('weight');
			$table->integer('cooking_time');
			$table->text('description');
			$table->text('full_text');
			$table->integer('min_order');
			$table->integer('portions');
			$table->integer('difficulty_id')->unsigned()->index()->foreign('difficulty')->references('id');
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
		Schema::drop('products');
	}

}
