<?php

class ProductsController extends BaseController {

    public function __construct() {
        parent::__construct();
        $this->beforeFilter('csrf', array('on'=>'post'));
        $this->beforeFilter('admin');
    }

    public function getIndex() {
        $categories = array();
        $difficultys = array();

        foreach(Category::all() as $category) {
            $categories[$category->id] = $category->name;
        }
        foreach(Difficulty::all() as $difficulty) {
            $difficultys[$difficulty->id] = $difficulty->name;
        }


        return View::make('products.index')
            ->with('products', Product::all())
            ->with('categories', $categories)
            ->with('difficulty', $difficultys);
    }

    public function postCreate() {
        $validator = Validator::make(Input::all(), Product::$rules);

        if ($validator->passes()) {
            $product = new Product;

            $product->category_id = Input::get('category_id');
            $product->name = Input::get('name');
            $product->price = Input::get('price');
            $product->weight = Input::get('weight');
            $product->cooking_time = Input::get('cooking_time');
            $product->description = Input::get('description');
            $product->full_text = Input::get('full_text');
            $product->min_order = Input::get('min_order');
            $product->portions = Input::get('portions');
            $product->tag_id = Input::get('tag_id');
            $product->difficulty_id = Input::get('difficulty_id');

            /*
            $image = Input::file('image');
            $filename = date('Y-m-d-H:i:s')."-".$image->getClientOriginalName();
            Image::make($image->getRealPath())->resize(468, 249)->save('public/img/products/'.$filename);
            $product->image = 'img/products/'.$filename;
            */

            $product->save();

            return Redirect::to('admin/products/index')
                ->with('message', 'Product Created');
        }

        return Redirect::to('admin/products/index')
            ->with('message', 'Something went wrong')
            ->withErrors($validator)
            ->withInput();
    }

    public function postDestroy() {
        $product = Product::find(Input::get('id'));

        if ($product) {
            File::delete('public/'.$product->image);
            $product->delete();
            return Redirect::to('admin/products/index')
                ->with('message', 'Product Deleted');
        }

        return Redirect::to('admin/products/index')
            ->with('message', 'Something went wrong, please try again');
    }

    public function postToggleAvailability() {
        $product = Product::find(Input::get('id'));

        if ($product) {
            $product->availability = Input::get('availability');
            $product->save();
            return Redirect::to('admin/products/index')->with('message', 'Product Updated');
        }

        return Redirect::to('admin/products/index')->with('message', 'Invalid Product');
    }
}