<!--login_form.php-->
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script>
        function call(){
            $.ajax({
                url:'login_handler.php',
                data:{username:$('.user').val(),
                    password:$('.pass').val()},
                cache: 'false',
                method:'post',
                dataType:'json',
                success:function(response){
                        console.log(response);
                     $('.response').append(response.message);
                     $('.response').append(response.error);
                }
            });

        }
    </script>
</head>
<body>
    <input type="text" class="user" placeholder="username">
    <br>
    <input type="text" class="pass" placeholder="password">
    <button onclick="call()">Log In</button>
    <div class="response"></div>
</body>
</html>
