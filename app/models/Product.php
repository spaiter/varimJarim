<?php

class Product extends Eloquent {

    protected $table = 'product';

    protected $fillable = array(
        'category_id',
        'name',
        'price',
        'weight',
        'cooking_time',
        'description',
        'full_text',
        'min_order',
        'portions',
        'order',
        'tag_id',
        'difficulty_id'
    );

    public static $rules = array(
        'category_id'       =>  'required|integer',
        'name'              =>  'required|min:2',
        'price'             =>  'required|integer',
        'weight'            =>  'required|integer',
        'cooking_time'      =>  'required|integer',
        'description'       =>  'required|min:20',
        'full_text'         =>  'required|min:20',
        'min_order'         =>  'required|integer',
        'portions'          =>  'required|integer',
        'order'             =>  'integer',
        'tag_id'            =>  'integer',
        'difficulty_id'     =>  'integer'

    );

    public function category() {
        return $this->belongsTo('Category');
    }

    public function images() {
        return $this->hasMany('Images', 'product_id' ,'image_id');
    }

}