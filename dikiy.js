<script type="text/javascript" src="/jquery.js"></script>
    <script type="text/javascript">
	var flag=false;
    function show() {
        // выводим сообщения в блок #messages
        $.ajax({//метод Осуществляет запрос к серверу без перезагрузки страницы.
            url: 'show.php',// адрес запроса, как часть настроек
            timeout: 10000, // время ожидания загрузки сообщений 10 секунд (или 10000 миллисекунд)
            success: function(data) {
                $('#messages').html(data);//строка которую нужно вставить в елемент
            },
            error: function() {
                $('#messages').html("Не удалось загрузить сообщения");
            }
        });
	
	
    }
	
	
	
     function getRandomColor() {
		var letters = '0123456789ABCDEF'.split('');
		var color = '#';
		for (var i = 0; i < 6; i++ ) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}
//input type='hidden' name='col' value='$ttt'>
	var myColour = getRandomColor();
	
    function send() {
        // функция отправки сообщения
        var sender = $('#sender').val(); // отправитель, достаем значение из елемента sender
	 
    	
		
		sender = '<font color="' + myColour + '">' + sender + '</font>';
		//console.log(sender);
		
        var message = $('#message').val(); // сообщение
        //var - local, # - element, $- кэш, глоб пер. сод. джиквери об.	
        if(sender.length > 31 && message.length > 0) { // проверка полей "Имя" и "Сообщение"
            $.ajax({
                url: 'send.php',
                type: 'post',//не кэшируються(dont use RAM)
                timeout: 10000, // время ожидания отправки сообщения 10 сек.
                data: {'sender': sender, 'message': message},
                success: function(data) {
                    document.getElementById('message').value = ""; // удаляем содержимое поля "Сообщение", если сообщение было успешно отправлено
                    $('#send_message_result').html("");
                },
                error: function() {
                    $('#send_message_result').html("Не удалось отправить сообщение");
                }
            });
			 document.getElementById('player').play();
	//	var audio = new Audio();
		//audio.src = 'sonic_ring.mp3';
	//	audio.autoplay = true;
	//	var interval = 1000;
	flag=true;
        } else if(sender.length <=31) {
            $('#send_message_result').html("Имя должно состоять минимум из 3 букв!");
			if(message.length == 0) $('#send_message_result').html("Имя должно состоять минимум из 3 букв!<br>Введите сообщение!");
        } else if(message.length == 0) {
            $('#send_message_result').html("Введите сообщение!");
			
        }
		
    }
    
   var interval = 1000; // количество миллисекунд для авто-обновления сообщений (1 секунда = 1000 миллисекунд)
    
    show();
    
    setInterval('show()', interval);
	function random_html_color()
{
    return sprintf( '#%02X%02X%02X', rand(0, 255), rand(0, 255), rand(0, 255) );
}

    </script>