@extends('layouts.main')

@section('content')

	<div id="new-account">

		<h1>Create New Account</h1>

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

		{{ Form::open(array('url'=>'user/create')) }}

		<p>
			{{ Form::label('Имя') }}
			{{ Form::text('first_name') }}
		</p>
		<p>
			{{ Form::label('Фамилия') }}
			{{ Form::text('last_name') }}
		</p>
		<p>
			{{ Form::label('Отчество') }}
			{{ Form::text('patronymic') }}
		</p>
		<p>
			{{ Form::label('Телефон') }}
			{{ Form::text('phone') }}
		</p>
		<p>
			{{ Form::label('email') }}
			{{ Form::text('email') }}
		</p>
		<p>
			{{ Form::label('password') }}
			{{ Form::password('password') }}
		</p>
		<p>
			{{ Form::label('password_confirmation') }}
			{{ Form::password('password_confirmation') }}
		</p>
		{{ Form::submit('Зарегистрироваться', array('class'=>'btn')) }}
		{{ Form::close() }}

	</div><!-- end new-account -->

@stop