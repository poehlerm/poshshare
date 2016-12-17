# PoshShare Bookmarklet

I made this for my wife and her friends. It lets them share all of the items in their poshmark closet.

Normally, items are shared one by one. When someone has several items in their closet, it becomes time consuming to
share them all.

## Bookmarklets

Drag these bookmarklets to your bookmark bar to use them.

### If you want to share all of your items to your followers anytime: ![Share To Followers](javascript:void function($){var loadBookmarklet=function($){function shareAllItems(){setTimeout(function(){buttons[buttons.length-1-i].click();var sharebutton=document.querySelector(".pm-followers-share-link");sharebutton.click(),i++,buttons.length-i>0&&shareAllItems()},500)}var buttons=(document.querySelectorAll(".tile"),document.querySelectorAll(".share-gray")),i=0;shareAllItems()},hasJQuery=$&&$.fn&&parseFloat($.fn.jquery)>=1.7;if(hasJQuery)loadBookmarklet($);else{var s=document.createElement("script");s.src="//ajax.googleapis.com/ajax/libs/jquery/1/jquery.js",s.onload=s.onreadystatechange=function(){var state=this.readyState;state&&"loaded"!==state&&"complete"!==state||loadBookmarklet(jQuery.noConflict())}}document.getElementsByTagName("head")[0].appendChild(s)}(window.jQuery);)

### If you want to share all of your items to your followers during a party: ![Share To Party](javascript:void function(){function e(){setTimeout(function(){t[t.length-1-c].click();var n=document.querySelector(".btn-pm-party-share");n.click(),c++,t.length-c>0&&e()},500)}var t=(document.querySelectorAll(".listing-con"),document.querySelectorAll("a.share")),c=0;e()}();)

## How to Use

1. You **must** scroll down the page all the way before using this button. If you don't, it won't share all of your items.
2. Use the button!
