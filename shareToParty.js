//Share all items to followers
var buttons = document.querySelectorAll('.share');
var i = 0;

function shareButton() {
  buttons[buttons.length - 1 - i].click();
  i++;
  if(buttons.length - i > 0) {
    setTimeout(function() { shareToParty(); }, 500);
  }
}
function shareToParty() {
  var sharebutton = document.querySelector(".pm-party-share-link");
  sharebutton.click();
  if(buttons.length - i > 0) {
    setTimeout(function() { shareButton(); }, 500);
  }
}

setTimeout(function() { shareButton(); }, 500);
