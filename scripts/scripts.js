window.onload = function() {
  var imgs = document.querySelectorAll('img');
  [].forEach.call(imgs, function(element, index, array) {
    element.classList.add("img-fluid");
  });
}
