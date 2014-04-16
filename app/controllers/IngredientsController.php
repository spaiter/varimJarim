<?php

class IngredientsController extends BaseController {

    public function __construct() {
        parent::__construct();
        $this->beforeFilter('csrf', array('on'=>'post'));
        $this->beforeFilter('admin');
    }

    public function getIndex() {
        $ingredients = Ingredient::all();

        return View::make('ingredients.index')
            ->with('ingredients', $ingredients);
    }

    public function postCreate() {
        $validator = Validator::make(Input::all(), Ingredient::$rules);

        if ($validator->passes()) {
            $ingredient = new Ingredient();

            $ingredient->name = Input::get('name');
            $ingredient->measure = Input::get('measure');
            $ingredient->save();

            return Redirect::to('admin/ingredients/index')
                ->with('message', 'Ингредиент добавлен');
        }

        return Redirect::to('admin/ingredients/index')
            ->with('message', 'Произошла ошибка')
            ->withErrors($validator)
            ->withInput();
    }

    public function postUpdate() {

        $validator = Validator::make(Input::all(), Ingredient::$rules);

        if ($validator->passes()) {
            $ingredient = Ingredient::find(Input::get('id'));

            if ($ingredient) {

                $ingredient->update(array(
                    'name' => Input::get('name'),
                    'measure' => Input::get('measure')
                ));
                return Redirect::to('admin/ingredients/')
                    ->with('message', 'Ингредиент изменен');
            }
        }

        return Redirect::to('admin/ingredients/')
            ->with('message', 'Произошла ошибка');
    }

    public function postDestroy() {
        $ingredient = Ingredient::find(Input::get('id'));

        if ($ingredient) {
            $ingredient->delete();
            return Redirect::to('admin/ingredients/')
                ->with('message', 'Ингредиент удален');
        }

        return Redirect::to('admin/ingredients')
            ->with('message', 'Произошла ошибка');
    }
}