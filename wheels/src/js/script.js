let overlay = document.querySelector('.overlay');
let modal = document.querySelector('.modal');

function modalRules() {
	let openModal = document.querySelector('.contact-links__link');
	if(openModal) {
		overlay.style.display = 'block';
		modal.style.display = 'block';
		openModalMap.style.display = 'none';
	}
}

function modalMap() {
	let openModalMap = document.querySelector('.modal-map');
	if(closeModal) {
		overlay.style.display = 'block';
		modal.style.display = 'none';
		openModalMap.style.display = 'block';
	}
}

function closeModal() { 
	let closeModal = document.querySelector('.modal__btn');
	if(closeModal) {
		overlay.style.display = 'none';
	}
}
	
window.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    overlay.style.display = 'none';
  }
})

function showBigImg(choice) {
	let bikeImgFirst = document.querySelector('.bikes-modal-first').style;
	let openModalProduct = document.querySelector('.modal-product').style;
	overlay.style.display = 'block';
	// openModalProduct.style.display = 'block';

	if(choice == 1) {
		bikeImgFirst.display = 'block';
	}
}