//Share all items to followers
var buttons = document.querySelectorAll('.share');
var i = buttons.length;

setTimeout(function() { shareButton(); }, 500);
function shareButton() {
  buttons[i - 1].click();
  if(i > 0) {
    setTimeout(function() { shareToFollowers(); }, 500);
  }
}
function shareToFollowers() {
  var sharebutton = document.querySelector(".pm-followers-share-link");
  sharebutton.click();
  if(i > 0) {
    setTimeout(function() { shareButton(); }, 500);
    i--;
  }
}
