let overlay = document.querySelector('.overlay');
let modal = document.querySelector('.modal');

function modalRules() {
	let openModal = document.querySelector('.contact-links__link');
	if(openModal) {
		overlay.style.background = 'rgba(0,0,0,0.4)';
		overlay.style.display = 'block';
		modal.style.display = 'block';
	}
}
function closeModalOutter() {
	let modalMap = document.querySelector('.modal-map');
	let openModal = document.querySelector('.contact-links__link');
	let openModalProduct = document.querySelector('.modal-product');
	let bikeImgFirst = document.querySelector('.bikes-modal-first');

	overlay.style.display = 'none';
	modal.style.display = 'none';
	openModal.style.display = 'none';
	modalMap.style.display = 'none';
	openModalProduct.style.display = 'none';
	
}

function modalMap() {
	if(modalMap) {
		let modalMap = document.querySelector('.modal-map');
		overlay.style.background = 'rgba(0,0,0,0.4)';
		overlay.style.display = 'block';
		modalMap.style.display = 'block';
	}
}
function closeModalMap() {
	let modalMap = document.querySelector('.modal-map');
	overlay.style.display = 'none';
	modalMap.style.display = 'none';
}

function showBigImg(choice) {
	let bikeImgFirst = document.querySelector('.bikes-modal-first');
	let bikeImgSecond = document.querySelector('.bikes-modal-second');
	let bikeImgThird = document.querySelector('.bikes-modal-third');
	let bikeImgForth = document.querySelector('.bikes-modal-forth');
	let bikeImgFifth = document.querySelector('.bikes-modal-fifth');
	let bikeImgSixth = document.querySelector('.bikes-modal-sixth');
	let openModalProduct = document.querySelector('.modal-product');
	overlay.style.background = 'rgba(0,0,0,0.8)';
	overlay.style.display = 'block';
	openModalProduct.style.display = 'block';

	if(choice == 1) {
		bikeImgFirst.style.display = 'block';
		bikeImgSecond.style.display = 'none';
		bikeImgThird.style.display = 'none';
		bikeImgForth.style.display = 'none';
		bikeImgFifth.style.display = 'none';
		bikeImgSixth.style.display = 'none';
	} 
		else if(choice == 2) {
		bikeImgFirst.style.display = 'none';
		bikeImgSecond.style.display = 'block';
		bikeImgThird.style.display = 'none';
		bikeImgForth.style.display = 'none';
		bikeImgFifth.style.display = 'none';
		bikeImgSixth.style.display = 'none';
	}
		else if(choice == 3) {
		bikeImgFirst.style.display = 'none';
		bikeImgSecond.style.display = 'none';
		bikeImgThird.style.display = 'block';
		bikeImgForth.style.display = 'none';
		bikeImgFifth.style.display = 'none';
		bikeImgSixth.style.display = 'none';
	}
		else if(choice == 4) {
		bikeImgFirst.style.display = 'none';
		bikeImgSecond.style.display = 'none';
		bikeImgThird.style.display = 'none';
		bikeImgForth.style.display = 'block';
		bikeImgFifth.style.display = 'none';
		bikeImgSixth.style.display = 'none';
	}
		else if(choice == 5) {
		bikeImgFirst.style.display = 'none';
		bikeImgSecond.style.display = 'none';
		bikeImgThird.style.display = 'none';
		bikeImgForth.style.display = 'none';
		bikeImgFifth.style.display = 'block';
		bikeImgSixth.style.display = 'none';
	}
		else if(choice == 6) {
		bikeImgFirst.style.display = 'none';
		bikeImgSecond.style.display = 'none';
		bikeImgThird.style.display = 'none';
		bikeImgForth.style.display = 'none';
		bikeImgFifth.style.display = 'none';
		bikeImgSixth.style.display = 'block';
	}
}

function closeBigImg() {
	let openModalProduct = document.querySelector('.modal-product');
	overlay.style.display = 'none';
	openModalProduct.style.display = 'none';
}

function closeModal() { 
	let closeModal = document.querySelector('.modal__btn');
	if(closeModal) {
		overlay.style.animation = 'fadeOutOverlay';
		overlay.style.display = 'none';
	}
}
	
window.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
  	let modalMap = document.querySelector('.modal-map');
  	let openModalProduct = document.querySelector('.modal-product');
    overlay.style.display = 'none';
    modalMap.style.display = 'none';
    openModalProduct.style.display = 'none';
  }
})

function openBurger() {
	let burger = document.querySelector('.burger');
	let menu = document.querySelector('.nav-main');
	menu.classList.toggle('animation-menu');
	burger.classList.toggle('open-burger');
}