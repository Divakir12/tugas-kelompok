<?php
require 'koneksi.php';

$input = file_get_contents('php://input');
$data = json_decode($input, true);

$pesan = [];
$id_mobil = trim($data['id_mobil']);
$merk = trim($data['merk']);
$harga_sewa = trim($data['harga_sewa']);

if ($id_mobil != '' and $merk != '' and $harga_sewa != '') {
    $query = mysqli_query($koneksi, "insert into mobil(id_mobil,merk,harga_sewa) values('id_mobil','merk','harga_sewa')");
} else {
    $query = mysqli_query($koneksi, "delete from mobil where id_mobil='$id_mobil'");
}


// if ($query) {
// 	http_response_code(201);
// 	$pesan['status'] = 'sukses';
// }else{
// 	http_response_code(422);
// 	$pesan['status'] = 'gagal';
// }

echo json_encode($pesan);
echo mysqli_error($koneksi);

?>