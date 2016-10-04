function navHeaderAdjust() {
  longHeader = document.getElementById('nav-header-long');
  shortHeader = document.getElementById('nav-header-short');
  console.log('hey!');
  if (longHeader.offsetWidth > (0.5 * window.innerWidth)) {
    longHeader.style.visibility = 'hidden';
    shortHeader.style.visibility = 'visible';
  } else {
    longHeader.style.visibility = 'visible';
    shortHeader.style.visibility = 'hidden';
  }
}
window.onload = function() {
  navHeaderAdjust();
};
