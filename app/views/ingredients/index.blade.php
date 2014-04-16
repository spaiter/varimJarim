@extends('layouts.default')

@section('content')

	<div id="admin">

		<h1>Редактирование ингредиентов</h1><hr>

		<p>Здесь вы можете добавить или удалить ингредиенты</p>

		<h2>Ингредиенты</h2><hr>

		<ul>
			@foreach($ingredients as $ingredient)
				<li>
					{{ Form::open(array('url'=>'admin/ingredients/update', 'class'=>'form-inline')) }}
					{{ Form::text('name', $ingredient->name) }}
					{{ Form::text('measure', $ingredient->measure) }}
					{{ Form::hidden('id', $ingredient->id) }}
					{{ Form::submit('Изменить') }}
					{{ Form::close() }}
					{{ Form::open(array('url'=>'admin/ingredients/destroy', 'class'=>'form-inline')) }}
					{{ Form::hidden('id', $ingredient->id) }}
					{{ Form::submit('удалить') }}
					{{ Form::close() }}
				</li>
			@endforeach
		</ul>

		<h2>Добавить ингредиент</h2><hr>

		@if($errors->has())
		<div id="form-errors">
			<p>Были обнаружены следующие ошибки:</p>

			<ul>
				@foreach($errors->all() as $error)
					<li>{{ $error }}</li>
				@endforeach
			</ul>
		</div><!-- end form-errors -->
		@endif

		{{ Form::open(array('url'=>'admin/ingredients/create')) }}
		<p>
			{{ Form::label('Название') }}
			{{ Form::text('name') }}
		</p>
		<p>
			{{ Form::label('Единица измерения') }}
			{{ Form::text('measure') }}
		</p>
		{{ Form::submit('Добавить ингредиент', array('class'=>'btn')) }}
		{{ Form::close() }}
	</div><!-- end admin -->

@stop