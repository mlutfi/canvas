jQuery(function($){
  	$('document').ready( function() {
	    url = $('.linkPasienLama').parent().attr('href');
		url = url.replace(/^https:\/\//i, 'http://');
        console.log(url);
		$('.linkPasienLama').parent().attr('href',url);

		url2 = $('.linkPasienBaru').parent().attr('href');
		url2 = url2.replace(/^https:\/\//i, 'http://');
        console.log(url2);
		$('.linkPasienBaru').parent().attr('href',url2);
	});
});