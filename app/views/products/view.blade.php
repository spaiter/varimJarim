@extends('layouts.default')

@section('content')

	<div id="admin">


		{{ Form::open(array('url'=>'admin/products/update', 'files'=>true, 'class' => 'form-horizontal')) }}
		<div class="form-group">
		    {{ Form::label('category_id', 'Категория', array('class' => 'col-sm-2 control-label')) }}
		    <div class="col-sm-5">
		      {{ Form::select('category_id', $categories, $product->category_id, array('class'=>'form-control')) }}
		    </div>
	    </div>
		<div class="form-group">
		    {{ Form::label('name', 'Название', array('class' => 'col-sm-2 control-label')) }}
		    <div class="col-sm-5">
		      {{ Form::text('name', $product->name, array('class' => 'form-control')) }}
		    </div>
	    </div>
	    <div class="form-group">
		    {{ Form::label('price', 'Цена', array('class' => 'col-sm-2 control-label')) }}
		    <div class="col-sm-5">
		      {{ Form::text('price', $product->price, array('class'=>'form-control form-price')) }}
		    </div>
	    </div>
	    <div class="form-group">
		    {{ Form::label('weight', 'Вес', array('class' => 'col-sm-2 control-label')) }}
		    <div class="col-sm-5">
		      {{ Form::text('weight', $product->weight, array('class'=>'form-control form-weight')) }}
		    </div>
	    </div>
	    <div class="form-group">
		    {{ Form::label('cooking_time', 'Время готовки', array('class' => 'col-sm-2 control-label')) }}
		    <div class="col-sm-5">
		      {{ Form::text('cooking_time', $product->cooking_time, array('class'=>'form-control form-cooking_time')) }}
		    </div>
	    </div>
	    <div class="form-group">
		    {{ Form::label('description', 'Описание', array('class' => 'col-sm-2 control-label')) }}
		    <div class="col-sm-5">
		      {{ Form::textarea('description', $product->description, array('class' => 'form-control')) }}
		    </div>
	    </div>	

		<p>
			{{ Form::label('full text') }}
			{{ Form::textarea('full_text', $product->full_text, array('class' => 'form-control')) }}
		</p>
		<p>
			{{ Form::label('min_order') }}
			{{ Form::text('min_order', $product->min_order, array('class'=>'form-control form-min_order')) }}
		</p>
		<p>
			{{ Form::label('portions') }}
			{{ Form::text('portions', $product->portions, array('class'=>'form-control form-portions')) }}
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
			{{ Form::label('order') }}
			{{ Form::text('order', $product->order, array('class'=>'form-control form-order')) }}
		</p>
		<p>
			{{ Form::hidden('id', $product->id) }}
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
		<h2>Инредиенты</h2>
		<p>
			{{ Form::select('ingredients', $ingredients, array(), array('multiple'=>'multiple', 'data-role'=>'multiselect'))}}
		</p>
		
	</div><!-- end admin -->

@stop