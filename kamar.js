var Application = {
	initApplication : function() {
		$(window).load('pageinit', '#page-one', function(){
			Application.initShowMhs();
		})
		$(document).on('click', '#detail-kmr', function(){
			var no_kmr = $(this).data('nmrkmr');
			Application.initShowDetailMhs(no_kmr);
		})
	},

	initShowMhs : function(){
		$.ajax({
			url : 'http://localhost/apri2/php/kamar.php',
			type : 'post',
			data: {
                id_ibu: localStorage.getItem('id_ibu'),
            },
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
					dataObject[i].id_kamar+'" target="_self" id="detail-kmr" data-nmrkmr="'+
					dataObject[i].id_kamar+'"><h2>Kamar No. '+dataObject[i].id_kamar+'</h2><p>'+dataObject[i].status+
					'</p></a></li>';
					$('#list-kmr').append(appendList);
				}
				$('#list-kmr').listview('refresh');
			},
			complete : function(){
				$.mobile.loading('hide');
			}
		});		
	},

	initShowDetailMhs : function(no_kmr){
		$.ajax({
			url : 'http://localhost/apri2/php/kamar.php',
			type : 'post',
			data: {
                id_kamar: no_kmr,
                id_ibu: localStorage.getItem('id_ibu'),
            },
			beforeSend : function() {
				$.mobile.loading('show', {
					text : 'Please wait while retrieving data...',
					textVisible : true
				});
			},
			success : function(dataObject){
				for (var i = 0; i < dataObject.length; i++) {
					var kosong = '--';
					if (dataObject[i].penghuni !== null){
						kosong = dataObject[i].penghuni;
					}
					if (dataObject[i].id_kamar == no_kmr) {
						$('#p-nokmr,#p-penghuni,#p-pemilik,#p-status,#p-ukuran,#p-km,#p-meja,#p-kursi,#p-lemari,#p-tv,#p-ac').empty();
						$('#p-nokmr').append('<b>No. Kamar: </b>'+dataObject[i].id_kamar);
						$('#p-penghuni').append('<b>Nama Penghuni: </b>'+kosong);
						$('#p-pemilik').append('<b>Nama Pemilik: </b>'+dataObject[i].pemilik);
						$('#p-status').append('<b>Status: </b>'+dataObject[i].status);
						$('#p-ukuran').append('<b>Alamat: </b>'+dataObject[i].ukuran_kamar);
						$('#p-km').append('<b>Kamar Mandi: </b>'+dataObject[i].km_luar_dalam);
						$('#p-meja').append('<b>Meja: </b>'+dataObject[i].meja);
						$('#p-kursi').append('<b>Kursi: </b>'+dataObject[i].kursi);
						$('#p-lemari').append('<b>Lemari: </b>'+dataObject[i].lemari);
						$('#p-tv').append('<b>TV: </b>'+dataObject[i].tv);
						$('#p-ac').append('<b>AC: </b>'+dataObject[i].ac);
					}	
				}
			},
			complete : function(){
				$.mobile.loading('hide');
			}
		});
	}	
};