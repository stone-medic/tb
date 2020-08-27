<?php
    header('content-type:text/html;charset=utf-8;');
    $phone = $_REQUEST['phone'];
    $code = $_REQUEST['code'];
    //连接数据库，获取phone来作比对
    $conn = mysqli_connect('localhost','root','root','taobao');
    $res = mysqli_query($conn,"SELECT * FROM `user` WHERE `phone`=$phone");
    $row = mysqli_fetch_assoc($res);
    if($row > 0){
        echo 1;
    }else{
        $sql = "INSERT INTO `user` (`phone`,`password`) VALUES ($phone,$code)";
        $res = mysqli_query($conn,$sql);
        echo 0;
    }
    mysqli_close($conn);
    
?>
