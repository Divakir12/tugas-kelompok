<?php 
require 'koneksi.php';
$data = [];
$id_mobil = $_GET['id_mobil'];
$query = mysqli_query($koneksi,"select * from mobil where id_mobil ='$id_mobil'");
$jumlah = mysqli_num_rows($query);
if ($jumlah == 1) {
	$row = mysqli_fetch_object($query);
	$data = $row;
}

echo json_encode($data);
echo mysqli_error($koneksi);

 ?>