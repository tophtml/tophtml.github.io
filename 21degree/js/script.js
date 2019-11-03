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

//CALCULATION  OF PRICE

let squareCalcFirst = document.querySelector('.square-calc__item_first');
let squareCalcSecond = document.querySelector('.square-calc__item_second');
let squareCalcThird = document.querySelector('.square-calc__item_third');
let squareCalcForth = document.querySelector('.square-calc__item_forth');

squareCalcFirst.onclick = chooseValueFirst;
squareCalcSecond.onclick = chooseValueSecond;
squareCalcThird.onclick = chooseValueThird;
squareCalcForth.onclick = chooseValueForth;

let squareBuild = document.querySelector('.price-calc__square');
let squareOne = document.querySelector('.price-calc__square_one');
let squareTotal = document.querySelector('.price-calc__total');


function chooseValueFirst() {
	squareCalcFirst.classList.add('square-calc__item_selected-left');
	squareCalcSecond.classList.remove('square-calc__item_selected');
	squareCalcThird.classList.remove('square-calc__item_selected');
	squareCalcForth.classList.remove('square-calc__item_selected-right');
	squareBuild.innerHTML = '100м<sup class="calc_degree">2</sup>';

	if (squareOne.textContent == '3 720 тг.' && squareBuild.textContent == '100м2') {
		squareTotal.innerHTML = '372 000 тг.';
	}
	if (squareOne.textContent == '4 850 тг.' && squareBuild.textContent =='100м2') {
		squareTotal.innerHTML = '485 000 тг.';
	}
	if (squareOne.textContent == '5 999 тг.' && squareBuild.textContent =='100м2') {
		squareTotal.innerHTML = '599 990 тг.';
	}
}
function chooseValueSecond() {
	squareCalcFirst.classList.remove('square-calc__item_selected-left');
	squareCalcSecond.classList.add('square-calc__item_selected');
	squareCalcThird.classList.remove('square-calc__item_selected');
	squareCalcForth.classList.remove('square-calc__item_selected-right');
	squareBuild.innerHTML = '10 000м<sup class="calc_degree">2</sup>';

	if (squareOne.textContent == '3 720 тг.' && squareBuild.textContent == '10 000м2') {
	squareTotal.innerHTML = '3 720 000 тг.';
	}
	if (squareOne.textContent == '4 850 тг.' && squareBuild.textContent =='10 000м2') {
	squareTotal.innerHTML = '48 500 000 тг.';
	}
	if (squareOne.textContent == '5 999 тг.' && squareBuild.textContent =='10 000м2') {
		squareTotal.innerHTML = '59 999  000 тг.';
	}
}
function chooseValueThird() {
	squareCalcFirst.classList.remove('square-calc__item_selected-left');
	squareCalcSecond.classList.remove('square-calc__item_selected');
	squareCalcThird.classList.add('square-calc__item_selected');
	squareCalcForth.classList.remove('square-calc__item_selected-right');
	squareBuild.innerHTML = '250 000м<sup class="calc_degree">2</sup>';

	if (squareOne.textContent == '3 720 тг.' && squareBuild.textContent == '250 000м2') {
		squareTotal.innerHTML = '930 000 000 тг.';
	}
	if (squareOne.textContent == '4 850 тг.' && squareBuild.textContent =='250 000м2') {
		squareTotal.innerHTML = '1 212 500 000 тг.';
	}
	if (squareOne.textContent == '5 999 тг.' && squareBuild.textContent =='250 000м2') {
		squareTotal.innerHTML = '1 499 750 000 тг.';
	}
}
function chooseValueForth() {
	squareCalcFirst.classList.remove('square-calc__item_selected-left');
	squareCalcSecond.classList.remove('square-calc__item_selected');
	squareCalcThird.classList.remove('square-calc__item_selected');
	squareCalcForth.classList.add('square-calc__item_selected-right');
	squareBuild.innerHTML = '500 000м<sup class="calc_degree">2</sup>';

	if (squareOne.textContent == '3 720 тг.' && squareBuild.textContent == '500 000м2') {
		squareTotal.innerHTML = '1 860 000 000 тг.';
	}
	if (squareOne.textContent == '4 850 тг.' && squareBuild.textContent =='500 000м2') {
		squareTotal.innerHTML = '2 425 000 000 тг.';
	}
	if (squareOne.textContent == '5 999 тг.' && squareBuild.textContent =='500 000м2') {
		squareTotal.innerHTML = '2 999 500 000 тг.';
	}
}

let packageFirst = document.querySelector('.package__btn_first');
let packageSecond = document.querySelector('.package__btn_second');
let packageThird = document.querySelector('.package__btn_third');

packageFirst.onclick = choosePackageFirst;
packageSecond.onclick = choosePackageSecond;
packageThird.onclick = choosePackageThird;

function choosePackageFirst() {
	packageFirst.classList.add('package__btn_selected');
	packageSecond.classList.remove('package__btn_selected');
	packageThird.classList.remove('package__btn_selected');
	squareOne.innerHTML = '3 720 тг.';

	if (squareOne.textContent == '3 720 тг.' && squareBuild.textContent == '100м2') {
		squareTotal.innerHTML = '372 000 тг.';
	}
	if (squareOne.textContent == '3 720 тг.' && squareBuild.textContent == '10 000м2') {
	squareTotal.innerHTML = '3 720 000 тг.';
	}
	if (squareOne.textContent == '3 720 тг.' && squareBuild.textContent == '250 000м2') {
		squareTotal.innerHTML = '930 000 000 тг.';
	}
	if (squareOne.textContent == '3 720 тг.' && squareBuild.textContent == '500 000м2') {
		squareTotal.innerHTML = '1 860 000 000 тг.';
	}
}

function choosePackageSecond() {
	packageFirst.classList.remove('package__btn_selected');
	packageSecond.classList.add('package__btn_selected');
	packageThird.classList.remove('package__btn_selected');
	squareOne.innerHTML = '4 850 тг.';

	if (squareOne.textContent == '4 850 тг.' && squareBuild.textContent =='100м2') {
		squareTotal.innerHTML = '485 000 тг.';
	}
	if (squareOne.textContent == '4 850 тг.' && squareBuild.textContent =='10 000м2') {
	squareTotal.innerHTML = '48 500 000 тг.';
	}
	if (squareOne.textContent == '4 850 тг.' && squareBuild.textContent =='250 000м2') {
		squareTotal.innerHTML = '1 212 500 000 тг.';
	}
	if (squareOne.textContent == '4 850 тг.' && squareBuild.textContent =='500 000м2') {
		squareTotal.innerHTML = '2 425 000 000 тг.';
	}
}

function choosePackageThird() {
	packageFirst.classList.remove('package__btn_selected');
	packageSecond.classList.remove('package__btn_selected');
	packageThird.classList.add('package__btn_selected');
	squareOne.innerHTML = '5 999 тг.';

	if (squareOne.textContent == '5 999 тг.' && squareBuild.textContent =='100м2') {
		squareTotal.innerHTML = '599 990 тг.';
	}
	if (squareOne.textContent == '5 999 тг.' && squareBuild.textContent =='10 000м2') {
		squareTotal.innerHTML = '59 999  000 тг.';
	}
	if (squareOne.textContent == '5 999 тг.' && squareBuild.textContent =='250 000м2') {
		squareTotal.innerHTML = '1 499 750 000 тг.';
	}
	if (squareOne.textContent == '5 999 тг.' && squareBuild.textContent =='500 000м2') {
		squareTotal.innerHTML = '2 999 500 000 тг.';
	}
}

//PORTFOLIO IMG

let portfolioFirst = document.querySelector('.portfolio__item_first');
let portfolioSecond = document.querySelector('.portfolio__item_second');
let portfolioThird = document.querySelector('.portfolio__item_third');
let portfolioForth = document.querySelector('.portfolio__item_forth');
let portfolioFifth = document.querySelector('.portfolio__item_fifth');
let portfolioSixth = document.querySelector('.portfolio__item_sixth');

// let portfolioImg = ["document.querySelector('.portfolio__img_first')",
// "document.querySelector('.portfolio__img_second')",
// "document.querySelector('.portfolio__img_third')",
// "document.querySelector('.portfolio__img_forth')",
// "document.querySelector('.portfolio__img_fifth')",
// "document.querySelector('.portfolio__img_sixth')"
// ];

let portfolioImgFirst = document.querySelector('.portfolio__img_first');
let portfolioImgSecond = document.querySelector('.portfolio__img_second');
let portfolioImgThird = document.querySelector('.portfolio__img_third');
let portfolioImgForth = document.querySelector('.portfolio__img_forth');
let portfolioImgFifth = document.querySelector('.portfolio__img_fifth');
let portfolioImgSixth = document.querySelector('.portfolio__img_sixth');

portfolioFirst.onclick = showFirstTab;
portfolioSecond.onclick = showSecondTab;
portfolioThird.onclick = showThirdTab;
portfolioForth.onclick = showForthTab;

function showFirstTab() {
	portfolioFirst.classList.add('portfolio__item_first-selected');
	portfolioSecond.classList.remove('portfolio__item_selected');
	portfolioThird.classList.remove('portfolio__item_selected');
	portfolioForth.classList.remove('portfolio__item_forth-selected');

	portfolioImgFirst.src = "img/interior.jpg";
	portfolioImgSecond.src = "img/interior.jpg";
	portfolioImgThird.src = "img/interior.jpg";
	portfolioImgForth.src = "img/interior.jpg";
	portfolioImgFifth.src = "img/interior.jpg";
	portfolioImgSixth.src = "img/interior.jpg";

	portfolioImgFirst.classList.add('portfolio__img_anim');
	portfolioImgSecond.classList.add('portfolio__img_anim');
	portfolioImgThird.classList.add('portfolio__img_anim');
	portfolioImgForth.classList.add('portfolio__img_anim');
	portfolioImgFifth.classList.add('portfolio__img_anim');
	portfolioImgSixth.classList.add('portfolio__img_anim');

	setTimeout(function() { portfolioImgFirst.classList.remove('portfolio__img_anim');
	portfolioImgSecond.classList.remove('portfolio__img_anim');
	portfolioImgThird.classList.remove('portfolio__img_anim');
	portfolioImgForth.classList.remove('portfolio__img_anim');
	portfolioImgFifth.classList.remove('portfolio__img_anim');
	portfolioImgSixth.classList.remove('portfolio__img_anim');}, 1000);
}
function showSecondTab() {
	portfolioFirst.classList.remove('portfolio__item_first-selected');
	portfolioSecond.classList.add('portfolio__item_selected');
	portfolioThird.classList.remove('portfolio__item_selected');
	portfolioForth.classList.remove('portfolio__item_forth-selected');

	portfolioImgFirst.src = "img/exterior.jpg";
	portfolioImgSecond.src = "img/exterior.jpg";
	portfolioImgThird.src = "img/exterior.jpg";
	portfolioImgForth.src = "img/exterior.jpg";
	portfolioImgFifth.src = "img/exterior.jpg";
	portfolioImgSixth.src = "img/exterior.jpg";

	portfolioImgFirst.classList.add('portfolio__img_anim');
	portfolioImgSecond.classList.add('portfolio__img_anim');
	portfolioImgThird.classList.add('portfolio__img_anim');
	portfolioImgForth.classList.add('portfolio__img_anim');
	portfolioImgFifth.classList.add('portfolio__img_anim');
	portfolioImgSixth.classList.add('portfolio__img_anim');

	setTimeout(function() { portfolioImgFirst.classList.remove('portfolio__img_anim');
	portfolioImgSecond.classList.remove('portfolio__img_anim');
	portfolioImgThird.classList.remove('portfolio__img_anim');
	portfolioImgForth.classList.remove('portfolio__img_anim');
	portfolioImgFifth.classList.remove('portfolio__img_anim');
	portfolioImgSixth.classList.remove('portfolio__img_anim');}, 1000);
}

function showThirdTab() {
	portfolioFirst.classList.remove('portfolio__item_first-selected');
	portfolioSecond.classList.remove('portfolio__item_selected');
	portfolioThird.classList.add('portfolio__item_selected');
	portfolioForth.classList.remove('portfolio__item_forth-selected');

	portfolioImgFirst.src = "img/blog-first.jpg";
	portfolioImgSecond.src = "img/blog-first.jpg";
	portfolioImgThird.src = "img/blog-first.jpg";
	portfolioImgForth.src = "img/blog-first.jpg";
	portfolioImgFifth.src = "img/blog-first.jpg";
	portfolioImgSixth.src = "img/blog-first.jpg";

	portfolioImgFirst.classList.add('portfolio__img_anim');
	portfolioImgSecond.classList.add('portfolio__img_anim');
	portfolioImgThird.classList.add('portfolio__img_anim');
	portfolioImgForth.classList.add('portfolio__img_anim');
	portfolioImgFifth.classList.add('portfolio__img_anim');
	portfolioImgSixth.classList.add('portfolio__img_anim');

	setTimeout(function() { portfolioImgFirst.classList.remove('portfolio__img_anim');
	portfolioImgSecond.classList.remove('portfolio__img_anim');
	portfolioImgThird.classList.remove('portfolio__img_anim');
	portfolioImgForth.classList.remove('portfolio__img_anim');
	portfolioImgFifth.classList.remove('portfolio__img_anim');
	portfolioImgSixth.classList.remove('portfolio__img_anim');}, 1000);
}
function showForthTab() {
	portfolioFirst.classList.remove('portfolio__item_first-selected');
	portfolioSecond.classList.remove('portfolio__item_selected');
	portfolioThird.classList.remove('portfolio__item_selected');
	portfolioForth.classList.add('portfolio__item_forth-selected');

	portfolioImgFirst.src = "img/blog-second.jpg";
	portfolioImgSecond.src = "img/blog-second.jpg";
	portfolioImgThird.src = "img/blog-second.jpg";
	portfolioImgForth.src = "img/blog-second.jpg";
	portfolioImgFifth.src = "img/blog-second.jpg";
	portfolioImgSixth.src = "img/blog-second.jpg";

	portfolioImgFirst.classList.add('portfolio__img_anim');
	portfolioImgSecond.classList.add('portfolio__img_anim');
	portfolioImgThird.classList.add('portfolio__img_anim');
	portfolioImgForth.classList.add('portfolio__img_anim');
	portfolioImgFifth.classList.add('portfolio__img_anim');
	portfolioImgSixth.classList.add('portfolio__img_anim');

	setTimeout(function() { portfolioImgFirst.classList.remove('portfolio__img_anim');
	portfolioImgSecond.classList.remove('portfolio__img_anim');
	portfolioImgThird.classList.remove('portfolio__img_anim');
	portfolioImgForth.classList.remove('portfolio__img_anim');
	portfolioImgFifth.classList.remove('portfolio__img_anim');
	portfolioImgSixth.classList.remove('portfolio__img_anim');}, 1000);
}

//REGEX 

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

//CALLBACK

let overlayCall = document.querySelector('.overlay-callback');
document.querySelector('.services__btn').onclick = makeCallback;

let callbackName = document.getElementById('js-callback_name');
let callbackHelpName = document.getElementById('js-callback_name-help');
callbackName.onblur = showCallName;

let callbackEmail = document.getElementById('js-callback_email');
let callbackHelpEmail = document.getElementById('js-callback_email-help');
callbackEmail.onblur = showCallEmail;

let callbackTel = document.getElementById('js-callback_tel');
let callbackHelpTel = document.getElementById('js-callback_tel-help');
callbackTel.onblur = showCallTel;

let callbackBtn = document.querySelector('.help-text_btn');
let callbackBtnCancel = document.querySelector('.help-text_btn-cancel');
callbackBtnCancel.onclick = cancelCall;


function makeCallback() {
	overlayCall.classList.remove('fadeout-menu');
	if (overlayCall) {
		overlayCall.style.display = 'block';
		overlayCall.classList.add('fadein-menu');
	}
}

function showCallName(inputField,helpText) {
	return RegEx(/.+/,callbackName.value,callbackHelpName,"Введите имя");
}

function showCallEmail(inputField,helpText) {
	return RegEx(/^.+\@.+\.\w{2,3}$/,callbackEmail.value,callbackHelpEmail,"Введите правильно email");
}

function showCallTel(inputField,helpText) {
	return RegEx(/^\+\d{1,2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/,callbackTel.value,callbackHelpTel,"Введите телефон в формате +7(896)876-66-77");
}

function sendCallback(form) {
	if (showCallName(form['js-callback_name'],form['js-callback_name-help']) && showCallEmail(form['js-callback_email'],form['js-callback_email-help']) && showCallTel(form['js-callback_tel'],form['js-callback_tel-help'])) {
		form.submit();
	}
	else {
		callbackBtn.innerHTML = 'Пожалуйста, заполните все поля формы';
	}
}

function cancelCall() {
	overlayCall.classList.remove('fadein-menu');
	if (overlayCall) {
		overlayCall.classList.add('fadeout-menu');		
	}
}

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

//CONTACTS-FORM

let contactsNameInput = document.getElementById('js-contacts-name');
let contactsNameHelp = document.getElementById('js-contacts-name-help');
contactsNameInput.onblur = showContactsName;

let contactsTelInput = document.getElementById('js-contacts-tel');
let contactsTelHelp = document.getElementById('js-contacts-tel-help');
contactsTelInput.onblur = showContactsTel;

let contactsEmailInput = document.getElementById('js-contacts-email');
let contactsEmailHelp = document.getElementById('js-contacts-email-help');
contactsEmailInput.onblur = showContactsEmail;

function showContactsName(inputField, helpText) {
	return RegEx(/.+/,contactsNameInput.value, contactsNameHelp, "Введите имя");
}
function showContactsEmail(inputField, helpText) {
	return RegEx(/^.+\@.+\.\w{2,3}$/,contactsEmailInput.value, contactsEmailHelp, "Введите правильно email");
}
function showContactsTel(inputField, helpText) {
	return RegEx(/^\+\d{1,2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/,contactsTelInput.value, contactsTelHelp, "Введите телефон в формате +7(896)876-66-77");
}

function sendContactsForm(form) {
let overlayForm = document.querySelector('.overlay-form');
overlayForm.classList.remove('fadeout-menu');

	if (showContactsName(form['js-contacts-name'], form['js-contacts-name-help']) && showContactsEmail(form['js-contacts-email'], form['js-contacts-email-help']) && showContactsTel(form['js-contacts-tel'], form['js-contacts-tel-help'])) {
		form.submit();
	}
	else {
		overlayForm.style.display = 'block';
		overlayForm.classList.add('fadein-menu');
	}
}

//MAP IFRAME 

let overlayMap = document.querySelector('.overlay-map');
let mapIframe = document.querySelector('.contacts-map__img'); 
mapIframe.onclick = showModalMap;
overlayMap.onclick = closeOutterMap;


function showModalMap() {
	overlayMap.classList.remove('fadeout-menu');
	overlayMap.style.display = 'block';
	if (overlayMap) {
		overlayMap.classList.add('fadein-menu');
	}
}

//OVERLAY 

let overlayForm = document.querySelector('.overlay-form');
overlayForm.onclick = closeOutterOverlay;

//CLOSE OVERLAY

function closeOutterOverlay () {
	overlayForm.classList.remove('fadein-menu');

	if (overlayForm) {
		overlayForm.classList.add('fadeout-menu');		
	}
}

function closeOutterMap () {
	overlayMap.classList.remove('fadein-menu');

	if (overlayMap) {
		overlayMap.classList.add('fadeout-menu');		
	}
}

window.addEventListener('keydown', function (event) {
	overlayForm.classList.remove('fadein-menu');
	overlayCall.classList.remove('fadein-menu');
	overlayMap.classList.remove('fadein-menu');
  if (event.key === 'Escape') {
    overlayForm.classList.add('fadeout-menu');
    overlayCall.classList.add('fadeout-menu');
    overlayMap.classList.add('fadeout-menu');
  }
})

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

