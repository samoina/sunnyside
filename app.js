// Expand the mobile menu when the hamburger icon is clicked

let mobileMenu = document.querySelector('.mobileMenu');

function expandMenu(){
    mobileMenu.classList.toggle('mobileMenu--hidden');
}

/*Add a smart nav bar so that the mobile menu disappears when the user scrolls down. 
set the value of the previous Scroll position to 0, and create a new variable that takes in the current scroll position set to windows.pageYoffset. initialize scrolingDown (that we will set to a Boolean). so that if current>previous scrollingDown = true. else it is false, return scrolling Down 
*/

let initialScrollPosition =0;

function isScrollingDown() {
  let presentScrollPosition = window.pageYoffset || window.scrollY;
  let scrollingDown;

  if(presentScrollPosition > initialScrollPosition) {
    scrollingDown = true;
  } else {
    scrollingDown = false;
  }
  initialScrollPosition = presentScrollPosition;
  return scrollingDown;
}

/*
if it is true we are scrolling down, then add the class to remove the menu. 
*/
const manageMenuOnScrollDown= ()=>{
  if (isScrollingDown()) {
    mobileMenu.classList.add('mobileMenu--scroll-down');
    mobileMenu.classList.remove('mobileMenu--scroll-up');
  } else {
    mobileMenu.classList.add('mobileMenu--scroll-up');
    mobileMenu.classList.remove('mobileMenu--scroll-down');
  }
}

/*
WITHOUT THROTTLE
This really confused me as to when to call the lfunction to manage scrolldown, i then realized i need to set an EL onto the window object to listen for scrolling
*/
window.addEventListener('scroll', manageMenuOnScrollDown);







