<?php   
REQUIRE_ONCE('koneksi.php'); 

if(isset($_GET['id_kamar'])) {
	$id_kamar = $_GET['id_kamar'];

	$QUERY = MYSQLI_QUERY($conn,"SELECT kamar.id_kamar, anak_kos.nama AS 'penghuni', ibu_kos.nama AS 'pemilik', kamar.status, fasilitas.ukuran_kamar, fasilitas.km_luar_dalam, fasilitas.meja, fasilitas.kursi, fasilitas.lemari, fasilitas.tv, fasilitas.ac FROM kamar 
	LEFT JOIN anak_kos ON kamar.id_anak = anak_kos.id_anak 
	INNER JOIN ibu_kos ON kamar.id_ibu = ibu_kos.id_ibu 
	INNER JOIN fasilitas ON kamar.id_kamar = fasilitas.id_kamar");

	$data = array(); // versi simple
	while ($ROW = MYSQLI_FETCH_ASSOC($QUERY)){
    	$data[] = $ROW;
	}
	header('Content-Type:application/json;charset=utf-8');
	ECHO JSON_ENCODE($data);

	MYSQLI_CLOSE($conn);
}
else {
	$QUERY = MYSQLI_QUERY($conn,"SELECT * FROM kamar"); 
	$data = array();
	while($ROW = MYSQLI_FETCH_ASSOC($QUERY)){
		$data[] = $ROW;
	}

	header('Content-Type:application/json;charset=utf-8'); 
	ECHO JSON_ENCODE($data); 
	MYSQLI_CLOSE($conn); 
}

?>