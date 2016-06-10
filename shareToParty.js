//Share all items to party
function shareAllItems(){
  var listing = document.querySelectorAll('.listing-con');
  var lastSellingItem = 0;
  //find the first sold item
  for(var i = 0; i < listing.length; i++){
    lastSellingItem = i;
    if(listing[i].querySelector('.sprite.sold-tag'))
    {
      console.log("Item number %d has been sold", i);
      lastSellingItem = i - 1;
      i = listing.length;
    }
  }

  var buttons = document.querySelectorAll('.sprite.share');
  // var sharebutton = document.querySelector(".ib.va-m");
  //share all items before the sold items
  for(var i = lastSellingItem; i >= 0; i--){
    buttons[i].click();
    var sharebutton = document.querySelector(".sprite.btn-pm-party-share");
    sharebutton.click();
    //sharebutton.click();
    console.log("Item %d was shared", i);
    }
}
shareAllItems();
