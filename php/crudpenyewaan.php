<?php

REQUIRE_ONCE('koneksi.php');

// print_r($_POST);


if(isset($_POST['penyewaan'])) {
	$id_ibu = $_POST['id_ibu'];
	$nama_anak = $_POST['nama_anak'];
	$jumlah_uang = $_POST['jumlah_uang'];
	$harga_kamar = $_POST['harga_kamar'];
	$tanggal_masuk = $_POST['tanggal_masuk'];
	$tanggal_keluar = $_POST['tanggal_keluar'];
	$no_kamar = $_POST['no_kamar'];

	$QUERY = MYSQLI_QUERY($conn,"INSERT INTO penyewaan (id_anak, jumlah_uang, tanggal_masuk, tanggal_keluar, id_ibu, id_kamar, harga kamar) VALUES ((SELECT id_anak FROM anak_kos WHERE nama = $nama_anak), $jumlah_uang, $tanggal_masuk, $tanggal_keluar, (SELECT id_ibu FROM ibu_kos WHERE id_ibu = $id_ibu), (SELECT id_kamar FROM kamar WHERE id_kamar = $no_kamar), $harga_kamar)");

	MYSQLI_CLOSE($conn);
}

?>