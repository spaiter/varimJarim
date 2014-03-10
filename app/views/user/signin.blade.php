@extends('layouts.default')

@section('content')

	<section id="signin-form">

        <h1>Я уже зарегистрировался</h1>
        {{ Form::open(array('url'=>'user/signin')) }}
            <p>
                {{ Form::text('phone') }}
            </p>
            <p>
                {{ Form::password('password') }}
            </p>
            {{ Form::button('Войти', array('type'=>'submit', 'class'=>'btn')) }}
        {{ Form::close() }}

    </section><!-- end signin-form -->

    <section id="signup">
        <h2>Зарегистрироваться</h2>

        {{ HTML::link('user/newaccount', 'Зарегистрироваться', array('class'=>'btn')) }}

    </section><!--- end signup -->

@stop