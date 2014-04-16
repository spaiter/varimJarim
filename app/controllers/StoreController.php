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

        return View::make('store.index')
            ->with('category', $category)
            ->with('products', $products)
            ->with('images', $images)
            ->with('difficulty', $difficulty);
    }


    public function getView($id) {

        $product = Product::find($id);
        $images = $product->images;
        $difficulty = $product->difficulty;

        return View::make('store.view')
            ->with('product', $product)
            ->with('images', $images)
            ->with('difficulty', $difficulty);

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
        $exist = Cart::search(array('id' => $product->id));
        if ($exist) {
            $item = Cart::get($exist[0]);
            $qty = $item->qty;
            $newQty = $qty+Input::get('amount');
            $item->qty = $newQty;
            return Response::json($item);
        } else {
            Cart::add(array(
                'id' => $product->id,
                'name' => $product->name,
                'qty' => Input::get('amount'),
                'price' => $product->price,
            ));
            return Response::json(Cart::content());
        }

    }



    public function getRemoveitem() {
        $rowId = Cart::search(array('id' => (int)Input::get('id')))[0];
        if ($rowId) {
            Cart::remove($rowId);
            return Response::json(['id'=>Input::get('id').' removed']);
        } else {
            return Response::json(['error'=>'no such item']);
        }
    }

    public function getCart() {
        return View::make('store.cart')->with('products', Cart::contents());
    }
}