var werk = document.querySelector('.werk');
var form = document.querySelector('.lolme');
var cloz = document.querySelector('.close');
var bod = document.querySelector('html');

werk.addEventListener('click', function() {
  form.classList.add('sshow');
});

cloz.addEventListener('click', function() {
  form.classList.remove('sshow');
});

window.onclick = function(e) {
  if(e.target == form) {
    form.classList.remove('sshow');
  }
};