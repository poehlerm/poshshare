# PoshShare Bookmarklet

I made this for my wife and her friends. It lets them share all of the items in their poshmark closet. 

Normally, items are shared one by one. When someone has several items in their closet, it becomes time consuming to 
share them all.

## Bookmarklets

Drag these bookmarklets to your bookmark bar to use them.

If you want to share all of your items to your followers anytime: [Share To Followers](javascript:function shareAllItems(){for(var listing=document.querySelectorAll(".listing-con"),i=0;i<listing.length;i++)if(listing[i].querySelector(".sprite.sold-tag")){console.log("Item number %d has been sold",i);var lastSellingItem=i-1;i=listing.length}for(var buttons=document.querySelectorAll(".sprite.share"),sharebutton=document.querySelector(".ib.va-m"),i=lastSellingItem;i>=0;i--){buttons[i].click();var sharebutton=document.querySelector(".ib.va-m");sharebutton.click(),console.log("Item %d was shared",i)}}shareAllItems();).

If you want to share all of your items to your followers during a party: [Share To Party](javascript:function shareAllItems(){for(var listing=document.querySelectorAll(".listing-con"),i=0;i<listing.length;i++)if(listing[i].querySelector(".sprite.sold-tag")){console.log("Item number %d has been sold",i);var lastSellingItem=i-1;i=listing.length}for(var buttons=document.querySelectorAll(".sprite.share"),sharebutton=document.querySelector(".ib.va-m"),i=lastSellingItem;i>=0;i--){buttons[i].click();var sharebutton=document.querySelectorAll(".ib.va-m");sharebutton[1].click(),console.log("Item %d was shared",i)}}shareAllItems();).

## How to Use

1. You **must** scroll down the page all the way before using this button. If you don't, it won't share all of your items.
2. Use the button!
