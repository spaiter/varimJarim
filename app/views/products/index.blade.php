@extends('layouts.main')

@section('content')

	<div id="admin">

		<h1>Products Admin Panel</h1><hr>

		<p>Here you can view, delete, and create new products.</p>

		<h2>Products</h2><hr>

		<ul>
			@foreach($products as $product)
				<li>
					{{ HTML::image($images[$product->id]->url, $images[$product->id]->name, array('width'=>'100')) }} 
					{{ $product->name }} - 
					{{ Form::open(array('url'=>'admin/products/destroy', 'class'=>'form-inline')) }}
					{{ Form::hidden('id', $product->id) }}
					{{ Form::submit('delete') }}
					{{ Form::close() }}
					<a href="/admin/products/view/{{ $product->id }}">edit</a>
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
			{{ Form::label('tag_id', 'Tags') }}
			{{ Form::select('tag_id', $tags) }}
		</p>
		<p>
			{{ Form::label('difficulty_id', 'Difficultys') }}
			{{ Form::select('difficulty_id', $difficultys) }}
		</p>
		<p>
			{{ Form::label('images', 'Choose images') }}
			{{ Form::file('images[]', array('multiple' => 'multiple')) }}
		</p>
		{{ Form::submit('Create Product', array('class'=>'btn')) }}
		{{ Form::close() }}
	</div><!-- end admin -->

@stop