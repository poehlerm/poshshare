# PoshShare Bookmarklet

I made this for my wife and her friends. It lets them share all of the items in their poshmark closet.

Normally, items are shared one by one. When someone has several items in their closet, it becomes time consuming to
share them all.

## Bookmarklets

Drag these bookmarklets to your bookmark bar to use them.

### ![Share to Followers](javascript:void%20function(){function%20e(){n[n.length-1-o].click(),o++,n.length-o%3E0%26%26setTimeout(function(){t()},500)}function%20t(){var%20t=document.querySelector(%22.pm-followers-share-link%22);t.click(),n.length-o%3E0%26%26setTimeout(function(){e()},500)}var%20n=document.querySelectorAll(%22.share%22),o=0;setTimeout(function(){e()},500)}();) | ![Share to Party](javascript:function shareButton(){buttons[buttons.length-1-i].click(),i++,i++,buttons.length-i>0&&setTimeout(function(){shareToParty()},500)}function shareToParty(){var sharebutton=document.querySelector(".pm-party-share-link");sharebutton.click(),buttons.length-i>0&&setTimeout(function(){shareButton()},500)}var buttons=document.querySelectorAll(".share"),i=0;setTimeout(function(){shareButton()},500);)


## How to Use

1. You **must** scroll down the page all the way before using this button. If you don't, it won't share all of your items.
2. Use the button!
