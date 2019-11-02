// AUTOSLIDER FOR BLOG
autoSlider();
let leftAuto = 0;
function autoSlider() {
	setTimeout(function() {
		leftAuto = leftAuto - 700;
		
		if (leftAuto<-2800) {
			leftAuto = 0;
		}
		document.querySelector('.blog-slider').style.left = leftAuto + 'px';
		autoSlider();
	}, 10000);
}

//OVERLAY 
let overlayForm = document.querySelector('.overlay-form');
overlayForm.onclick = closeOutterOverlay;

//CALLBACK

document.querySelector('.services__btn').onclick = makeCallback;
let overlayCall = document.querySelector('.overlay-callback');

function makeCallback() {
	overlayCall.classList.remove('fadeout-menu');
	if (overlayCall) {
		overlayCall.style.display = 'block';
		overlayCall.classList.add('fadein-menu');
	}
}

//CLOSE OVERLAY

function closeOutterOverlay () {
	overlayForm.classList.remove('fadein-menu');
	if (overlayForm) {
		overlayForm.classList.add('fadeout-menu');		
	}
}

window.addEventListener('keydown', function (event) {
	overlayForm.classList.remove('fadein-menu');
	overlayCall.classList.remove('fadein-menu');
  if (event.key === 'Escape') {
    overlayForm.classList.add('fadeout-menu');
    overlayCall.classList.add('fadeout-menu');
  }
})

//MAIN-MENU
let burger = document.querySelector('.hamburger__btn');
let mainMenu = document.querySelector('.header-nav');
let mainMenuOut = document.querySelector('.banner');

burger.onmouseover = function() {
	mainMenu.classList.remove('fadeout-menu');
	mainMenu.classList.add('fadein-menu');
		if (mainMenu.style.opacity = '1') {
			mainMenuOut.onmouseover = function() {
			mainMenu.classList.add('fadeout-menu');
		}
	}
}
//BANNER-FORM

let designNameInput = document.getElementById('js-design_name');
let designNameHelp = document.getElementById('js-design_name-help');
designNameInput.onblur = showDesignName;

let designTelInput = document.getElementById('js-design_tel');
let designTelHelp = document.getElementById('js-design_tel-help');
designTelInput.onblur = showDesignTel;

let designEmailInput = document.getElementById('js-design_email');
let designEmailHelp = document.getElementById('js-design_email-help');
designEmailInput.onblur = showDesignEmail;

function RegEx(regex,input,helpText,helpMessage) {
	if(!regex.test(input)) {
		if (helpText != null) 
			helpText.innerHTML = helpMessage;
			return false;
		}
		else {
			if (helpText !=null) 
			helpText.innerHTML = "";
			return true;
			}
	}

function showDesignName(inputField, helpText) {
	return RegEx(/.+/,designNameInput.value, designNameHelp, "Введите имя");
}
function showDesignEmail(inputField, helpText) {
	return RegEx(/^.+\@.+\.\w{2,3}$/,designEmailInput.value, designEmailHelp, "Введите правильно email");
}
function showDesignTel(inputField, helpText) {
	return RegEx(/^\+\d{1,2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/,designTelInput.value, designTelHelp, "Введите телефон в формате +7(896)876-66-77");
}

function sendFormDesign(form) {
let overlayForm = document.querySelector('.overlay-form');
overlayForm.classList.remove('fadeout-menu');

	if (showDesignName(form['js-design_name'], form['js-design_name-help']) && showDesignEmail(form['js-design_email'], form['js-design_email-help']) && showDesignTel(form['js-design_tel'], form['js-design_tel-help'])) {
		form.submit();
	}
	else {
		overlayForm.style.display = 'block';
		overlayForm.classList.add('fadein-menu');
	}
}

//SLIDER

let left = 0;
document.querySelector('.partners__btn_left').onclick = moveSliderLeft;
document.querySelector('.partners__btn_right').onclick = moveSliderRight;
let partnerArrowRight = document.querySelector('.partners-arr_right');
let partnerArrowLeft = document.querySelector('.partners-arr_left');

function moveSliderLeft() {
	let sliderBox = document.querySelector('.partners-carousel');

	partnerArrowRight.src ='img/icons/left_arrow.svg';
	left = left - 116;
	if (left<-580) {
		left = -580;
	}
	if (left<-464) {
		partnerArrowLeft.src ='img/icons/left_arrow_inactive.svg';
	}
	sliderBox.style.left = left + 'px';

}
function moveSliderRight() {
	let sliderBox = document.querySelector('.partners-carousel');
	
	partnerArrowLeft.src ='img/icons/left_arrow.svg';
	left = left + 116;
	if (left>0) {
		left = 0;
	}
	sliderBox.style.left = left + 'px';
	if (left == 0) {
		partnerArrowRight.src ='img/icons/left_arrow_inactive.svg';
	}
}

