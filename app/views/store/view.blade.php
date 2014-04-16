@extends('layouts.shopWithoutTabs')

@section('content')

<div class="container product">
    {{ Form::open(array('url' => 'store/addtocart', 'method' => 'POST',  'class'=>'ajax' )) }}
    <div class="row">
        <div class="col-md-7 col-md-offset-1 pL pR">
            <div class="row">
                <div class="col-xs-12">
                    <h1 class="item-name">
                        {{ $product->name }}
                    </h1>
                    {{ Form::hidden('id', $product->id, array('class'=>'itemId')) }}
                </div>
            </div>
            <div class="row property">
                <div class="weight-block">
                    <span class="icon-weight icon"></span>
                    <span>{{ $product->weight }} г</span>
                </div>
                <div class="clock-block icon">
                    <span class="icon-clock icon"></span>
                    <span>{{ $product->cooking_time }} мин</span>
                </div>
                <div class="complexity-block">
                    @for ($j = 0; $j < $difficulty->stars; $j++)
                    <span class="icon-star-full icon"></span>
                    @endfor
                    @for ($j; $j < 3; $j++)
                    <span class="icon-star-empty icon"></span>
                    @endfor
                    <span>{{ $difficulty->name }}</span>
                </div>
            </div>
            <div class="row description">
                <p>
                    {{ $product->full_text }}
                </p>
            </div>
            <div class="row images">
                <div class="fotorama" data-nav="thumbs">
                    @foreach ($images as $image)
                        <a href="{{$image->url}}">{{HTML::image($image->url,  $product->name.'-'.$image->title, array('width'=>'110px', 'height' => '75px'))}}</a>
                    @endforeach
                </div>
            </div>
        </div>
        <div class="col-md-4 pL ingredients-part">
            <div class="ingredients-wrapper">
                
            </div>

        </div>
    </div>
    <div class="row">
         <div class="col-md-11 col-md-offset-1 pL pR">
             <div class="recipeWrapper">
                 <div class="recipeName"><h4>{{$product->name}}</h4></div>
                 <div class="spoiler">Развернуть</div>
                 <div class="recipeText">
                     {{$product->recipe}}
                 </div>
             </div>
         </div>
    </div>
    <div class="row mT10 mB10">
        <div class="col-md-11 col-md-offset-1 pL pR">
            <h4>
                Как мы работаем:
            </h4>
        </div>
    </div>
    <div class="row mB50">
        <div class="col-md-4 col-md-offset-1 pL pR">
            <p>
                «Варим-жарим» — новый пермский food-проект: мы привозим вам ингредиенты для вкуснейших блюд уже в нужном количестве, вы следуйте инструкции, и через 30-45 минут у вас будет готов великолепный ужин!<br/>
                Приятного аппетита! :)
            </p>
        </div>
        <div class="col-md-7 feature-block">
            <div class="cart-block">
                <span class="icon-cart icon"></span>
                <span>рецепт<br />собран</span>
            </div>
            <div class="clock-block">
                <span class="icon-clock icon"></span>
                <span>готовится<br />быстро</span>
            </div>
            <div class="pan-block">
                <span class="icon-pan icon flat"></span>
                <span>минимум<br />посуды</span>
            </div>
            <div class="instruction-block">
                <span class="icon-instruction icon"></span>
                <span>понятная<br />инструкция</span>
            </div>
            <div class="deliver-block">
                <span class="icon-deliverycar icon flat"></span>
                <span>доставка<br />на завтра</span>
            </div>
        </div>
    </div>
    <div class="row topProducts">
        <div class="col-md-11 col-md-offset-1 pL pR">
            <h4 class="mT40 mB20">C этим рецептом чаще заказывают:</h4>
        </div>
    </div>
    {{ Form::close() }}
</div>
<div class="container">
    <div class="line dashed"></div>
</div>

@stop