var Application = {
    initApplication: function() {
        $(window).load('pageinit', '#page-fasilitas', function() {
            Application.initShowSwa();
        })
        $(document).on('click', '#detail-fasilitas', function() {
            var fasilitas = $(this).data('fasilitas');
            Application.initShowDetailSwa(fasilitas);
        })
    },

    initShowSwa: function() {
        $.ajax({
            url: 'https://apri.inseed.web.id/fasilitas.php',
            type: 'post',
            beforeSend: function() {
                $.mobile.loading('show', {
                    text: 'Mohon ditunggu sedang mengambil data',
                    textVisible: true
                });
            },
            success: function(datafasilitas) {
                console.log(datafasilitas)
                for(var i=0; i<datafasilitas.length; i++){
                    var appendList = '<li> <a href="#page-detail_fasilitas?id='+datafasilitas[i].id_fasilitas
                    +'" target="_self" id="detail-fasilitas" data-fasilitas="' + datafasilitas[i].id_fasilitas + '"><h2>' 
                    + datafasilitas[i].id_kamar + '</h2><p>' + datafasilitas[i].ukuran_kamar + '</p><p><b>' 
                    + datafasilitas[i].km_luar_dalam + '</b></p></a></li>'
                    $('#list-mhs').append(appendList);
                    }
                    $('#list-mhs').listview('refresh');
            },
            complete: function() {
                $.mobile.loading("hide");
            }
        });
    },

    initShowDetailSwa: function(fasilitas) {
        $.ajax({
            url: "https://apri.inseed.web.id/fasilitas.php",
            type: "post",
            beforeSend: function() {
                $.mobile.loading('show', {
                    text: "Mohon ditunggu sedang mengambil data",
                    textVisible: true
                });
            },
            success: function(datafasilitas) {
                console.log(datafasilitas);
                for(var i=0; i<datafasilitas.length; i++){
                    if(datafasilitas[i].id_fasilitas==fasilitas){
                $('#p-id_kamar,#p-ukuran_kamar,#p-km_luar_dalam,#p-meja,#p-kursi,#p-lemari,#p-tv,#p-ac').empty();
                $('#p-id_kamar').append('<b>ID Kamar: </b>'+datafasilitas[i].id_kamar);
                $('#p-ukuran_kamar').append('<b>Ukuran Kamar: </b>'+datafasilitas[i].ukuran_kamar);
                $('#p-km_luar_dalam').append('<b>Kamar Mandi Luar/Dalam: </b>'+datafasilitas[i].km_luar_dalam);
                $('#p-meja').append('<b>Meja: </b>'+datafasilitas[i].meja);
                $('#p-kursi').append('<b>Kursi: </b>'+datafasilitas[i].kursi);
                $('#p-lemari').append('<b>Lemari: </b>'+datafasilitas[i].lemari);
                $('#p-tv').append('<b>TV: </b>'+datafasilitas[i].tv);
                $('#p-ac').append('<b>AC: </b>'+datafasilitas[i].ac);
                }
            }
            },
            complete: function() {
                $.mobile.loading("hide");
            }
        });
    }
};

$("#submit").click( function() {
    $.post( $("#form_tambah_fasilitas").attr("action"),
            $("#form_tambah_fasilitas :input").serializeArray(),
            function(info){ $("#result").html(info);
      });
   clearInput();
   });
    
   $("#form_tambah_fasilitas").submit( function() {
     return false;
   });
   function clearInput() {
       $("#form_tambah_fasilitas :input").each( function() {
          $(this).val('');
       });
   }


