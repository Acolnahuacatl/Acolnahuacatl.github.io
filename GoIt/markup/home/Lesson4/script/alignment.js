 window.onload = function() {
  setTimeout(function() {
      var mainDivs = document.getElementsByClassName("block");
      var maxHeight = 0;
      for (var i = 0; i < mainDivs.length; ++i) {
        if (maxHeight < mainDivs[i].clientHeight) {
          maxHeight = mainDivs[i].clientHeight;
        }
      }
      for (var i = 0; i < mainDivs.length; ++i) {
        mainDivs[i].style.height = maxHeight + "px";
      }
    }, 1000);
}    
