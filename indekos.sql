-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.1.30-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win32
-- HeidiSQL Version:             9.5.0.5196
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Dumping structure for table indekos.anak_kos
CREATE TABLE IF NOT EXISTS `anak_kos` (
  `id_anak` int(11) NOT NULL,
  `id_ibu` int(11) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `no_dataDiri` varchar(30) NOT NULL,
  `alamat_asal` varchar(100) NOT NULL,
  `no_hp` varchar(15) NOT NULL,
  PRIMARY KEY (`id_anak`),
  KEY `id_ibu` (`id_ibu`),
  CONSTRAINT `anak_kos_ibfk_1` FOREIGN KEY (`id_ibu`) REFERENCES `ibu_kos` (`id_ibu`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table indekos.anak_kos: ~3 rows (approximately)
DELETE FROM `anak_kos`;
/*!40000 ALTER TABLE `anak_kos` DISABLE KEYS */;
INSERT INTO `anak_kos` (`id_anak`, `id_ibu`, `nama`, `no_dataDiri`, `alamat_asal`, `no_hp`) VALUES
	(1, 1, 'Apriyanto Tobing', '165150200111184', 'Jl. Praja dalam K no. 36, Jakarta Selatan', '081234567890'),
	(2, 1, 'Vinesia Yolanda', '165150201111190', 'Jl. Access Road Inalum Indrapura, Medan', '081234123412'),
	(3, 2, 'Jessica Amelia', '165150201111745', 'Jl. Saudara no. 52B, Siantar', '087865432100');
/*!40000 ALTER TABLE `anak_kos` ENABLE KEYS */;

-- Dumping structure for table indekos.fasilitas
CREATE TABLE IF NOT EXISTS `fasilitas` (
  `id_fasilitas` int(11) NOT NULL,
  `id_kamar` int(11) NOT NULL,
  `ukuran_kamar` varchar(30) NOT NULL,
  `km_luar_dalam` varchar(30) NOT NULL,
  `meja` varchar(15) NOT NULL,
  `kursi` varchar(15) NOT NULL,
  `lemari` varchar(15) NOT NULL,
  `tv` varchar(15) NOT NULL,
  `ac` varchar(15) NOT NULL,
  PRIMARY KEY (`id_fasilitas`),
  KEY `id_kamar` (`id_kamar`),
  CONSTRAINT `fasilitas_ibfk_1` FOREIGN KEY (`id_kamar`) REFERENCES `kamar` (`id_kamar`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table indekos.fasilitas: ~4 rows (approximately)
DELETE FROM `fasilitas`;
/*!40000 ALTER TABLE `fasilitas` DISABLE KEYS */;
INSERT INTO `fasilitas` (`id_fasilitas`, `id_kamar`, `ukuran_kamar`, `km_luar_dalam`, `meja`, `kursi`, `lemari`, `tv`, `ac`) VALUES
	(1, 1, '5 x 5', 'Luar', 'Ada', 'Ada', 'Ada', 'Tidak', 'Tidak'),
	(2, 2, '5 x 5', 'Dalam', 'Ada', 'Ada', 'Ada', 'Ada', 'Tidak'),
	(3, 3, '6 x 5', 'Dalam', 'Ada', 'Ada', 'Ada', 'Ada', 'Ada'),
	(4, 4, '3 x4', 'Luar', 'Ada', 'Tidak', 'Ada', 'Ada', 'Tidak');
/*!40000 ALTER TABLE `fasilitas` ENABLE KEYS */;

-- Dumping structure for table indekos.ibu_kos
CREATE TABLE IF NOT EXISTS `ibu_kos` (
  `id_ibu` int(11) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `no_dataDiri` varchar(30) NOT NULL,
  `no_hp` varchar(15) NOT NULL,
  `alamat_kos` varchar(100) NOT NULL,
  PRIMARY KEY (`id_ibu`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table indekos.ibu_kos: ~2 rows (approximately)
DELETE FROM `ibu_kos`;
/*!40000 ALTER TABLE `ibu_kos` DISABLE KEYS */;
INSERT INTO `ibu_kos` (`id_ibu`, `nama`, `no_dataDiri`, `no_hp`, `alamat_kos`) VALUES
	(1, 'Fatimah Caroline', '201111247', '087875742690', 'Jl. Raya Sumber Sari 292 C'),
	(2, 'Mega Rosmalawati', '201111249', '087875742692', 'Jl. Raya Sumber Sari 292 E');
/*!40000 ALTER TABLE `ibu_kos` ENABLE KEYS */;

-- Dumping structure for table indekos.kamar
CREATE TABLE IF NOT EXISTS `kamar` (
  `id_kamar` int(11) NOT NULL,
  `id_fasilitas` int(11) DEFAULT NULL,
  `id_anak` int(11) DEFAULT NULL,
  `id_ibu` int(11) NOT NULL,
  `status` varchar(30) NOT NULL,
  PRIMARY KEY (`id_kamar`),
  KEY `id_fasilitas` (`id_fasilitas`),
  KEY `id_ibu` (`id_ibu`),
  KEY `id_anak` (`id_anak`),
  CONSTRAINT `kamar_ibfk_1` FOREIGN KEY (`id_fasilitas`) REFERENCES `fasilitas` (`id_fasilitas`),
  CONSTRAINT `kamar_ibfk_2` FOREIGN KEY (`id_ibu`) REFERENCES `ibu_kos` (`id_ibu`),
  CONSTRAINT `kamar_ibfk_3` FOREIGN KEY (`id_anak`) REFERENCES `anak_kos` (`id_anak`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table indekos.kamar: ~4 rows (approximately)
DELETE FROM `kamar`;
/*!40000 ALTER TABLE `kamar` DISABLE KEYS */;
INSERT INTO `kamar` (`id_kamar`, `id_fasilitas`, `id_anak`, `id_ibu`, `status`) VALUES
	(1, 1, 1, 1, 'Terisi'),
	(2, 2, 3, 1, 'Terisi'),
	(3, 3, 2, 2, 'Terisi'),
	(4, 4, NULL, 2, 'Kosong');
/*!40000 ALTER TABLE `kamar` ENABLE KEYS */;

-- Dumping structure for table indekos.keuangan
CREATE TABLE IF NOT EXISTS `keuangan` (
  `id_keuangan` int(11) NOT NULL,
  `id_ibu` int(11) NOT NULL,
  `id_kamar` int(11) NOT NULL,
  `tanggal_transaksi` date NOT NULL,
  `jumlah_pemasukan` int(30) NOT NULL,
  `jumlah_pengeluaran` int(30) NOT NULL,
  PRIMARY KEY (`id_keuangan`),
  KEY `keuangan_ibfk_1` (`id_kamar`),
  KEY `keuangan_ibfk_2` (`id_ibu`),
  CONSTRAINT `keuangan_ibfk_1` FOREIGN KEY (`id_kamar`) REFERENCES `kamar` (`id_kamar`),
  CONSTRAINT `keuangan_ibfk_2` FOREIGN KEY (`id_ibu`) REFERENCES `kamar` (`id_ibu`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table indekos.keuangan: ~4 rows (approximately)
DELETE FROM `keuangan`;
/*!40000 ALTER TABLE `keuangan` DISABLE KEYS */;
INSERT INTO `keuangan` (`id_keuangan`, `id_ibu`, `id_kamar`, `tanggal_transaksi`, `jumlah_pemasukan`, `jumlah_pengeluaran`) VALUES
	(1, 1, 1, '2018-11-05', 4000000, 0),
	(2, 1, 2, '2018-11-01', 3000000, 0),
	(3, 2, 4, '2018-11-02', 600000, 0),
	(4, 2, 4, '2018-11-02', 0, 3000000);
/*!40000 ALTER TABLE `keuangan` ENABLE KEYS */;

-- Dumping structure for table indekos.penyewaan
CREATE TABLE IF NOT EXISTS `penyewaan` (
  `id_penyewa` int(11) NOT NULL,
  `id_anak` int(11) NOT NULL,
  `jumlah_uang` int(30) NOT NULL,
  `tanggal_masuk` date NOT NULL,
  `tanggal_keluar` date NOT NULL,
  `id_ibu` int(11) NOT NULL,
  `id_kamar` int(11) NOT NULL,
  `harga_kamar` int(30) NOT NULL,
  PRIMARY KEY (`id_penyewa`),
  KEY `id_kamar` (`id_kamar`),
  KEY `id_anak` (`id_anak`),
  KEY `id_ibu` (`id_ibu`),
  CONSTRAINT `penyewaan_ibfk_1` FOREIGN KEY (`id_kamar`) REFERENCES `kamar` (`id_kamar`),
  CONSTRAINT `penyewaan_ibfk_2` FOREIGN KEY (`id_anak`) REFERENCES `anak_kos` (`id_anak`),
  CONSTRAINT `penyewaan_ibfk_3` FOREIGN KEY (`id_ibu`) REFERENCES `ibu_kos` (`id_ibu`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table indekos.penyewaan: ~3 rows (approximately)
DELETE FROM `penyewaan`;
/*!40000 ALTER TABLE `penyewaan` DISABLE KEYS */;
INSERT INTO `penyewaan` (`id_penyewa`, `id_anak`, `jumlah_uang`, `tanggal_masuk`, `tanggal_keluar`, `id_ibu`, `id_kamar`, `harga_kamar`) VALUES
	(1, 1, 4000000, '2018-11-01', '2019-11-01', 1, 1, 7000000),
	(2, 2, 3000000, '2018-11-30', '2019-11-30', 1, 2, 8000000),
	(3, 3, 600000, '2018-12-15', '2019-06-15', 2, 3, 4000000);
/*!40000 ALTER TABLE `penyewaan` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
