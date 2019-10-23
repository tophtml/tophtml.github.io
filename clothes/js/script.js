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
let telSendForm = document.querySelector('.contacts-form__modal_send');

function closeTelOverlay(choice) {
let telName = document.querySelector('.contacts-form__name');
let telTel = document.querySelector('.contacts-form__tel');
let telSocial = document.querySelector('.contacts-form__id');
let telStopForm = document.querySelector('.help-btn');

  if (choice == 1) {
    if (telName.value.length != 0 || telTel.value.length != 0 || telSocial.value.length != 0) {
        telSendForm.style.display = "block";
      }
        else {
          telStopForm.innerHTML = "Пожалуйста, введите имя, телефон, id";
        }
  }  
  if (choice == 2) {
    telOverlay.style.display = "none";
  }
}

function showModalCall() {
  if(showModalCall) {
    telOverlay.style.display = 'block';
    putTel.style.display = 'block';
  }
}


// function validateRegEx(regex, inputStr, helpText,helpMessage) {
//   if(!regex.test(inputStr)) {
//     if(helpText !=null) {
//       helpText.innerHTML = helpMessage
//     }
//     else {
//       if (helpText !=null) {
//         helpText.innerHTML = "";
//       }
//     }
//   }
// }

function showHelpTel(inputField, helpText) {
  if(inputField.value.length == 0) {
    if(helpText != null) {
      helpText.innerHTML = "Пожалуйста, заполните поле";
    }
  }
     else {
    if(helpText != null)
    helpText.innerHTML = "";
    }
  }


//make order

function RegEx(regex,input,helpText,helpMessage) {
  if (!regex.test(input)) {
    if (helpText != null)
      helpText.innerHTML = helpMessage;
      return false;
  }
  else {
  if (helpText != null) 
    helpText.innerHTML = "";
    return true;
  }
}

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
    document.getElementById('order-tel-help').innerHTML = "Пожалуйста, введите число в формате +7(495)222-22-22";
    document.getElementById('order-name-help').innerHTML = "Пожалуйста, введите имя";

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
