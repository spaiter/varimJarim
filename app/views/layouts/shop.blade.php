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

    <link rel="stylesheet" href="">
    {{ HTML::style("stylus/main.css"); }}
    <link href='http://fonts.googleapis.com/css?family=Roboto+Slab:300,700,400&subset=latin,cyrillic-ext,cyrillic' rel='stylesheet' type='text/css'>
    {{ HTML::script('js/vendor/modernizr-2.6.2.min.js') }}
</head>
<body>
<!--[if lt IE 7]>
<p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
<![endif]-->

<header>
    <div class="container">
        <div class="row">
            <div class="col-md-3 col-md-offset-1 pL">
                <a class="logo_link" href="http://varimzharim.ru/"><span class="icon-logo logo"></span></a>
            </div>
            <div class="col-md-7 col-md-offset-1 pL">
                <div class="row">
                    <div class="col-md-4">
                        <p class="phone-block">
                            <span class="icon-phone phone"></span> <span class="number">278-82-10</span>
                        </p>
                    </div>
                    <div class="col-md-8">
                        <p class="social-block">
                            <a href="https://www.facebook.com/varimzharim" style="color:#333"><span class="icon-facebook"></span></a>
                            <a href="http://vk.com/varimzharim" style="color:#333"><span class="icon-vk"></span></a>
                            <a href="https://instagram.com/varimzharim" style="color:#333"><span class="icon-instagram"></span></a>
                            <a href="https://youtube.com/varimzharim" style="color:#333"><span class="icon-youtube flat"></span></a>
                        </p>
                    </div>
                </div>
                <div class="header-image-wrapper">
                	{{ HTML::image('img/header-food.jpg')}}
                </div>
                <div class="order-wrapper">
                    <div class="order-button-wrapper">
                        <span class="recipe-amount">2</span>
                        <span class="recipe-amount-word">рецепта</span>
                        <span>в корзине</span>
                    </div>
                    <div class="order-body-wrapper">
                        <div class="order-list-wrapper">
                        </div>
                        <div class="in-total-wrapper">
                            <dl>
                                <dt>
                                    <span>
                                        Итого
                                    </span>
                                </dt>
                                <dd>
                                    <span class="in-total">0</span><span>Р</span>
                                </dd>
                                <dt>
                                    <span>
                                        Доставка
                                    </span>
                                </dt>
                                <dd>
                                    <span class="delivery">100</span><span>Р</span>
                                </dd>
                            </dl>
                        </div>
                        <div class="order-form-wrapper">
                            <form action="" class="order-form">
                                <div>
                                    <div class="row">
                                        <div class="col-xs-6 control-group">
                                            <label>Имя</label>
                                            <input id="name" type="text" name="name"/>
                                        </div>
                                        <div class="col-xs-6 padding-left control-group">
                                            <label>Телефон</label>
                                            <input id="phone" type="text" name="phone"/>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xs-6 control-group">
                                            <label>Эл.почта</label>
                                            <input id="email" type="text" name="email"/>
                                        </div>
                                        <div class="col-xs-6 padding-left control-group">
                                            <label>Дата доставки</label>
                                            <input id="date" type="text" name="date"/>
                                            <i class="icon-calendarpick"></i>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xs-12 full-width control-group">
                                            <label>Адрес доставки</label>
                                            <input id="adress" class="full-width" type="text" name="adress"/>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xs-12">
                                            <button class="button progress-button" data-style="flip-open" data-perspective="" data-horizontal="" disabled="disabled">
                                                <span class="progress-wrap">
                                                    <span class="content">Везите</span>
                                                    <span class="progress">
                                                        <span class="progress-inner notransition" style="width: 0%; opacity: 1;"></span>
                                                    </span>
                                                </span>
                                            </button>
                                            <div class="thanksForOrder">Спасибо за Заказ!<br/>Ожидайте звонка.</div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-7 col-md-offset-1 pL">
                <p class="intro-text">
                    Пермский food-проект &laquo;Варим-жарим&raquo; делает приготовление домашней еды еще более <strong>удобным</strong>! Наша служба доставки <strong>привезет</strong> Вам домой <strong>набор продуктов</strong> и <strong>фото-рецепты</strong> для приготовления вкуснейших блюд, созданных профессиональным шеф-поваром.<br />
                    Готовьте с&nbsp;удовольствием!
                </p>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-11 col-md-offset-1 pL feature-block">
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
    </div>
    <div class="container">
        <div class="raw">
            <div>
                <ul class="menu">
                    <?php $i=0; ?>
                    @foreach($categories as $menuItem)
                        <a href="/store/category/{{ $menuItem->id }}"><li class="col-md-2 <?php if ($i==0) {echo "col-md-offset-1";} ;?>"><span>{{$menuItem->name}}</span></li></a>
                        <?php $i++; ?>
                    @endforeach
                </ul>
            </div>
        </div>
    </div>
</header>
<div class="container">
    <div class="line"></div>
</div>
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





<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="js/vendor/jquery-1.10.2.min.js"><\/script>')</script>
<!--
{{ HTML::script('js/underscore-min.js'); }}
{{ HTML::script('js/backbone-min.js'); }}
{{ HTML::script('js/app.js'); }}
-->




<!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
<script type="text/javascript">

    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-3112997-31']);
    _gaq.push(['_trackPageview']);

    (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();
</script>


<!-- Yandex.Metrika counter -->
<script type="text/javascript">
    (function (d, w, c) {
        (w[c] = w[c] || []).push(function() {
            try {
                w.yaCounter23885122 = new Ya.Metrika({id:23885122,
                    webvisor:true,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true});
            } catch(e) { }
        });

        var n = d.getElementsByTagName("script")[0],
            s = d.createElement("script"),
            f = function () { n.parentNode.insertBefore(s, n); };
        s.type = "text/javascript";
        s.async = true;
        s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";

        if (w.opera == "[object Opera]") {
            d.addEventListener("DOMContentLoaded", f, false);
        } else { f(); }
    })(document, window, "yandex_metrika_callbacks");
</script>
<noscript><div><img src="//mc.yandex.ru/watch/23885122" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->
{{ HTML::script('js/plugins.js'); }}
{{ HTML::script('js/main.js'); }}

</body>
</html>
