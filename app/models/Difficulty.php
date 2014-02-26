<?php

class Difficulty extends Eloquent {

    protected $table = 'difficulty';

    public $timestamps = false;
    protected $softDelete = false;

    public function products()
    {
        return $this->belongsToMany('Product');
    }

}