<?php

class Images extends Eloquent {

    protected $table = 'image';

    protected $fillable = array(
        'title',
        'order',
        'product_id',
        'url'
    );

    public static $rules = array(
        'title'       =>  'required',
        'product_id'  =>  'required|integer',
        'url'         =>  'required'
    );

    public function product() {
        return $this->belongsTo('Product', 'product_id', 'image_id');
    }
}