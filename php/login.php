<?php
    header('content-type:text/html;charset=utf-8;');
    $phone = $_REQUEST['phone'];
    $code = $_REQUEST['password'];
    $conn = mysqli_connect('localhost','root','root','taobao');
    $res = mysqli_query($conn,"SELECT * FROM `user` WHERE `phone`=$phone AND `password`=$code");
    $row = mysqli_fetch_assoc($res);
    if($row > 0){
        echo 1;
    }else{
        echo 0;
    }
    mysqli_close($conn);
?>