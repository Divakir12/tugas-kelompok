<?php
//header untuk menangani cors policy
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: PUT, GET, HEAD, DELETE, OPTIONS, POST');
header('Access-Control-Allow-Headers: X-Requested-With');
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: charset=utf-8, application/json');
//membuat variable koneksi ke mysql
$koneksi = mysqli_connect('localhost', 'root', '', 'belajar_login') or die('koneksi gagal');
