<script type="text/javascript" src="/jquery.js"></script>
    <script type="text/javascript">
	var flag=false;
    function show() {
        // ������� ��������� � ���� #messages
        $.ajax({//����� ������������ ������ � ������� ��� ������������ ��������.
            url: 'show.php',// ����� �������, ��� ����� ��������
            timeout: 10000, // ����� �������� �������� ��������� 10 ������ (��� 10000 �����������)
            success: function(data) {
                $('#messages').html(data);//������ ������� ����� �������� � �������
            },
            error: function() {
                $('#messages').html("�� ������� ��������� ���������");
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
        // ������� �������� ���������
        var sender = $('#sender').val(); // �����������, ������� �������� �� �������� sender
	 
    	
		
		sender = '<font color="' + myColour + '">' + sender + '</font>';
		//console.log(sender);
		
        var message = $('#message').val(); // ���������
        //var - local, # - element, $- ���, ���� ���. ���. �������� ��.	
        if(sender.length > 31 && message.length > 0) { // �������� ����� "���" � "���������"
            $.ajax({
                url: 'send.php',
                type: 'post',//�� �����������(dont use RAM)
                timeout: 10000, // ����� �������� �������� ��������� 10 ���.
                data: {'sender': sender, 'message': message},
                success: function(data) {
                    document.getElementById('message').value = ""; // ������� ���������� ���� "���������", ���� ��������� ���� ������� ����������
                    $('#send_message_result').html("");
                },
                error: function() {
                    $('#send_message_result').html("�� ������� ��������� ���������");
                }
            });
			 document.getElementById('player').play();
	//	var audio = new Audio();
		//audio.src = 'sonic_ring.mp3';
	//	audio.autoplay = true;
	//	var interval = 1000;
	flag=true;
        } else if(sender.length <=31) {
            $('#send_message_result').html("��� ������ �������� ������� �� 3 ����!");
			if(message.length == 0) $('#send_message_result').html("��� ������ �������� ������� �� 3 ����!<br>������� ���������!");
        } else if(message.length == 0) {
            $('#send_message_result').html("������� ���������!");
			
        }
		
    }
    
   var interval = 1000; // ���������� ����������� ��� ����-���������� ��������� (1 ������� = 1000 �����������)
    
    show();
    
    setInterval('show()', interval);
	function random_html_color()
{
    return sprintf( '#%02X%02X%02X', rand(0, 255), rand(0, 255), rand(0, 255) );
}

    </script>