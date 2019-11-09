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


let overlayPortfolio = document.querySelector('.overlay-portfolio');
overlayPortfolio.onclick = closeOutterPortfolio;
let portfolioImg = document.querySelector('.modal-portfolio__img-overlay');
let portfolioImgName = document.querySelector('.modal-portfolio__name');
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

	portfolioImgFirst.src = "img/portfolio/portfolio-1_first.jpg";
	portfolioImgSecond.src = "img/portfolio/portfolio-1_second.jpg";
	portfolioImgThird.src = "img/portfolio/portfolio-1_third.jpg";
	portfolioImgForth.src = "img/portfolio/portfolio-1_forth.jpg";
	portfolioImgFifth.src = "img/portfolio/portfolio-1_fifth.jpg";
	portfolioImgSixth.src = "img/portfolio/portfolio-1_sixth.jpg";

	portfolioImgFirst.alt = "Библиотека с преобладанием белого цвета";
	portfolioImgSecond.alt = "Прихожая в стиле Hi-Tech";
	portfolioImgThird.alt = "Студия в современном дизайне";
	portfolioImgForth.alt = "Комнаты отдыха в офисе";
	portfolioImgFifth.alt = "Дом в винтажном стиле";
	portfolioImgSixth.alt = "Гостиная с террасой";

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

	portfolioImgFirst.onclick = function() {
	 	overlayPortfolio.classList.remove('fadeout-menu');
		overlayPortfolio.style.display = 'block';
		portfolioImg.src = 'img/portfolio/portfolio-1_first.jpg';
		portfolioImg.alt = "Библиотека с преобладанием белого цвета";
		portfolioImgName.innerHTML = "Библиотека с преобладанием белого цвета";
		if (overlayPortfolio) {
		overlayPortfolio.classList.add('fadein-menu');
		}
	}
	 portfolioImgSecond.onclick = function() {
	 	overlayPortfolio.classList.remove('fadeout-menu');
		overlayPortfolio.style.display = 'block';
		portfolioImg.src = 'img/portfolio/portfolio-1_second.jpg';
		portfolioImg.alt = "Прихожая в стиле Hi-Tech";
		portfolioImgName.innerHTML = "Прихожая в стиле Hi-Tech";
		if (overlayPortfolio) {
		overlayPortfolio.classList.add('fadein-menu');
		}
	}
	portfolioImgThird.onclick = function() {
	 	overlayPortfolio.classList.remove('fadeout-menu');
		overlayPortfolio.style.display = 'block';
		portfolioImg.src = 'img/portfolio/portfolio-1_third.jpg';
		portfolioImg.alt = "Студия в современном дизайне";
		portfolioImgName.innerHTML = "Студия в современном дизайне";
		if (overlayPortfolio) {
		overlayPortfolio.classList.add('fadein-menu');
		}
	}
	portfolioImgForth.onclick = function() {
	 	overlayPortfolio.classList.remove('fadeout-menu');
		overlayPortfolio.style.display = 'block';
		portfolioImg.src = 'img/portfolio/portfolio-1_forth.jpg';
		portfolioImg.alt = "Комнаты отдыха в офисе";
		portfolioImgName.innerHTML = "Комнаты отдыха в офисе";
		if (overlayPortfolio) {
		overlayPortfolio.classList.add('fadein-menu');
		}
	}
	portfolioImgFifth.onclick = function() {
	 	overlayPortfolio.classList.remove('fadeout-menu');
		overlayPortfolio.style.display = 'block';
		portfolioImg.src = 'img/portfolio/portfolio-1_fifth.jpg';
		portfolioImg.alt = "Дом в винтажном стиле";
		portfolioImgName.innerHTML = "Дом в винтажном стиле";
		if (overlayPortfolio) {
		overlayPortfolio.classList.add('fadein-menu');
		}
	}
	portfolioImgSixth.onclick = function() {
	 	overlayPortfolio.classList.remove('fadeout-menu');
		overlayPortfolio.style.display = 'block';
		portfolioImg.src = 'img/portfolio/portfolio-1_sixth.jpg';
		portfolioImg.alt = "Гостиная с террасой";
		portfolioImgName.innerHTML = "Гостиная с террасой";
		if (overlayPortfolio) {
		overlayPortfolio.classList.add('fadein-menu');
		}
	}
}

function showSecondTab() {
	portfolioFirst.classList.remove('portfolio__item_first-selected');
	portfolioSecond.classList.add('portfolio__item_selected');
	portfolioThird.classList.remove('portfolio__item_selected');
	portfolioForth.classList.remove('portfolio__item_forth-selected');

	portfolioImgFirst.src = "img/portfolio/portfolio-2_first.jpg";
	portfolioImgSecond.src = "img/portfolio/portfolio-2_second.jpg";
	portfolioImgThird.src = "img/portfolio/portfolio-2_third.jpg";
	portfolioImgForth.src = "img/portfolio/portfolio-2_forth.jpg";
	portfolioImgFifth.src = "img/portfolio/portfolio-2_fifth.jpg";
	portfolioImgSixth.src = "img/portfolio/portfolio-2_sixth.jpg";

	portfolioImgFirst.alt = "Многоэтажный дом";
	portfolioImgSecond.alt = "Фасад элитного дома";
	portfolioImgThird.alt = "Современный элитный массив";
	portfolioImgForth.alt = "Невысокий дом загорода";
	portfolioImgFifth.alt = "Современный многоэтажный дом в Садовом кольце";
	portfolioImgSixth.alt = "Дом в винтажном стиле";

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
		
	portfolioImgFirst.onclick = function() {
	 	overlayPortfolio.classList.remove('fadeout-menu');
		overlayPortfolio.style.display = 'block';
		portfolioImg.src = 'img/portfolio/portfolio-2_first.jpg';
		portfolioImg.alt = "Многоэтажный дом";
		portfolioImgName.innerHTML = "Многоэтажный дом";
		if (overlayPortfolio) {
		overlayPortfolio.classList.add('fadein-menu');
		}
	}
	 portfolioImgSecond.onclick = function() {
	 	overlayPortfolio.classList.remove('fadeout-menu');
		overlayPortfolio.style.display = 'block';
		portfolioImg.src = 'img/portfolio/portfolio-2_second.jpg';
		portfolioImg.alt = "Фасад элитного дома";
		portfolioImgName.innerHTML = "Фасад элитного дома";
		if (overlayPortfolio) {
		overlayPortfolio.classList.add('fadein-menu');
		}
	}
	portfolioImgThird.onclick = function() {
	 	overlayPortfolio.classList.remove('fadeout-menu');
		overlayPortfolio.style.display = 'block';
		portfolioImg.src = 'img/portfolio/portfolio-2_third.jpg';
		portfolioImg.alt = "Современный элитный массив";
		portfolioImgName.innerHTML = "Современный элитный массив";
		if (overlayPortfolio) {
		overlayPortfolio.classList.add('fadein-menu');
		}
	}
	portfolioImgForth.onclick = function() {
	 	overlayPortfolio.classList.remove('fadeout-menu');
		overlayPortfolio.style.display = 'block';
		portfolioImg.src = 'img/portfolio/portfolio-2_forth.jpg';
		portfolioImg.alt = "Невысокий дом загорода";
		portfolioImgName.innerHTML = "Невысокий дом загорода";
		if (overlayPortfolio) {
		overlayPortfolio.classList.add('fadein-menu');
		}
	}
	portfolioImgFifth.onclick = function() {
	 	overlayPortfolio.classList.remove('fadeout-menu');
		overlayPortfolio.style.display = 'block';
		portfolioImg.src = 'img/portfolio/portfolio-2_fifth.jpg';
		portfolioImg.alt = "Современный многоэтажный дом в Садовом кольце";
		portfolioImgName.innerHTML = "Современный многоэтажный дом в Садовом кольце";
		if (overlayPortfolio) {
		overlayPortfolio.classList.add('fadein-menu');
		}
	}
	portfolioImgSixth.onclick = function() {
	 	overlayPortfolio.classList.remove('fadeout-menu');
		overlayPortfolio.style.display = 'block';
		portfolioImg.src = 'img/portfolio/portfolio-2_sixth.jpg';
		portfolioImg.alt = "Дом в винтажном стиле";
		portfolioImgName.innerHTML = "Дом в винтажном стиле";
		if (overlayPortfolio) {
		overlayPortfolio.classList.add('fadein-menu');
		}
	}

function showThirdTab() {
	portfolioFirst.classList.remove('portfolio__item_first-selected');
	portfolioSecond.classList.remove('portfolio__item_selected');
	portfolioThird.classList.add('portfolio__item_selected');
	portfolioForth.classList.remove('portfolio__item_forth-selected');

	portfolioImgFirst.src = "img/portfolio/portfolio-3_first.jpg";
	portfolioImgSecond.src = "img/portfolio/portfolio-3_second.jpg";
	portfolioImgThird.src = "img/portfolio/portfolio-3_third.jpg";
	portfolioImgForth.src = "img/portfolio/portfolio-3_forth.jpg";
	portfolioImgFifth.src = "img/portfolio/portfolio-3_fifth.jpg";
	portfolioImgSixth.src = "img/portfolio/portfolio-3_sixth.jpg";

	portfolioImgFirst.alt = "Студия в современном дизайне";
	portfolioImgSecond.alt = "Гостиная с террасой";
	portfolioImgThird.alt = "Зал с потолком в прованском стиле";
	portfolioImgForth.alt = "Прихожая в стиле Hi-Tech";
	portfolioImgFifth.alt = "Кухня с подвесным потолком";
	portfolioImgSixth.alt = "Библиотека с преобладанием белого цвета";

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

	portfolioImgFirst.onclick = function() {
	 	overlayPortfolio.classList.remove('fadeout-menu');
		overlayPortfolio.style.display = 'block';
		portfolioImg.src = 'img/portfolio/portfolio-3_first.jpg';
		portfolioImg.alt = "Студия в современном дизайне";
		portfolioImgName.innerHTML = "Студия в современном дизайне";
		if (overlayPortfolio) {
		overlayPortfolio.classList.add('fadein-menu');
		}
	}
	 portfolioImgSecond.onclick = function() {
	 	overlayPortfolio.classList.remove('fadeout-menu');
		overlayPortfolio.style.display = 'block';
		portfolioImg.src = 'img/portfolio/portfolio-3_second.jpg';
		portfolioImg.alt = "Гостиная с террасой";
		portfolioImgName.innerHTML = "Гостиная с террасой";
		if (overlayPortfolio) {
		overlayPortfolio.classList.add('fadein-menu');
		}
	}
	portfolioImgThird.onclick = function() {
	 	overlayPortfolio.classList.remove('fadeout-menu');
		overlayPortfolio.style.display = 'block';
		portfolioImg.src = 'img/portfolio/portfolio-3_third.jpg';
		portfolioImg.alt = "Зал с потолком в прованском стиле";
		portfolioImgName.innerHTML = "Зал с потолком в прованском стиле";
		if (overlayPortfolio) {
		overlayPortfolio.classList.add('fadein-menu');
		}
	}
	portfolioImgForth.onclick = function() {
	 	overlayPortfolio.classList.remove('fadeout-menu');
		overlayPortfolio.style.display = 'block';
		portfolioImg.src = 'img/portfolio/portfolio-3_forth.jpg';
		portfolioImg.alt = "Прихожая в стиле Hi-Tech";
		portfolioImgName.innerHTML = "Прихожая в стиле Hi-Tech";
		if (overlayPortfolio) {
		overlayPortfolio.classList.add('fadein-menu');
		}
	}
	portfolioImgFifth.onclick = function() {
	 	overlayPortfolio.classList.remove('fadeout-menu');
		overlayPortfolio.style.display = 'block';
		portfolioImg.src = 'img/portfolio/portfolio-3_fifth.jpg';
		portfolioImg.alt = "Кухня с подвесным потолком";
		portfolioImgName.innerHTML = "Кухня с подвесным потолком";
		if (overlayPortfolio) {
		overlayPortfolio.classList.add('fadein-menu');
		}
	}
	portfolioImgSixth.onclick = function() {
	 	overlayPortfolio.classList.remove('fadeout-menu');
		overlayPortfolio.style.display = 'block';
		portfolioImg.src = 'img/portfolio/portfolio-3_sixth.jpg';
		portfolioImg.alt = "Библиотека с преобладанием белого цвета";
		portfolioImgName.innerHTML = "Библиотека с преобладанием белого цвета";
		if (overlayPortfolio) {
		overlayPortfolio.classList.add('fadein-menu');
		}
	}
}
function showForthTab() {
	portfolioFirst.classList.remove('portfolio__item_first-selected');
	portfolioSecond.classList.remove('portfolio__item_selected');
	portfolioThird.classList.remove('portfolio__item_selected');
	portfolioForth.classList.add('portfolio__item_forth-selected');

	portfolioImgFirst.src = "img/portfolio/portfolio-4_first.jpg";
	portfolioImgSecond.src = "img/portfolio/portfolio-4_second.jpg";
	portfolioImgThird.src = "img/portfolio/portfolio-4_third.jpg";
	portfolioImgForth.src = "img/portfolio/portfolio-4_forth.jpg";
	portfolioImgFifth.src = "img/portfolio/portfolio-4_fifth.jpg";
	portfolioImgSixth.src = "img/portfolio/portfolio-4_sixth.jpg";

	portfolioImgFirst.alt = "Лаундж зона в офисном помещении";
	portfolioImgSecond.alt = "Комнаты отдыха в офисе";
	portfolioImgThird.alt = "Барбершоп в винтажном дизайне";
	portfolioImgForth.alt = "Гостиничный холл";
	portfolioImgFifth.alt = "Зона отдыха гостиничного комплекса";
	portfolioImgSixth.alt = "Ресепшин в стиле Модерн";

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

	portfolioImgFirst.onclick = function() {
	 	overlayPortfolio.classList.remove('fadeout-menu');
		overlayPortfolio.style.display = 'block';
		portfolioImg.src = 'img/portfolio/portfolio-4_first.jpg';
		portfolioImg.alt = "Лаундж зона в офисном помещении";
		portfolioImgName.innerHTML = "Лаундж зона в офисном помещении";
		if (overlayPortfolio) {
		overlayPortfolio.classList.add('fadein-menu');
		}
	}
	 portfolioImgSecond.onclick = function() {
	 	overlayPortfolio.classList.remove('fadeout-menu');
		overlayPortfolio.style.display = 'block';
		portfolioImg.src = 'img/portfolio/portfolio-4_second.jpg';
		portfolioImg.alt = "Комнаты отдыха в офисе";
		portfolioImgName.innerHTML = "Комнаты отдыха в офисе";
		if (overlayPortfolio) {
		overlayPortfolio.classList.add('fadein-menu');
		}
	}
	portfolioImgThird.onclick = function() {
	 	overlayPortfolio.classList.remove('fadeout-menu');
		overlayPortfolio.style.display = 'block';
		portfolioImg.src = 'img/portfolio/portfolio-4_third.jpg';
		portfolioImg.alt = "Барбершоп в винтажном дизайне";
		portfolioImgName.innerHTML = "Барбершоп в винтажном дизайне";
		if (overlayPortfolio) {
		overlayPortfolio.classList.add('fadein-menu');
		}
	}
	portfolioImgForth.onclick = function() {
	 	overlayPortfolio.classList.remove('fadeout-menu');
		overlayPortfolio.style.display = 'block';
		portfolioImg.src = 'img/portfolio/portfolio-4_forth.jpg';
		portfolioImg.alt = "Гостиничный холл";
		portfolioImgName.innerHTML = "Гостиничный холл";
		if (overlayPortfolio) {
		overlayPortfolio.classList.add('fadein-menu');
		}
	}
	portfolioImgFifth.onclick = function() {
	 	overlayPortfolio.classList.remove('fadeout-menu');
		overlayPortfolio.style.display = 'block';
		portfolioImg.src = 'img/portfolio/portfolio-4_fifth.jpg';
		portfolioImg.alt = "Зона отдыха гостиничного комплекса";
		portfolioImgName.innerHTML = "Зона отдыха гостиничного комплекса";
		if (overlayPortfolio) {
		overlayPortfolio.classList.add('fadein-menu');
		}
	}
	portfolioImgSixth.onclick = function() {
	 	overlayPortfolio.classList.remove('fadeout-menu');
		overlayPortfolio.style.display = 'block';
		portfolioImg.src = 'img/portfolio/portfolio-4_sixth.jpg';
		portfolioImg.alt = "Ресепшин в стиле Модерн";
		portfolioImgName.innerHTML = "Ресепшин в стиле Модерн";
		if (overlayPortfolio) {
		overlayPortfolio.classList.add('fadein-menu');
		}
	}
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
let burgerSmall = document.querySelector('.hamburger__btn-small');
let burgerSmallClose = document.querySelector('.hamburger__btn-close');
let mainMenu = document.querySelector('.header-nav');
let mainMenuWrap = document.querySelector('.main-nav-wrap');
let mainMenuOut = document.querySelector('.banner');
burgerSmall.onclick = openHamburger;
burgerSmallClose.onclick = closeHamburger;

burger.onmouseover = function() {
	mainMenu.classList.remove('fadeout-menu');
	mainMenu.classList.add('fadein-menu');
	if (mainMenu) {
			mainMenuOut.onmouseover = function() {
			mainMenu.classList.add('fadeout-menu');
		}
	}
}

function openHamburger() {
	mainMenu.classList.remove('fadeout-menu');
	mainMenuWrap.style.top = '-38px';
	burgerSmallClose.style.display = 'block';
	if (mainMenu) {
		mainMenu.classList.add('fadein-menu');
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

function closeOutterPortfolio () {
	overlayPortfolio.classList.remove('fadein-menu');

	if (overlayPortfolio) {
		overlayPortfolio.classList.add('fadeout-menu');		
	}
}

function closeHamburger () {
	mainMenu.classList.remove('fadein-menu');
	burgerSmallClose.style.display = 'none';

	if (mainMenu) {
		mainMenu.classList.add('fadeout-menu');		
	}
}

window.addEventListener('keydown', function (event) {
	overlayForm.classList.remove('fadein-menu');
	overlayCall.classList.remove('fadein-menu');
	overlayMap.classList.remove('fadein-menu');
	overlayPortfolio.classList.remove('fadein-menu');
  if (event.key === 'Escape') {
    overlayForm.classList.add('fadeout-menu');
    overlayCall.classList.add('fadeout-menu');
    overlayMap.classList.add('fadeout-menu');
    overlayPortfolio.classList.add('fadeout-menu');
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