//Share all items to followers
var buttons = document.querySelectorAll('.share');
var i = 0;

setTimeout(function() { shareButton(); }, 500);
function shareButton() {
  buttons[buttons.length - 1 - i].click();
  if(buttons.length - i > 0) {
    setTimeout(function() { shareToFollowers(); }, 500);
  }
}
function shareToFollowers() {
  var sharebutton = document.querySelector(".pm-followers-share-link");
  sharebutton.click();
  i++;
  if(buttons.length - i > 0) {
    setTimeout(function() { shareButton(); }, 500);
  }
}
