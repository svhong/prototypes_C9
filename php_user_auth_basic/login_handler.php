<?php
session_start();
$_SESSION['username'] = $_POST['username'];
$_SESSION['password'] = sha1($_POST['password']);

$users = [
    ['id' => 1, 'username'=>'shong', 'password'=>'39ccb32d95edfdbcd882f2b01809724ec640ea16'],
    ['id' => 2, 'username'=>'jbyun', 'password'=>'74836f022061ec4ea056a2fc16c7b711b1289c9e'],
    ['id' => 3, 'username'=>'kngo', 'password'=>'81b06facd90fe7a6e9bbd9cee59736a79105b7be'],
    ['id' => 4, 'username'=>'bphan', 'password'=>'de163f3b3a5630ec6ed8c90a2288aec953ce809a'],
    ['id' => 5, 'username'=>'ealfano', 'password'=>'2aed5404c83f7a46aa249e0a6328af756b19d513']
];
$output['success'] = false;
foreach($users as $u) {
    if ($_SESSION['username'] == $u['username'] && $_SESSION['password'] == $u['password']) {
        $output['success'] = true;
    }
}
if($output['success']){
    $_SESSION['user_id'] = $u['id'];
    $output['message'] = 'User Successfully Logged in!';
} else {
    $output['error'] = 'Invalid username and password';
}
print(json_encode($output));
?>