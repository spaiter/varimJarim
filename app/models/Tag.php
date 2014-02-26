<?php

class Tag extends Eloquent {

    protected $table = 'tag';

    public $timestamps = false;
    protected $softDelete = false;

    public function tags()
    {
        return $this->belongsToMany('Product');
    }

}