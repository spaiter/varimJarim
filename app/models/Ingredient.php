<?php

class Ingredient extends Eloquent {
    protected $table = 'ingredient';

    protected $fillable = array(
        'name',
        'measure',
    );

    public static $rules = array(
        'name'              =>  'required|min:2|unique:ingredient',
        'measure'           =>  'required|min:1',
    );
}