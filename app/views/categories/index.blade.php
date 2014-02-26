@extends('layouts.main')

@section('content')

	<div id="admin">

		<h1>Categories Admin Panel</h1><hr>

		<p>Here you can view, delete, and create new categories.</p>

		<h2>Categories</h2><hr>

		<ul>
			@foreach($categories as $category)
				<li>
					{{ Form::open(array('url'=>'admin/categories/update', 'files'=>true, 'class'=>'form-inline')) }}
					{{ HTML::image($category->image, null, array('width' => '100'))}}
					{{ Form::label('name') }}
					{{ Form::text('name', $category->name, array('class' => 'name')); }}
					{{ Form::text('order', $category->order, array('class' => 'order')); }}
					{{ Form::label('image', 'Choose image') }}
					{{ Form::file('image') }}
					{{ Form::hidden('id', $category->id) }}
					{{ Form::submit('update') }}
					{{ Form::close() }}

					{{ Form::open(array('url'=>'admin/categories/destroy', 'class'=>'form-inline')) }}
					{{ Form::hidden('id', $category->id) }}
					{{ Form::submit('delete') }}
					{{ Form::close() }}
				</li>
			@endforeach
		</ul>

		<h2>Create New Category</h2><hr>

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

		{{ Form::open(array('url'=>'admin/categories/create', 'files'=>true)) }}
		<p>
			{{ Form::label('name') }}
			{{ Form::text('name') }}
		</p>
		<p>
			{{ Form::label('order') }}
			{{ Form::text('order') }}
		</p>
		<p>
			{{ Form::label('image', 'Choose image') }}
			{{ Form::file('image') }}
		</p>
		{{ Form::submit('Create Category', array('class'=>'btn')) }}
		{{ Form::close() }}
	</div><!-- end admin -->

@stop