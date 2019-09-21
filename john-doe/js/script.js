let modalText = document.querySelector('.overlay');

function modalWin() {
	modalText.classList.add('show_overlay');
}
function removeModal() {
	modalText.classList.remove('show_overlay');
}

$('.beginning-slider').slick();