@extends('layouts.main')

@section('content')

	<div id="admin">

		<h1>Products Admin Panel</h1><hr>

		<p>Here you can view, delete, and create new products.</p>

		<h2>Products</h2><hr>

		<ul>
			@foreach($products as $product)
				<li>
					{{ HTML::image($product->image, $product->title, array('width'=>'50')) }} 
					{{ $product->title }} - 
					{{ Form::open(array('url'=>'admin/products/destroy', 'class'=>'form-inline')) }}
					{{ Form::hidden('id', $product->id) }}
					{{ Form::submit('delete') }}
					{{ Form::close() }} - 

					{{ Form::open(array('url'=>'admin/products/toggle-availability', 'class'=>'form-inline'))}}
					{{ Form::hidden('id', $product->id) }}
					{{ Form::select('availability', array('1'=>'In Stock', '0'=>'Out of Stock'), $product->availability) }}
					{{ Form::submit('Update') }}
					{{ Form::close() }}
				</li>
			@endforeach
		</ul>

		<h2>Create New Product</h2><hr>

		@if($errors->has())
		<div id="form-errors">
			<p>The following errors have occurred:</p>

			<ul>
				@foreach($errors->all() as $error)
					<li>{{ $error }}</li>
				@endforeach
			</ul>
		</div><!-- end form-errors -->
		@endif

		{{ Form::open(array('url'=>'admin/products/create', 'files'=>true)) }}
		<p>
			{{ Form::label('category_id', 'Category') }}
			{{ Form::select('category_id', $categories) }}
		</p>
		<p>
			{{ Form::label('name') }}
			{{ Form::text('name') }}
		</p>
		<p>
			{{ Form::label('price') }}
			{{ Form::text('price', null, array('class'=>'form-price')) }}
		</p>
		<p>
			{{ Form::label('weight') }}
			{{ Form::text('weight', null, array('class'=>'form-weight')) }}
		</p>
		<p>
			{{ Form::label('cooking_time') }}
			{{ Form::text('cooking_time', null, array('class'=>'form-cooking_time')) }}
		</p>
		<p>
			{{ Form::label('description') }}
			{{ Form::textarea('description') }}
		</p>
		<p>
			{{ Form::label('full text') }}
			{{ Form::textarea('full_text') }}
		</p>
		<p>
			{{ Form::label('min_order') }}
			{{ Form::text('min_order', null, array('class'=>'form-min_order')) }}
		</p>
		<p>
			{{ Form::label('portions') }}
			{{ Form::text('portions', null, array('class'=>'form-portions')) }}
		</p>
		<p>
			{{ Form::label('tag_id') }}
			{{ Form::text('tag_id', null, array('class'=>'form-tag_id')) }}
		</p>
		<p>
			{{ Form::label('difficulty_id', 'Difficulty') }}
			{{ Form::select('difficulty_id', $difficulty) }}
		</p>
		<p>
			{{ Form::label('images', 'Choose images') }}
			{{ Form::file('images[]', array('multiple')) }}
		</p>
		{{ Form::submit('Create Product', array('class'=>'btn')) }}
		{{ Form::close() }}
	</div><!-- end admin -->

@stop