<?php
$to  = "varimzharim@gmail.com";

$name = trim(htmlspecialchars($_POST['name']));
$phone = trim(htmlspecialchars($_POST['phone']));
$email = trim(htmlspecialchars($_POST['email']));
$date = trim(htmlspecialchars($_POST['date']));
$adress = trim(htmlspecialchars($_POST['adress']));
$totalCost = trim(htmlspecialchars($_POST['totalCost']));
$orderList = $_POST['orderList'];
$subject = "Новый заказ";

$order = '<ul>';
foreach ($orderList as &$value) {
    $order .=  "<li>".trim(strip_tags($value[0]))." * ".$value[1]."</li>";
}
$order .="</ul>";

$message = "
<html>
    <head>
        <title>Получен новый заказ</title>
    </head>
    <body>
        <p>Получен новый заказ!</p>
        <br/>
        <p><span>Список заказа: </span><span>$order</span></p>
        <br/>
        <p><span>Сумма заказа: </span><span>$totalCost Р</span></p>
        <br/>
        <p><span>Время доставки: </span><span>$date</span></p>
        <br/>
        <p><span>Адрес доставки: </span><span>$adress</span></p>
        <br/>
        <p><span>Стоимость доставки: </span><span>100 Р</span></p>
        <br/>
        <p><span>Имя заказчика: </span><span>$name</span></p>
        <p><span>Телефон заказчика: </span><span>$phone</span></p>
        <p><span>Email заказчика: </span><span>$email</span></p>
    </body>
</html>";

$message2 = "
<html>
    <head>
        <title>Ваш заказ</title>
    </head>
    <body>
        <p><span>Список заказа: </span><span>$order</span></p>
        <br/>
        <p><span>Сумма заказа: </span><span>$totalCost Р</span></p>
        <br/>
        <p><span>Время доставки: </span><span>$date</span></p>
        <br/>
        <p><span>Адрес доставки: </span><span>$adress</span></p>
        <p><span>Стоимость доставки: </span><span>100 Р</span></p>
    </body>
</html>";

$headers  = "Content-type: text/html; charset=utf-8 \r\n";
$headers .= "From: varimzharim.ru\r\n";

mail($to, $subject, $message, $headers);
mail("info@da-group.ru", $subject, $message, $headers);
mail($email, $subject, $message2, $headers);
?>