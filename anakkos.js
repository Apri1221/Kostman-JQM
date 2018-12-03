var Application = {
    initApplication : function(){
        $(window).load('pageinit', '#page-anakkos', function(){
            Application.initShowMhs();  
        })
        $(document).on('click', '#detail-anakkos', function(){
            var idAnak = $(this).data('nimmhs');
            Application.initShowDetailMhs(idAnak);
        })
    },

    initShowMhs : function(){
        $.ajax({
            url: 'https://apri.inseed.web.id/anakkos.php',
            type: 'post',
            data: {
                id_ibu:localStorage.getItem('id_ibu')
            },
            beforeSend : function(){
                $.mobile.loading('show',{
                    text: 'Please wait...',
                    textVisible: true
                });
            },
            success : function(dataObject){
                console.log(dataObject);
                for(var i=0; i<dataObject.length; i++){
                var appendList = '<li><a href="#page-detailanakkos?id='+dataObject[i].id_anak
                +'" target="_self" id="detail-anakkos" data-nimmhs="' + dataObject[i].id_anak + '"><h2>' 
                + dataObject[i].id_anak + '</h2><p>' + dataObject[i].nama + '</p><p><b>' 
                + dataObject[i].no_dataDiri + '</b></p></a></li>'
                $('#list-anakkos').append(appendList);
                }
                $('#list-anakkos').listview('refresh');
            },
            complete : function(){
                $.mobile.loading('hide');
            }

        });
    },

    initShowDetailMhs : function(idAnak){
        $.ajax({
            url: 'https://apri.inseed.web.id/anakkos.php',
            type: 'post',
            data: {
                id_ibu: localStorage.getItem('id_ibu')
            },
            beforeSend : function(){
                $.mobile.loading('show',{
                    text: 'Please wait...',
                    textVisible: true
                });
            },
            success : function(dataObject){
                console.log(dataObject);
                for(var i=0; i<dataObject.length; i++){
                    if (dataObject[i].id_anak == idAnak){
                        $('#p-id_anak,#p-id_ibu,#p-nama,#p-no_dataDiri,#p-alamat_asal,#p-no_hp').empty();
                        $('#p-id_anak').append('<b>ID Anak: </b>'+dataObject[i].id_anak);
                        $('#p-id_ibu').append('<b>ID Ibu: </b>'+dataObject[i].id_ibu);
                        $('#p-nama').append('<b>Nama: </b>'+dataObject[i].nama);
                        $('#p-no_dataDiri').append('<b>No Data Diri: </b>'+dataObject[i].no_dataDiri);
                        $('#p-alamat_asal').append('<b>Alamat Asal: </b>'+dataObject[i].alamat_asal);
                        $('#p-no_hp').append('<b>No Hp: </b>'+dataObject[i].no_hp);
                    }    
                }
            },
            complete : function(){
                $.mobile.loading('hide');
            }
        });
    }
}