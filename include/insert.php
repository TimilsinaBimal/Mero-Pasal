<?php
include_once('connection.php');

// $productID= $_GET[''];
$productName= $_GET['productName'];
$productImage= $_GET['productImage'];
$shopName= $_GET['shopName'];
$location= $_GET['location'];
$remarks= $_GET['remarks'];
$price = $_GET['price'];

$sql = "INSERT INTO PRODUCT(productName,productImage,price,shopName,location,remarks) VALUES('$productName','$productImage','$price','$shopName','$location','$remarks');";

mysqli_query($conn,$sql);

header('Location: ../retailerHome/index.php');