<?php
REQUIRE_ONCE('koneksi.php');

if (isset($_POST['id_ibu'])) {
	$id_ibu = $_POST['id_ibu'];

	$QUERY = MYSQLI_QUERY($conn,"SELECT * FROM anak_kos WHERE id_ibu = $id_ibu");

	$data = array();
	while ($ROW = MYSQLI_FETCH_ASSOC($QUERY)) {
		# code...
		$data[] = $ROW;
	}

	header('Content-Type:application/json;charset=utf-8');
	ECHO JSON_ENCODE( $data );
	MYSQLI_CLOSE($conn);
}
else {
	$QUERY = MYSQLI_QUERY($conn,"SELECT * FROM anak_kos");

	$data = array();
	while ($ROW = MYSQLI_FETCH_ASSOC($QUERY)) {
		# code...
		$data[] = $ROW;
	}

	header('Content-Type:application/json;charset=utf-8');
	ECHO JSON_ENCODE( $data );
	MYSQLI_CLOSE($conn);	
}
?>