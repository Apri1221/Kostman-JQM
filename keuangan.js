var Application = {
 initApplication : function() {
  $(window).load('pageinit', '#page-one', function(){
   Application.initShowMhs();
  })
  $(document).on('click', '#detail-keuangan', function(){
   var keuangan = $(this).data('pemilik');
   Application.initShowDetailMhs(keuangan);
  })
 },

 initShowMhs : function(){
  $.ajax({
   url : 'https://apri.inseed.web.id/keuangan.php',
   type : 'get',
   beforeSend : function() {
    $.mobile.loading('show', {
     text : 'Please wait while retrieving data...',
     textVisible : true
    });
   },
   success : function(dataObject){
    console.log(dataObject);
    for (var i = 0; i < dataObject.length; i++) {
     var appendList = '<li><a href="#page-two?id='+
     dataObject[i].pemilik+'" target="_self" id="detail-keuangan" data-pemilik="'+
     dataObject[i].pemilik+'"><h2>Kamar No. '+dataObject[i].id_kamar+'</h2><p>'+dataObject[i].tanggal_transaksi+
     '</p></a></li>';
     $('#list-keu').append(appendList);
    }
    $('#list-keu').listview('refresh');
   },
   complete : function(){
    $.mobile.loading('hide');
   }
  });  
 },

 initShowDetailMhs : function(keuangan){
  $.ajax({
   url : 'https://apri.inseed.web.id/keuangan.php',
   type : 'get',
   beforeSend : function() {
    $.mobile.loading('show', {
     text : 'Please wait while retrieving data...',
     textVisible : true
    });
   },
   success : function(dataObject){
    for (var i = 0; i < dataObject.length; i++) {
     if (dataObject[i].pemilik == keuangan) {
      $('#p-pemilik,#p-id_kamar,#p-id,#p-tanggal_transaksi,#p-jumlah_pemasukan,#p-jumlah_pengeluaran').empty();
      $('#p-pemilik').append('<b> Pemilik: </b>'+dataObject[i].pemilik);
      $('#p-id_kamar').append('<b>Nomor kamar: </b>'+dataObject[i].id_kamar);
      $('#p-tanggal_transaksi').append('<b>Tanggal Transaksi: </b>'+dataObject[i].tanggal_transaksi);
      $('#p-jumlah_pemasukan').append('<b>Pemasukan: </b>'+dataObject[i].jumlah_pemasukan);
      $('#p-jumlah_pengeluaran').append('<b>Pengeluaran: </b>'+dataObject[i].jumlah_pengeluaran);
      
     } 
    }
   },
   complete : function(){
    $.mobile.loading('hide');
   }
  });
 } 
};