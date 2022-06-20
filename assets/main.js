const nav = document.querySelector('.navigation');
const subMenuCovers = document.querySelectorAll('.connect, .company, .product');
const subMenus = document.querySelectorAll('.sub-menu');
const hamburgerIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close');
const menu = document.querySelector('.menu');
const cover = document.querySelector('.cover');
let show = 'show-sub-menu';





hamburgerIcon.addEventListener ('click', showMenu);


closeIcon.addEventListener ('click', closeMenu);
cover.addEventListener ('click', closeMenu);
subMenuCovers.forEach (function (subMenuCover) {
  subMenuCover.addEventListener('click', showSubMenu);
});
/*
window.addEventListener ('scroll', function () {
  let height = window.pageYOffset;
 
  if (height > 530) {
    nav.classList.add('fixed-nav')
  }
  else {
    nav.classList.remove('fixed-nav')
  }
  
});
*/


function showMenu () {
  menu.classList.add('show-menu');
  closeIcon.classList.add('show-close');
  hamburgerIcon.classList.add('hide-icon');
  cover.classList.add('show-cover');
}

function closeMenu () {
  menu.classList.remove('show-menu');
  closeIcon.classList.remove('show-close');
  hamburgerIcon.classList.remove('hide-icon');
  cover.classList.remove('show-cover');
}


function showSubMenu (e) {
  let arrow = e.currentTarget.lastElementChild;
  let subMenu = e.currentTarget.nextElementSibling;
  
  if (subMenu.classList.contains(show)) {
    subMenu.classList.remove(show);
  }
  
  else {
    closeAllSubMenus();
    subMenu.classList.add(show);
  }
  
  
  arrow.classList.toggle('rotate');
 
}

function closeAllSubMenus() {
  subMenus.forEach (function (subMenu) {
    let classes = subMenu.classList;
    let arrow = subMenu.previousElementSibling.lastElementChild;
    if (classes.contains(show)) {
      classes.remove(show);
      arrow.classList.remove('rotate');
    }
  });
  
}
