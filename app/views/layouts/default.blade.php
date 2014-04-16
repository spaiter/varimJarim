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

    <link rel="stylesheet" href="stylus/main.css">
    <link href='http://fonts.googleapis.com/css?family=Roboto+Slab:300,700,400&subset=latin,cyrillic-ext,cyrillic' rel='stylesheet' type='text/css'>
    <script src="js/vendor/modernizr-2.6.2.min.js"></script>
</head>
<body>
<!--[if lt IE 7]>
<p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
<![endif]-->

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
{{ HTML::script('js/vendor/bootstrap.min.js'); }}
{{ HTML::script('js/vendor/bootstrap-multiselect.js'); }}
{{ HTML::script('js/plugins.js'); }}
{{ HTML::script('js/main.js'); }}


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
</body>
</html>
