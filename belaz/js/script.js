function overlay() {
	var showOverlay = document.getElementById('js-overlay');
	showOverlay.classList.toggle('show-overlay');
}

$('.hamburger-btn').on('click', function(e) { 
	e.preventDefault;
	$(this).toggleClass('menu-btn_active');
}); 