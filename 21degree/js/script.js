let left = 0;
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

//AUTOSLIDER FOR BLOG
autoSlider();

function autoSlider() {
	setTimeout(function() {
		left = left - 700;
		
		if (left<-2800) {
			left = 0;
		}
		document.querySelector('.blog-slider').style.left = left + 'px';
		autoSlider();
	}, 10000);
}