// kerja keras apri
localStorage.id_ibu = '1';

var Template = {

    login: function() {
        // Mengirim POST request untuk mendapatkan token
        $.ajax({
            type: "POST",
            url: "http://localhost/apri2/php/loginloginan.php",
            dataType: "json",
            data: {
                id_ibu: localStorage.getItem('id_ibu')
            },
            success: function(response) {
                console.log(response);
                for (var i = 0; i < response.length; i++) {
                    localStorage.nama_ibu = response[i].nama;
                }
                document.getElementById('disini').innerHTML = localStorage.getItem('nama_ibu');
                document.getElementById('penyewaan').value = localStorage.getItem('id_ibu');
            },
            error: function() {
                $('#loginField').append("<div class='alert alert-danger' role='alert'>" +
                    "Login Failed" +
                    "</div>");
            }
        });

    }
}

var panel =
    '<div data-role="panel" id="panel" data-position-fixed="true" data-theme="f" data-dismissible="false"><h2>Menu</h2><ul data-role="listview"><li><a href="index.html">Daftar Penyewaan</a></li><li><a href="anakkos.html">Daftar Anak Kos</a></li><li><a href="kamar.html">Daftar Kamar Kos</a></li><li><a href="fasilitas.html">Daftar Fasilitas</a></li><li><a href="keuangan.html">Keuangan</a></li><li><a href="#page-about_us">About Us</a></li></ul></div>';

var panel2 =
    '<div data-role="panel" id="panel2" data-position="right" data-theme="f" data-position-fixed="true" data-dismissible="false"><h2 id="disini">Pengaturan Akun</h2><div data-role="controlgroup" data-type="vertical"><div class="ui-block"><button data-icon="flat-man" href="#gakbisa" data-rel="popup" data-transition="slideup" data-theme="c">Edit Profil</button><a href="#" class="ui-btn">Keluar</a></div></div></div>';

$(document).one('pagebeforecreate', function() {
    $.mobile.pageContainer.prepend(panel);
    $("#panel").panel().enhanceWithin();
    $.mobile.pageContainer.prepend(panel2);
    $("#panel2").panel().enhanceWithin();
    Template.login();
});


$('#tanggal_masuk').datepicker({
    language: 'en',
    minDate: new Date(), // Now can select only dates, which goes after today
    inline: true
});

$('#tanggal_masuk').datepicker({
    language: 'en',
    minDate: new Date(), // Now can select only dates, which goes after today
    inline: true
});
$('#tanggal_keluar').datepicker({
    language: 'en',
    minDate: new Date(), // Now can select only dates, which goes after today
    inline: true
});