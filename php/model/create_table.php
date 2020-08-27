<?php
    require('./_connect.php');

    //创建表单和字段
    $sql = "CREATE TABLE cart (
                product_id VARCHAR(300) NOT NULL PRIMARY KEY,
                product_name VARCHAR(300) NOT NULL,
                product_img VARCHAR(300) NOT NULL,
                product_price VARCHAR(300) NOT NULL,
                product_num VARCHAR(300) NOT NULL,
                submission_date TIMESTAMP
    )";
    $result = mysqli_query($conn,$sql);
    if($result){
        echo "数据表创建成功";
    }else{
        echo "数据表创建失败";
    }

?>