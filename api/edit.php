<?php
require 'koneksi.php';
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$pesan = [];
$id_mobil = $data['id_mobil'];
$merk = $data['merk'];
$harga_sewa = $data['harga_sewa'];

$query = mysqli_query($koneksi, "update mobil set id_mobil='$id_mobil',merk='$merk' where harga_sewa='$harga_sewa'");
// if ($query) {
// 	http_response_code(201);
// 	$pesan['status'] = 'sukses';
// }else{
// 	http_response_code(422);
// 	$pesan['status'] = 'gagal';

// }

echo json_encode($pesan);
echo mysqli_error($koneksi);
