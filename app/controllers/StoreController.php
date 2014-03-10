<?php

class StoreController extends BaseController {

    public function __construct() {
        parent::__construct();
        $this->beforeFilter('csrf', array('on'=>'post'));
    }

    /*
    public function getIndex() {

        $products = array();
        $images = array();
        $difficulty = array();
        $categories = Category::all()->sortBy('order');

        foreach ($categories as $category) {
            $products[$category->id] = $category->products->sortBy('order');
            foreach ($products[$category->id] as $product) {
                $images[$product->id] = $product->images->first();
                $difficulty[$product->id] = $product->difficulty;
            }
        }


        return View::make('store.index')
            ->with('categories', $categories)
            ->with('products', $products)
            ->with('images', $images)
            ->with('difficulty', $difficulty);
    }
    */
    public function getIndex() {

        $products = array();
        $images = array();
        $difficulty = array();
        $category = Category::first();


        $products[$category->id] = $category->products->sortBy('order');
        foreach ($products[$category->id] as $product) {
            $images[$product->id] = $product->images->first();
            $difficulty[$product->id] = $product->difficulty;
        }


        var_dump(Cart::contents());

        return View::make('store.index')
            ->with('category', $category)
            ->with('products', $products)
            ->with('images', $images)
            ->with('difficulty', $difficulty);
    }


    public function getView($id) {
        return View::make('store.view')->with('product', Product::find($id));
    }

    public function getCategory($id) {

        $products = array();
        $images = array();
        $difficulty = array();
        $category = Category::find($id);


        $products[$category->id] = $category->products->sortBy('order');
        foreach ($products[$category->id] as $product) {
            $images[$product->id] = $product->images->first();
            $difficulty[$product->id] = $product->difficulty;
        }


        return View::make('store.index')
            ->with('category', $category)
            ->with('products', $products)
            ->with('images', $images)
            ->with('difficulty', $difficulty);
    }

    public function getSearch() {
        $keyword = Input::get('keyword');

        return View::make('store.search')
            ->with('products', Product::where('title', 'LIKE', '%'.$keyword.'%')->get())
            ->with('keyword', $keyword);
    }

    public function postAddtocart() {


            $product = Product::find(Input::get('id'));

            Cart::insert(array(
                'id'=>$product->id,
                'name'=>$product->name,
                'price'=>$product->price,
                'weight'=>$product->weight,
                'image'=>$product->image
            ));
        return Response::json( Cart::contents());


    }

    public function getCart() {
        return View::make('store.cart')->with('products', Cart::contents());
    }

    public function getRemoveitem($identifier) {
        $item = Cart::item($identifier);
        $item->remove();
        return Redirect::to('store/cart');
    }

    public function getContact() {
        return View::make('store.contact');
    }


}