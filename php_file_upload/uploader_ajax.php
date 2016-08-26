<!doctype html>
<html>
<head>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script>
        $(document).ready(function () {
            $('#ajaxbutton').click(function () {
                var formdata = $('#file_upload');
                var new_formdata = new FormData(formdata[0]);
                console.log(new_formdata);
                console.log($('#file_upload'));
                $.ajax({
                    url: 'file_handler.php',
                    processData: false,
                    contentType: false,
                    cache: false,
                    dataType: 'text',
                    type: 'post',
                    mimeType:'multipart/form-data',
                    data: new_formdata,
                    success: function (response) {
                        console.log(response);
                        $('#userKnow').append(response);
                    }});
            });

        });
    </script>
</head>
<body>
<form id="file_upload" method="post" enctype="multipart/form-data">
    <input type="file" name="image" id="upload_file">
    <input type="text" name="hello">
</form>
<button type="button" name="upload file" id="ajaxbutton">Upload</button>
<div id="userKnow"></div>
</body>
</html>