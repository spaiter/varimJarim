<?php

class BaseController extends Controller {

	public function __construct() {

		$this->beforeFilter(function() {
			View::share('categories', Category::all()->sortBy('order'));
            View::share('CartItemsCount', Cart::count(false));
            View::share('CartItems', Cart::content());
            View::share('CartTotal', Cart::total());
		});
	}

	/**
	 * Setup the layout used by the controller.
	 *
	 * @return void
	 */
	protected function setupLayout()
	{
		if ( ! is_null($this->layout))
		{
			$this->layout = View::make($this->layout);
		}
	}

}