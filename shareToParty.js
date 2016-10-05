//Share all items to party
var listing = document.querySelectorAll('.listing-con');
var buttons = document.querySelectorAll('a.share');
var i = 0;

//share all available items
function shareAllItems() {
  setTimeout(function () {
    buttons[buttons.length - 1 - i].click();
    var sharebutton = document.querySelector(".btn-pm-party-share");
    sharebutton.click();
    i++;
    if(buttons.length - i > 0) {
      shareAllItems();
    }
  }, 500)
}

shareAllItems(); 
