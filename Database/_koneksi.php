<?php
$host       = "localhost";
$user       = "root";
$pass       = "";
$db         = "aplication";

$koneksi    = mysqli_connect($host, $user, $pass , $db);
if (!$koneksi) {
  die("Tidak bisa terkoneksi ke database : " . mysqli_connect_error());
} else {
  echo "Koneksi Berhasil";
}

