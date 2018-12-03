<?php

REQUIRE_ONCE('koneksi.php'); //include koneksi terlebih dahulu

if(isset($_POST['id_ibu'])) {
	$id_ibu = $_POST['id_ibu'];

	$QUERY = MYSQLI_QUERY($conn,"SELECT anak_kos.nama as id_anak, penyewaan.id_penyewa, penyewaan.jumlah_uang, penyewaan.tanggal_masuk, penyewaan.tanggal_keluar, penyewaan.id_ibu, penyewaan.id_kamar, penyewaan.harga_kamar FROM penyewaan INNER JOIN anak_kos ON penyewaan.id_anak=anak_kos.id_anak WHERE penyewaan.id_ibu = $id_ibu");

	$data = array(); // versi simple
	while ($ROW = MYSQLI_FETCH_ASSOC($QUERY)){
    	$data[] = $ROW;
	}
	header('Content-Type:application/json;charset=utf-8');
	ECHO JSON_ENCODE($data);

	MYSQLI_CLOSE($conn);
}
?>