//Share all items to followers
var listing = document.querySelectorAll('.tile');
var buttons = document.querySelectorAll('.share-gray');
var i = 0;

//share all available items
function shareAllItems() {
  setTimeout(function () {
    buttons[buttons.length - 1 - i].click();
    var sharebutton = document.querySelector(".pm-party-share-link");
    sharebutton.click();
    i++;
    if(buttons.length - i > 0) {
      shareAllItems();
    }
  }, 500)
}

shareAllItems(); 
