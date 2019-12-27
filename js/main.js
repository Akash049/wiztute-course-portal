(function($) {
	"use strict"
	
	// Preloader
	$(window).on('load', function() {
		let obj = localStorage.getItem('contacted');

		if(obj === undefined || obj === null) {
			var object = {value: false, timestamp: new Date().getTime()}
			localStorage.setItem("contacted", JSON.stringify(object));
		}
		else {
			var object = JSON.parse(localStorage.getItem("contacted"));
			if(object.value) {
				let dateString = object.timestamp,
				now = new Date().getTime().toString();
				if(now-dateString > 86400000) {
					var object = {value: false, timestamp: new Date().getTime()}
					localStorage.setItem("contacted", JSON.stringify(object));
				}
			}
		}
        	
		$("#preloader").delay(600).fadeOut();
	});

	// Mobile Toggle Btn
	$('.navbar-toggle').on('click',function(){
		$('#header').toggleClass('nav-collapse')
	});
	$("div[data-includeHTML]").each(function () {    
		$(this).load($(this).attr("data-includeHTML"));
	});
	$(".button-for-details").on('click', function(){
		var key = $(this).attr("key");
		var value = $(this).attr("value");
		var object = JSON.parse(localStorage.getItem("contacted")),
        contacted = object.value;
		if(contacted){
			if(key%2===1)
				$(location).attr('href',value)
			else {
				$(this).html(value);
				$(this).removeClass('button-for-detail');
			}
		} else {
			localStorage.setItem('key', key);
			localStorage.setItem('value', value);
			let x = document.getElementById('myModal');
			x.style.display = "block";
		}
	});


})(jQuery);