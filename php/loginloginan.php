<?php

REQUIRE_ONCE('koneksi.php'); //include koneksi terlebih dahulu

if(isset($_POST['id_ibu'])) {
	$id_ibu = $_POST['id_ibu'];

	$QUERY = MYSQLI_QUERY($conn,"SELECT * FROM ibu_kos WHERE id_ibu = $id_ibu");

	$data = array(); // versi simple
	while ($ROW = MYSQLI_FETCH_ASSOC($QUERY)){
    	$data[] = $ROW;
	}
	header('Content-Type:application/json;charset=utf-8');
	ECHO JSON_ENCODE($data);

	MYSQLI_CLOSE($conn);
}

else {
	$QUERY = MYSQLI_QUERY($conn,"SELECT * FROM ibu_kos");

	$data = array(); // versi simple
	while ($ROW = MYSQLI_FETCH_ASSOC($QUERY)){
    	$data[] = $ROW;
	}
	header('Content-Type:application/json;charset=utf-8');
	ECHO JSON_ENCODE($data);

	MYSQLI_CLOSE($conn);	
}

?>