<?php

class ImagesController extends BaseController {

    public function __construct() {
        parent::__construct();
        $this->beforeFilter('csrf', array('on'=>'post'));
        $this->beforeFilter('admin');
    }

    public function postAdd() {

        $product_id = Input::get('product_id');
        $image_id = Product::find($product_id)->image_id;

        foreach(Input::file('images') as $image) {
            $filename = date('YmdHis')."-".$image->getClientOriginalName();
            Image::make($image->getRealPath())->resize(640, 480)->save('public/img/products/'.$filename);
            $imagemodel = new Images;
            $imagemodel->title = $filename;
            $imagemodel->product_id = $image_id;
            $imagemodel->url = 'img/products/'.$filename;
            $imagemodel->save();
        }

        return Redirect::to('admin/products/view/'.$product_id)
            ->with('message', 'Image Added');
    }

    public function postDestroy() {
        $image = Images::find(Input::get('image_id'));
        $product_id = Input::get('product_id');
        $productImagesCount = count(Product::find($product_id)->images);

        if ($productImagesCount <= 1) {
            return Redirect::to('admin/products/view/'.$product_id)
                ->with('message', 'Should be one or more images');
        }

        if ($image) {
            $image->delete();
            File::delete('public/'.$image->url);
            return Redirect::to('admin/products/view/'.$product_id)
                ->with('message', 'Image Deleted');
        }

        return Redirect::to('admin/products/view/'.$product_id)
            ->with('message', 'Something went wrong, please try again');
    }

}