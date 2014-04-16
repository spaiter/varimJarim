@extends('layouts.shop')

@section('content')

		@foreach($products[$category->id] as $product)
			<div class="container product">
			{{ Form::open(array('url' => 'store/addtocart', 'method' => 'POST',  'class'=>'ajax' )) }}
		    <div class="row">
		        <div class="col-md-6 col-md-offset-1 pL pR">
		            <div class="row">
		                <div class="col-xs-12">
		                    <h1 class="item-name">
		                        {{ HTML::link('store/view/'.$product->id, $product->name) }}
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
			                @for ($j = 0; $j < $difficulty[$product->id]->stars; $j++)
							    <span class="icon-star-full icon"></span>
							@endfor
							@for ($j; $j < 3; $j++)
							    <span class="icon-star-empty icon"></span>
							@endfor
		                    <span>{{ $difficulty[$product->id]->name }}</span>
		                </div>
		            </div>
		            <div class="row description">
		                <p>
		                    {{ $product->description }}
		                </p>
		            </div>
		            <div class="row amount-and-price">
		                <div class="price-count">
		                    <div class="price-wrapper"><span class="price-for-one">{{ $product->price }}</span><span class="price-for-one-words">рублей<br>за порцию</span> &#215; </div>
		                    <select name="amount">
		                    	@for ($i=$product->portions; $i < 9; $i=$i+$product->portions)
							    	<option value="{{ $i }}" <?php if ($i==$product->portions) {echo "selected=\"selected\"";} ?>>{{ $i }}</option>
								@endfor
		                    </select>
		                    <div class="total-price-wrapper"> = <span class="total-price">258</span>Р</div>
		                </div>
		                {{ Form::button('в корзину', array('class' => 'btn add-to-cart')); }}
		            </div>
		        </div>
		        <div class="col-md-5 pL image-part">
		            <div class="image-wrapper">
		                {{ HTML::image($images[$product->id]->url, $images[$product->id]->title, array('width'=>'450')) }}
		            </div>

		        </div>
		    </div>
		    {{ Form::close() }}
		</div>
		<div class="container">
		    <div class="line dashed"></div>
		</div>
	@endforeach

@stop