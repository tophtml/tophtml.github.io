//OVERLAY
let overlay = document.querySelector('.overlay');
let overlayBtn = document.querySelector('.modal__btn');


function showModal() {
	overlay.classList.remove('modal-overlay-out');
	overlay.style.display = 'block';
	if (overlay) {
		overlay.classList.add('modal-overlay-in');
	}
}

// OVERLAY CLOSE
overlay.onclick = function() {
	overlay.classList.remove('modal-overlay-in');
	if (overlay) {
		overlay.classList.add('modal-overlay-out');
	}
}

window.addEventListener('keydown', function (event) {
	overlay.classList.remove('modal-overlay-in');
  if (event.key === 'Escape') {
    overlay.classList.add('modal-overlay-out');
  }
})