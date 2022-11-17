<?php
require 'koneksi.php';
$input = file_get_contents('php://input');
$pesan = [];

$id_mobil = $_GET['id_mobil'];
$query = mysqli_query($koneksi, "delete from mobil where id_mobil='$id_mobil'");
//pesan
if ($query) {
    http_response_code(201);
    $pesan['status'] = 'sukses';
} else {
    http_response_code(422);
    $pesan['status'] = 'gagal';
}

echo json_encode($pesan);
echo mysqli_error($koneksi);
