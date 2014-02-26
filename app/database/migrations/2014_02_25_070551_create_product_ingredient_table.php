<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateProductIngredientTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('product_ingredient', function(Blueprint $table) {
			$table->increments('id');
			$table->integer('product_id')->unsigned()->index()->foreign('product')->references('id');
			$table->integer('ingredient_id')->unsigned()->index()->foreign('ingredient')->references('id');
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
		Schema::drop('product_ingredient');
	}

}
