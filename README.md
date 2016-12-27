# PoshShare Bookmarklet

I made this for my wife and her friends. It lets them share all of the items in their poshmark closet.

Normally, items are shared one by one. When someone has several items in their closet, it becomes time consuming to
share them all.

## Bookmarklets

Drag these bookmarklets to your bookmark bar to use them.

### If you want to share all of your items to your followers anytime: ![Share To Followers](javascript:function shareAllItems(){setTimeout(function(){buttons[buttons.length-1-i].click();var sharebutton=document.querySelector(".pm-followers-share-link");sharebutton.click(),i++,buttons.length-i>0&&shareAllItems()},500)}var listing=document.querySelectorAll(".tile"),buttons=document.querySelectorAll(".share-gray"),i=0;shareAllItems();)

### If you want to share all of your items to your followers during a party: ![Share To Party](javascript:function shareAllItems(){setTimeout(function(){buttons[buttons.length-1-i].click();var sharebutton=document.querySelector(".pm-party-share-link");sharebutton.click(),i++,buttons.length-i>0&&shareAllItems()},500)}var listing=document.querySelectorAll(".tile"),buttons=document.querySelectorAll(".share-gray"),i=0;shareAllItems();)

## How to Use

1. You **must** scroll down the page all the way before using this button. If you don't, it won't share all of your items.
2. Use the button!
