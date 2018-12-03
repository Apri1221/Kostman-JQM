var Application = {
    initApplication: function() {
        $(window).load('pageinit', '#page-penyewaan', function() {
            Application.initShowSwa();
        })
        $(document).on('click', '#detail-penyewaan', function() {
            var penyewaan = $(this).data('penyewaan');
            Application.initShowDetailSwa(penyewaan);
        })
    },

    initShowSwa: function() {
        $.ajax({
            url: "https://apri.inseed.web.id/penyewaan.php",
            type: "post",
            data: {
                id_ibu: localStorage.getItem('id_ibu'),
            },
            beforeSend: function() {
                $.mobile.loading('show', {
                    text: "Mohon ditunggu sedang mengambil data",
                    textVisible: true
                });
            },
            success: function(dataPenyewaan) {
                console.log(dataPenyewaan);
                for (var i = 0; i < dataPenyewaan.length; i++) {
                    var appendList = '<li class="listitem"><a href="#page-detail_penyewaan?id=' + dataPenyewaan[i].id_penyewa +
                        '" target="_self" id="detail-penyewaan" data-penyewaan="' + dataPenyewaan[i].id_penyewa + '"><img src="img/arsip.png" style="margin:18px 8px 18px; "><h2>' + dataPenyewaan[i].id_anak + '</h2><h2>' + dataPenyewaan[i].jumlah_uang + '</h2><p>' + dataPenyewaan[i].tanggal_masuk + '</p><p><b>' + dataPenyewaan[i].id_kamar + '</b></p></a></li>'
                    $('#list-mhs').append(appendList);
                }
                    // buatan apri
                    $('#list-mhs').listview('refresh');
            },
            complete: function() {
                $.mobile.loading("hide");
            }
        });
    },

    initShowDetailSwa: function(penyewaan) {
        $.ajax({
            url: "https://apri.inseed.web.id/penyewaan.php",
            type: "post",
            data: {
                id_ibu: '1',
            },
            beforeSend: function() {
                $.mobile.loading('show', {
                    text: "Mohon ditunggu sedang mengambil data",
                    textVisible: true
                });
            },
            success: function(dataPenyewaan) {
                console.log(dataPenyewaan);
                var appendDetail = "";
                $('#table-detailSwa thead').remove();
                $('#table-detailSwa tbody').remove();
                var head = '<thead><tr><th data-priority="1">Nama Anak</th>';
                head += '<th data-priority="2">Jumlah Uang</th>';
                head += '<th data-priority="3">Tanggal Masuk</th>';
                head += '<th data-priority="4">Tanggal Keluar</th>';
                head += '<th data-priority="5">Nomor Kamar</th>';
                head += '<th data-priority="6">Harga Kamar</th></tr></thead>';
                $('#table-detailSwa').append(head);

                // untuk saat ini kaya gini dulu
                for (var i = 0; i < dataPenyewaan.length; i++) {
                    if (dataPenyewaan[i].id_penyewa == penyewaan) {
                        appendDetail +=
                            '<tbody><tr><td><b class="ui-table-cell-label">Nama Anak</b>' + dataPenyewaan[i].id_anak + '</td><td><b class="ui-table-cell-label">Jumlah Uang</b>' + dataPenyewaan[i].jumlah_uang +
                            '</td><td><b class="ui-table-cell-label">Tanggal Masuk</b>' + dataPenyewaan[i].tanggal_masuk +
                            '</td><td><b class="ui-table-cell-label">Tanggal Keluar</b>' + dataPenyewaan[i].tanggal_keluar + '</td><td><b class="ui-table-cell-label">Nomor Kamar</b>' + dataPenyewaan[i].id_kamar +
                            '</td><td><b class="ui-table-cell-label">Harga Kamar</b>' + dataPenyewaan[i].harga_kamar + '</td></tr></tbody>';
                        $('#table-detailSwa').append(appendDetail);
                    }
                }
            },
            complete: function() {
                $.mobile.loading("hide");
            }
        });
    }
};


// validasi dan inputan disini
$(function() {
    $.validator.setDefaults({
        errorClass: 'help-block',
        highlight: function(element) {
            $(element)
                .closest('.form-group')
                .addClass('has-error');
        },
        unhighlight: function(element) {
            $(element)
                .closest('.form-group')
                .removeClass('has-error');
        }
    });

    $.validator.addMethod('cek_harga', function(value, element, param) {
        return this.optional(element) || value <= $(param).val();
    }, 'Masa harga kamar lebih kecil dari harga bayar');
    $.validator.addMethod('cek_bayar', function(value, element, param) {
        return this.optional(element) || value >= $(param).val();
    }, 'Masa harga bayar lebih besar dari harga kamar');


    $("#form_sewa").validate({
        rules: {
            nama_anak: {
                required: true
            },
            jumlah_uang: {
                required: true,
                cek_harga: '#harga_kamar',
                min: 0
            },
            tanggal_masuk: {
                required: true
            },
            tanggal_keluar: {
                required: true
            },
            no_kamar: {
                required: true,
                min: 0
            },
            harga_kamar: {
                required: true,
                cek_bayar: '#jumlah_uang',
                min: 0
            }
        },
        messages: {
            nama_anak: {
                required: 'Masukkan nama anak'
            },
            jumlah_uang: {
                required: 'Input kosong',
                cek_harga: 'Masa harga kamar lebih kecil dari harga bayar',
                min: 'Serius mana bisa minus'
            },
            harga_kamar: {
                required: 'Tolong di isi mas',
                cek_bayar: 'Masa harga bayar lebih besar dari harga kamar',
                min: 'Serius mas -__-'
            },
            tanggal_masuk: {
                required: 'Isi mas'
            },
            tanggal_keluar: {
                required: 'Yang ini juga'
            },
            no_kamar: {
                required: 'Ini juga isi mas',
                min: 'Mulai gak jelas'
            }
        },
        submitHandler: function(form) {
            alert("Data berhasil ditambahkan!");
            $.ajax({
                url: "http://localhost/apri2/crudpenyewaan.php",
                type: "POST",
                data: new FormData($(form).serialize()),
                cache: false,
                processData: false,
                success: function(data) {
                }
            });
            return false;
        }
    });

});