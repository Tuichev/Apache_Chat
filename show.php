<?php

// вывод сообщений

require 'config.php'; // подключаем конфиг

$file = file($filename);
$count = count($file);
$temp = ""; 
for($i = $count; $i-- > 0;) {
	$temp=$file[$i];
	echo $temp . "</br>";
}

?>