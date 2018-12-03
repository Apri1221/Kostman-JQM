<?php
REQUIRE_ONCE('koneksi.php');
$QUERY = MYSQLI_QUERY($conn,"SELECT * FROM fasilitas");
$data = array();

while ($ROW = MYSQLI_FETCH_ASSOC($QUERY)) {
	$data[] = $ROW;
}

header('Content-Type:application/json;charset=utf-8');
ECHO JSON_ENCODE( $data );
MYSQLI_CLOSE($conn);
?>