//toggle

function showMenu() {
  let showMenu = document.querySelector('.sticky-menu');

  showMenu.classList.toggle('open-menu');
}

// active menu
let lastId,
    topMenu = $("#top-menu"),
    topMenuHeight = topMenu.outerHeight()+15,
    menuItems = topMenu.find("a"),
    scrollItems = menuItems.map(function(){
      let item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

menuItems.click(function(e){
 let href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

$(window).scroll(function(){
   let fromTop = $(this).scrollTop()+topMenuHeight;
   let cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   cur = cur[cur.length-1];
   let id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       menuItems
         .parent().removeClass("main-nav__item_selected")
         .end().filter("[href='#"+id+"']").parent().addClass("main-nav__item_selected");
   }                   
});


//feedback-form
let feedbackOverlay = document.querySelector('.modal-feedback-overlay');
let feedbackName = document.querySelector('.feedback-form__name');
let feedbackComment = document.querySelector('.feedback-form__comment');
let feedbackStopForm = document.querySelector('.feedback-form__modal_error');
let feedbackSendForm = document.querySelector('.feedback-form__modal_send');

function sendComment() {
  if(feedbackName.value.length == 0 || feedbackComment.value.length == 0) {
  feedbackOverlay.style.display = 'block';
  feedbackStopForm.style.display = 'block';
  }
  else {
    feedbackName.value="";
    feedbackComment.value="";
    feedbackOverlay.style.display = 'block';
    feedbackSendForm.style.display = 'block';
  }
}
function showHelpFeedback(feedbackName, helpText) {
   if(feedbackName.value.length == 0) {
    if(helpText != null) {
    helpText.innerHTML = "Пожалуйста, введите имя";
   }
   }
   else {
    if(helpText != null)
    helpText.innerHTML = "";
 }
}

function showHelpComment(feedbackComment, helpText) {
   if(feedbackComment.value.length == 0) {
    if(helpText != null) {
    helpText.innerHTML = "Пожалуйста, введите текст";
   }
   }
   else {
    if(helpText != null)
    helpText.innerHTML = "";
 }
}

//tel-form
let telOverlay = document.querySelector('.modal-tel-overlay');
let putTel = document.querySelector('.modal-tel');

function showModalCall() {
  if(showModalCall) {
    telOverlay.style.display = 'block';
    putTel.style.display = 'block';
  }
}


//Close Overlay
function closeOverlay() {
  let closeOverlay = document.querySelector('.modal-feedback-overlay');
  if(closeOverlay) {
  closeOverlay.style.display = 'none';
  telOverlay.style.display = 'none';
  }
}

function closeOutterOverlay() {
  let closeOverlay = document.querySelector('.modal-feedback-overlay');
  if(closeOutterOverlay) {
  closeOverlay.style.display = 'none';
  }
}

window.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    let closeOverlay = document.querySelector('.modal-feedback-overlay');
    let telOverlay = document.querySelector('.modal-tel-overlay');
    closeOverlay.style.display = 'none';
    telOverlay.style.display = 'none';
  }
})
