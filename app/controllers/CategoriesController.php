<?php

class CategoriesController extends BaseController {

    public function __construct() {
        parent::__construct();
        $this->beforeFilter('csrf', array('on'=>'post'));
        $this->beforeFilter('admin');
    }

    public function getIndex() {
        return View::make('categories.index')
            ->with('categories', Category::all()->sortBy('order'));
    }

    public function postCreate() {
        $validator = Validator::make(Input::all(), Category::$rules);

        if ($validator->passes()) {
            $category = new Category;
            $category->name = Input::get('name');
            $category->order = Input::get('order');
            $image = Input::file('image');
            $filename = date('YmdHis')."-".$image->getClientOriginalName();
            Image::make($image->getRealPath())->resize(640, 480)->save('public/img/categories/'.$filename);
            $category->image = 'img/categories/'.$filename;
            $category->save();

            return Redirect::to('admin/categories/index')
                ->with('message', 'Category Created');
        }

        return Redirect::to('admin/categories/index')
            ->with('message', 'Something went wrong')
            ->withErrors($validator)
            ->withInput();
    }

    public function postDestroy() {
        $category = Category::find(Input::get('id'));

        $productsCount = count($category->products);
        if ($productsCount >= 1) {
            return Redirect::to('admin/categories/index')
                ->with('message', 'Category not empty');
        }

        if ($category) {
            $category->delete();
            return Redirect::to('admin/categories/index')
                ->with('message', 'Category Deleted');
        }

        return Redirect::to('admin/categories/index')
            ->with('message', 'Something went wrong, please try again');
    }

    public function postUpdate() {
        $updatingRules = Category::$rules;
        $updatingRules['name'] = 'required|min:3';
        $validator = Validator::make(Input::all(), $updatingRules);

        if ($validator->passes()) {
            $category = Category::find(Input::get('id'));

            if ($category) {
                File::delete('public/'.$category->image);
                $image = Input::file('image');
                $filename = date('YmdHis')."-".$image->getClientOriginalName();
                Image::make($image->getRealPath())->resize(640, 480)->save('public/img/categories/'.$filename);
                $category->update(array(
                    'name' => Input::get('name'),
                    'order' => Input::get('order'),
                    'image' => 'img/categories/'.$filename
                ));
                return Redirect::to('admin/categories/index')
                    ->with('message', 'Category updated');
            }
        }

        return Redirect::to('admin/categories/index')
            ->with('message', 'Something went wrong, please try again');
    }
}