<?php
REQUIRE_ONCE('koneksi.php');
$QUERY = MYSQLI_QUERY($conn,"SELECT * FROM anak_kos");
// $mhs = new stdClass;
// $ROW = MYSQLI_FETCH_ASSOC($QUERY);
// $mhs-> NIM = $ROW['NIM'];
// $mhs-> Nama = $ROW['Nama'];
// $mhs-> Jurusan = $ROW['Jurusan'];
// $mhs-> Fakultas = $ROW['Fakultas'];
// $mhs-> Alamat = $ROW['Alamat'];
// $mhs-> NoHp = $ROW['NoHp'];

$data = array();
while ($ROW = MYSQLI_FETCH_ASSOC($QUERY)) {
	# code...
	$data[] = $ROW;
}

header('Content-Type:application/json;charset=utf-8');
ECHO JSON_ENCODE( $data );
MYSQLI_CLOSE($conn);
?>