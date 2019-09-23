let modalText = document.querySelector('.overlay');

let buttonFirst = document.querySelector('.beginning__btn_first').style;
let buttonSecond = document.querySelector('.beginning__btn_second').style;
let buttonThird = document.querySelector('.beginning__btn_third').style;

let contentFirst = document.querySelector('.beginning-box_first').style;
let contentSecond = document.querySelector('.beginning-box_second').style;
let contentThird = document.querySelector('.beginning-box_third').style;

let iframeAlbumFirst = document.querySelector('.discography-data__iframe_first').style;
let iframeAlbumSecond = document.querySelector('.discography-data__iframe_second').style;
let iframeAlbumThird = document.querySelector('.discography-data__iframe_third').style;

function modalWin() {
	modalText.classList.add('show_overlay');
}
function removeModal() {
	modalText.classList.remove('show_overlay');
}

function beginningOpen(choice) {
	if (choice == 1) {
	contentFirst.display = "block";	
	contentSecond.display = "none";
	contentThird.display = "none";
	buttonFirst.background = "transparent";
	buttonSecond.background = "#ffffff";
	buttonThird.background = "#ffffff";
	buttonFirst.cursor = "default";
	buttonSecond.cursor = "pointer";
	buttonThird.cursor = "pointer";
	}
	else if (choice == 2) {
	contentFirst.display = "none";	
	contentSecond.display = "block";
	contentThird.display = "none";
	buttonFirst.background = "#ffffff";
	buttonSecond.background = "transparent";
	buttonThird.background = "#ffffff";
	buttonFirst.cursor = "pointer";
	buttonSecond.cursor = "default";
	buttonThird.cursor = "pointer";
	}
	else if (choice == 3) {
	contentFirst.display = "none";	
	contentSecond.display = "none";
	contentThird.display = "block";
	buttonFirst.background = "#ffffff";
	buttonSecond.background = "#ffffff";
	buttonThird.background = "transparent";
	buttonFirst.cursor = "pointer";
	buttonSecond.cursor = "pointer";
	buttonThird.cursor = "default";	
	}
}

function playAlbum(choice) {
 if (choice == 1) {
 	iframeAlbumFirst.display = "block";
	iframeAlbumSecond.display = "none";	
	iframeAlbumThird.display = "none";
 }
 else if (choice == 2) {
 	iframeAlbumFirst.display = "none";
	iframeAlbumSecond.display = "block";
	iframeAlbumThird.display = "none";
 }
 else if (choice == 3) {
 	iframeAlbumFirst.display = "none";
	iframeAlbumSecond.display = "none";
	iframeAlbumThird.display = "block";
 }
}