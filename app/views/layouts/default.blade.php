<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Варим-жарим - Доставка продуктов и ингредиентов с пошаговыми фото-рецептами для самостоятельного приготовления блюд в Перми.</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

    {{ HTML::style("stylus/backend/bootstrap-3.1.1.min.css"); }}
    {{ HTML::style("stylus/backend/bootstrap-multiselect.css"); }}
</head>
<body>
<div class="container">
    @if (Session::has('message'))
    <p class="alert">{{ Session::get('message') }}</p>
    @endif

    @yield('content')
</div>
<footer>
    <div class="container">
        <div class="line end"></div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-2 col-md-offset-1 pL copyright-wrapper">
                © «Варим-жарим», 2014
            </div>
            <div class="col-md-3 developer-wrapper" style="text-align: center !important;">
                <a href="personal.html">Обработка персональных данных</a>
            </div>
            <div class="col-md-4 developer-wrapper">
                <a href="http://da-group.ru/">Разработка сайта</a> — дизайн-студия «ДА!», 2013
            </div>
        </div>
    </div>
</footer>

{{ HTML::script('js/vendor/jquery-2.1.0.min.js'); }}
{{ HTML::script('js/backend/vendor/bootstrap.min.js'); }}
{{ HTML::script('js/backend/vendor/bootstrap-multiselect.js'); }}
{{ HTML::script('js/backend/main.js'); }}

</body>
</html>
