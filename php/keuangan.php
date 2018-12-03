<?php   
REQUIRE_ONCE('koneksi.php'); 

$QUERY = MYSQLI_QUERY($conn,"SELECT ibu_kos.nama AS 'pemilik',  kamar.id_kamar, keuangan.tanggal_transaksi, keuangan.jumlah_pemasukan, keuangan.jumlah_pengeluaran FROM keuangan  
 INNER JOIN ibu_kos ON keuangan.id_ibu = ibu_kos.id_ibu 
 INNER JOIN kamar ON kamar.id_kamar = keuangan.id_kamar"); 

$data = array();
while($ROW = MYSQLI_FETCH_ASSOC($QUERY)){
 $data[] = $ROW;
}

header('Content-Type:application/json;charset=utf-8'); 
ECHO JSON_ENCODE($data); 
MYSQLI_CLOSE($conn); 
?>