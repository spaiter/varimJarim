<?php

class ProductsController extends BaseController {

    public function __construct() {
        parent::__construct();
        $this->beforeFilter('csrf', array('on'=>'post'));
        $this->beforeFilter('admin');
    }

    public function getIndex() {
        $products = Product::all();

        $categories = array();
        $difficultys = array();
        $tags = array();
        $images = array();


        foreach(Category::all() as $category) {
            $categories[$category->id] = $category->name;
        }
        foreach(Difficulty::all() as $difficulty) {
            $difficultys[$difficulty->id] = $difficulty->name;
        }
        foreach(Tag::all() as $tag) {
            $tags[$tag->id] = $tag->name;
        }
        foreach($products as $product) {
            $images[$product->id] = $product->images->first();
        }

        return View::make('products.index')
            ->with('products', $products->sortBy('order'))
            ->with('categories', $categories)
            ->with('difficultys', $difficultys)
            ->with('tags', $tags)
            ->with('images', $images);

    }

    public function postCreate() {
        $validator = Validator::make(Input::all(), Product::$rules);

        if ($validator->passes()) {
            $images = Input::file('images');
            $imagesCount = count($images);

            for ($i=0; $i < $imagesCount; $i++)
            {
                $input = array(
                    'upload' => $images[$i]
                );
                $rules = array(
                    'upload' => 'required|image|mimes:jpeg,jpg,bmp,png,gif'
                );
                $validation = Validator::make($input, $rules);
                if (!$validation->passes()) {
                    return Redirect::to('admin/products/index')
                        ->with('message', 'Image Validation didn\'t pass')
                        ->withErrors($validator)
                        ->withInput();
                }
            }

            $product = new Product;

            $image_id = date('YmdHis').rand(10, 99);

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
            $product->image_id = $image_id;
            $product->save();

            foreach(Input::file('images') as $key => $image) {
                $filename = date('YmdHis')."-".$image->getClientOriginalName();
                Image::make($image->getRealPath())->resize(640, 480)->save('public/img/products/'.$filename);
                $imagemodel = new Images;
                $imagemodel->title = $filename;
                $imagemodel->product_id = $image_id;
                $imagemodel->url = 'img/products/'.$filename;
                $imagemodel->save();
            }
            return Redirect::to('admin/products/index')
                ->with('message', 'Product Created');

        }

        return Redirect::to('admin/products/index')
            ->with('message', 'Something went wrong')
            ->withErrors($validator)
            ->withInput();
    }

    public function postUpdate() {

        $validator = Validator::make(Input::all(), Product::$rules);
        $id = Input::get('id');

        if ($validator->passes()) {
            $product = Product::find($id);

            if ($product) {

                $product->update(array(
                    'category_id' => Input::get('category_id'),
                    'name' => Input::get('name'),
                    'price' => Input::get('price'),
                    'weight' => Input::get('weight'),
                    'cooking_time' => Input::get('cooking_time'),
                    'description' => Input::get('description'),
                    'full_text' => Input::get('full_text'),
                    'min_order' => Input::get('min_order'),
                    'portions' => Input::get('portions'),
                    'order' => Input::get('order'),
                    'tag_id' => Input::get('tag_id'),
                    'difficulty_id' => Input::get('difficulty_id')
                ));
                return Redirect::to('admin/products/view/'.$id)
                    ->with('message', 'Category updated');
            }
        }

        return Redirect::to('admin/products/view/'.$id)
            ->with('message', 'Something went wrong, please try again');
    }

    public function postDestroy() {
        $product = Product::find(Input::get('id'));

        if ($product) {
            foreach ($product->images as $image) {
                File::delete('public/'.$image->url);
                $image->delete();
            }

            $product->delete();
            return Redirect::to('admin/products/index')
                ->with('message', 'Product Deleted');
        }

        return Redirect::to('admin/products/index')
            ->with('message', 'Something went wrong, please try again');
    }

    public function postChangeorder() {

        $product = Product::find(Input::get('id'));

        if ($product) {
            $product->update(array(
                'order' => Input::get('order')
            ));
            return Redirect::to('admin/products/index')
                ->with('message', 'Product order updated');
        }

        return Redirect::to('admin/products/index')
            ->with('message', 'Something went wrong, please try again');
    }

    public function getView($id) {
        $product = Product::find($id);

        $categories = array();
        $difficultys = array();
        $tags = array();

        $ingredients = Ingredient::all()->lists('name','id');

        foreach(Category::all() as $category) {
            $categories[$category->id] = $category->name;
        }
        foreach(Difficulty::all() as $difficulty) {
            $difficultys[$difficulty->id] = $difficulty->name;
        }
        foreach(Tag::all() as $tag) {
            $tags[$tag->id] = $tag->name;
        }

        if ($product) {
            return View::make('products.view')
                ->with('product',$product)
                ->with('categories', $categories)
                ->with('difficultys', $difficultys)
                ->with('tags', $tags)
                ->with('images', $product->images)
                ->with('ingredients', $ingredients);
        }

        return Redirect::to('admin/products/index')
            ->with('message', 'Something went wrong, please try again');
    }

    public function postImageDestroy() {
        $image = Image::find(Input::get('image_id'));

        if ($image) {
            $image->delete();
            return Redirect::to('admin/products/view/'.Input::get('product_id'))
                ->with('message', 'Image Deleted');
        }

        return Redirect::to('admin/products/view/'.Input::get('product_id'))
            ->with('message', 'Something went wrong, please try again');
    }

}