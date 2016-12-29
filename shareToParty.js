//Share all items to followers
var buttons = document.querySelectorAll('.share');
var i = buttons.length;

setTimeout(function() { shareButton(); }, 500);
function shareButton() {
  buttons[i - 1].click();
  if(i > 0) {
    setTimeout(function() { shareToParty(); }, 500);
  }
}
function shareToParty() {
  var sharebutton = document.querySelector(".party-burgundy") || document.querySelector(".btn-pm-party-share");
  sharebutton.click();
  if(i > 0) {
    setTimeout(function() { shareButton(); }, 500);
    i--; i--;
  }
}
