<?php

class Category extends Eloquent {

    protected $table = 'category';
	protected $fillable = array('name', 'order');
	public static $rules = array('name'=>'required|min:3:|unique:category');

	public function products() {
		return $this->hasMany('Product');
	}
}