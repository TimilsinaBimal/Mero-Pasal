CREATE DATABASE MeroPasal;
USE MeroPasal;

CREATE TABLE multiuserlogin
(
    usertype VARCHAR(255),
    username VARCHAR(255) PRIMARY KEY,
    password VARCHAR(255),
    email VARCHAR(255)
);
CREATE TABLE Product
(
    productID INT PRIMARY KEY,
    productName VARCHAR(255),
    productImage LONGBLOB,
    price VARCHAR(255),
    shopName VARCHAR(255),
    location VARCHAR(255),
    remarks VARCHAR(255)
);