<?php
header( "Access-Control-Allow-Origin: *" );
header( "Access-Control-Allow-Credentials: true" );
header( "Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS" );
header( "Access-Control-Max-Age: 604800" );
header( "Access-Control-Request-Headers: x-requested-with" );
header( "Access-Control-Allow-Headers: x-requested-with, x-requested-by" );

define('HOST','localhost');
define('USER','root');

// define('USER','inseedwe_apriaja');

// sesuaikan nama user
define('PASS','apriyanto12');
// sesuaiakan nama password
define('DB','indekos2');//sesuaiakan nama database

// define('DB','inseedwe_indekos');

$conn = mysqli_connect(HOST,USER,PASS,DB) or die('Unable to Connect');
date_default_timezone_set("Asia/Jakarta");

?>