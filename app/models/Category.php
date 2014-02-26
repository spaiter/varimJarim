<?php

class Category extends Eloquent {

    protected $table = 'category';
	protected $fillable = array('name','image', 'order');
	public static $rules = array(
        'name'=>'required|min:3:|unique:category',
        'image'=>'required|image|mimes:jpeg,jpg,bmp,png,gif'
    );

	public function products() {
		return $this->hasMany('Product');
	}
}