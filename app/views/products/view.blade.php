@extends('layouts.main')

@section('content')

	<div id="admin">


		{{ Form::open(array('url'=>'admin/products/create', 'files'=>true)) }}
		<p>
			{{ Form::label('category_id', 'Category') }}
			{{ Form::select('category_id', $categories, $product->category_id) }}
		</p>
		<p>
			{{ Form::label('name') }}
			{{ Form::text('name', $product->name) }}
		</p>
		<p>
			{{ Form::label('price') }}
			{{ Form::text('price', $product->price, array('class'=>'form-price')) }}
		</p>
		<p>
			{{ Form::label('weight') }}
			{{ Form::text('weight', $product->weight, array('class'=>'form-weight')) }}
		</p>
		<p>
			{{ Form::label('cooking_time') }}
			{{ Form::text('cooking_time', $product->cooking_time, array('class'=>'form-cooking_time')) }}
		</p>
		<p>
			{{ Form::label('description') }}
			{{ Form::textarea('description', $product->description) }}
		</p>
		<p>
			{{ Form::label('full text') }}
			{{ Form::textarea('full_text', $product->full_text) }}
		</p>
		<p>
			{{ Form::label('min_order') }}
			{{ Form::text('min_order', $product->min_order, array('class'=>'form-min_order')) }}
		</p>
		<p>
			{{ Form::label('portions') }}
			{{ Form::text('portions', $product->portions, array('class'=>'form-portions')) }}
		</p>
		<p>
			{{ Form::label('tag_id', 'Tags') }}
			{{ Form::select('tag_id', $tags, $product->tag_id) }}
		</p>
		<p>
			{{ Form::label('difficulty_id', 'Difficultys') }}
			{{ Form::select('difficulty_id', $difficultys, $product->difficulty_id) }}
		</p>
		<p>
			{{ Form::submit('Update Product', array('class'=>'btn')) }}
		{{ Form::close() }}
		</p>
		<h1>Images</h1>
		<p>
			@foreach ($images as $image)
				{{ HTML::image($image->url, $image->name, array('width'=>'200'))}}
				{{ Form::open(array('url'=>'admin/images/destroy')) }}
					{{ Form::hidden('product_id', $product->id) }}
					{{ Form::hidden('image_id', $image->id) }}
					{{ Form::submit('delete') }}
				{{ Form::close() }}
			@endforeach
		</p>
		<h2>Add images</h2>
		<p>
		{{ Form::open(array('url'=>'admin/images/add', 'files'=>true)) }}
			{{ Form::label('images', 'Choose images') }}
			{{ Form::file('images[]', array('multiple' => 'multiple')) }}
			{{ Form::hidden('product_id', $product->id) }}
			{{ Form::submit('Add Images To Product', array('class'=>'btn')) }}
		{{ Form::close() }}
		</p>
		
	</div><!-- end admin -->

@stop