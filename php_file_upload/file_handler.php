<!-- File Handler -->
<?php
$image_dir = 'uploads/';
$image = $_FILES['image'];
$image_ext = pathinfo($image['name'], PATHINFO_EXTENSION);
$image_ext_check = array('gif','jpeg','jpg','png');
$image_temp = $image['tmp_name'];
$image_newloc = $image_dir.$image['name'];
$output = [];
if(!empty($_FILES)){
    if($image['size'] < 200000){
        if(in_array($image_ext, $image_ext_check)){
            if(move_uploaded_file($image_temp, $image_newloc)){
                $output['success'] = true;
                $output['filepath'] = stripslashes($image_newloc);
                $output['message'] = "the file".$image['name']."has been uploaded";
            } else {
                $output['error'][] = "There was an error uploading your file";
            }
        } else {
            $output['error'][] = "this is not a valid image";
        }
    } else {
        $output['error'][] = "this image is too large";
    }
} else  {
    $output['error'][] = "nothing to upload";
}
echo json_encode($output);
?>
