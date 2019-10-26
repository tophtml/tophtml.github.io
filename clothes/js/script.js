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
let feedbackNameHelp = document.getElementById('js-feedback-name_help');
let feedbackCommentHelp = document.getElementById('js-feedback-comment_help');
let feedbackStopForm = document.querySelector('.feedback-form__modal_error');
let feedbackSendForm = document.querySelector('.feedback-form__modal_send');
let feedbackName = document.getElementById('js-feedback-name');
let feedbackComment = document.getElementById('js-feedback-comment');

function RegEx(regex,input,helpText,helpMessage) {
  if(!regex.test(input)) {
    if(helpText != null) 
      helpText.innerHTML = helpMessage;
      return false;
    }
    else {
      if(helpText !=null) 
        helpText.innerHTML = "";
        return true;
    }
}

function showHelpFeedback(inputField,helpText) {
  return RegEx(/.+/,inputField.value,helpText,"Пожалуйста, введите имя");
}

function showHelpComment(inputField,helpText) {
  return RegEx(/.+/,inputField.value,helpText,"Пожалуйста, введите текст");
}

function sendComment(form) {
  if(showHelpFeedback(form['js-feedback-name'],form['help-feedback-name']) && showHelpComment(form['js-feedback-comment'],form['feedback-form__comment'])) {
    form.submit();
    // feedbackOverlay.style.display = 'block';
    // feedbackSendForm.style.display = 'block';
  }
  else {
    feedbackOverlay.style.display = 'block';
    feedbackStopForm.style.display = 'block';
    messageError.innerText = 'Пожалуйста, заполните поля формы';

    if (feedbackName.value == 0) {
      feedbackNameHelp.innerHTML = "Пожалуйста, введите имя";
      feedbackCommentHelp.innerHTML = "";
    }
    if (feedbackComment.value == 0) {
     feedbackNameHelp.innerHTML = "";
      feedbackCommentHelp.innerHTML = "Пожалуйста, введите текст";
    }
    if (feedbackName.value == 0 && feedbackComment.value == 0) {
      feedbackNameHelp.innerHTML = "Пожалуйста, введите имя";
      feedbackCommentHelp.innerHTML = "Пожалуйста, введите текст";
    }
  }
}

//tel-form

let telOverlay = document.querySelector('.modal-tel-overlay');
let putTel = document.querySelector('.modal-tel');
let contactsNameHelp = document.getElementById('js-contacts-name_help');
let contactsTelHelp = document.getElementById('js-contacts-tel_help');
let contactsName = document.getElementById('js-contacts-name');
let contactsTel = document.getElementById('js-contacts-tel');

function showModalCall() {
  if(showModalCall) {
    telOverlay.style.display = 'block';
    putTel.style.display = 'block';
  }
}

function closeTelOverlay() {
  if(closeTelOverlay) {
    telOverlay.style.display = "none";
    putTel.style.display = 'none';
  }
}

function showContactsName(inputField,helpText) {
  return RegEx(/.+/,inputField.value,helpText,"Пожалуйста, введите имя");
}

function showContactsTel(inputField,helpText) {
  return RegEx(/^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/,inputField.value,helpText,"Пожалуйста, введите число в формате +7(495)222-22-22");
}

function showContactsSocial(inputField,helpText) {
  return RegEx(/^id\d{1,12}$/,inputField.value,helpText,"Пожалуйста, введите id в формате id333");
}

function sendContacts(form) {
  if(showContactsName(form['js-contacts-name'],form['js-contacts-name_help']) && showContactsTel(form['js-contacts-tel'],form['js-contacts-tel_help'])) {
    form.submit();
  }
  else {
   document.querySelector('.help-btn').innerHTML = 'Пожалуйста, введите имя и телефон';

    if (contactsName.value == 0) {
      contactsNameHelp.innerText = "Пожалуйста, введите имя";
      contactsTelHelp.innerText = "";
    }
    if (contactsTel.value == 0) {
     contactsNameHelp.innerText = "";
      contactsTelHelp.innerText = "Пожалуйста, введите число в формате +7(495)222-22-22";
    }
    if (contactsName.value == 0 && contactsTel.value == 0) {
      contactsNameHelp.innerText = "Пожалуйста, введите имя";
      contactsTelHelp.innerText = "Пожалуйста, введите число в формате +7(495)222-22-22";
    }
  }
}

//make order

let orderNameHelp = document.getElementById('order-name-help');
let orderTelHelp = document.getElementById('order-tel-help');
let orderName = document.getElementById('js-order-name');
let orderTel = document.getElementById('js-order-tel');
let messageError = document.querySelector('.modal-feedback__text');

function showNameOrder(inputField, helpText) {
  return RegEx(/.+/,inputField.value,helpText,"Пожалуйста, введите имя");
}

function showTelOrder(inputField, helpText) {
  return RegEx(/^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/,inputField.value,helpText,"Пожалуйста, введите число в формате +7(495)222-22-22");
}

function sendOrder(form) {
  if(showNameOrder(form['js-order-name'],form['order-name-help']) && showTelOrder(form['js-order-tel'],form['order-tel-help'])) {
      form.submit();
  }
  else {
    feedbackOverlay.style.display = 'block';
    feedbackStopForm.style.display = 'block';
    messageError.innerText = 'Пожалуйста, правильно заполните поля формы';
    
     if (orderName.value == 0) {
      orderNameHelp.innerText = "Пожалуйста, введите имя";
      orderTelHelp.innerText = "";
    }
    if (orderTel.value == 0) {
     orderNameHelp.innerText = "";
      orderTelHelp.innerText = "Пожалуйста, введите число в формате +7(495)222-22-22";
    }
    if (orderName.value == 0 && orderTel.value == 0) {
      orderNameHelp.innerText = "Пожалуйста, введите имя";
      orderTelHelp.innerText = "Пожалуйста, введите число в формате +7(495)222-22-22";
    }


  }
}

function uploadFile(target) {
    document.querySelector(".order-file-help").innerHTML = target.files[0].name;
}

//Close Overlay
function closeOverlay() {
  let closeOverlay = document.querySelector('.modal-feedback-overlay');
  let telOverlay = document.querySelector('.modal-tel-overlay');
  if(closeOverlay) {
  closeOverlay.style.display = 'none';
  telOverlay.style.display = 'none';
  telSendForm.style.display = "none";
  }
}

function closeOutterOverlay() {
  let closeOverlay = document.querySelector('.modal-feedback-overlay');
  let telOverlay = document.querySelector('.modal-tel-overlay');
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
    telSendForm.style.display = 'none';
  }
})
