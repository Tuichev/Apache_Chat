<?php

// отправка сообщения

require 'config.php'; // подключаем конфиг

$sender = $_POST['sender'];
$text = $_POST['message'];

$text = trim($text);//обрезает концы
$text = str_replace("\n", "</br>", $text);
function random_html_color()
{
    return sprintf( '#%02X%02X%02X', rand(0, 255), rand(0, 255), rand(0, 255) );
}

$color = random_html_color();


$message = "\n<b>$sender:</b> $text"; // шаблон нашего сообщения

$file = fopen($filename, 'a'); // открываем файл 

fwrite($file, $message); // записываем отправленное сообщение в чат
fclose($file); 

?>