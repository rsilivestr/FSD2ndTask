import IMask from 'imask';

import 'CommonBlocks/input-box/__input/--dropdown.js';

const routerNav = document.querySelector('.router__nav'),
      routerIframe = document.querySelector('.router__current-page');
if(routerNav) {
  routerNav.addEventListener('click', e => {
    if(e.target.classList.contains('router__navlink')) {
      e.preventDefault();

      routerIframe.src = e.target.href;
    }
  });
}

// document.body.addEventListener('click', toggleDropdown);

// function toggleDropdown(e) {
//   if(e.target.classList.contains('input-box__input--dropdown')) {
//     console.log(e.target);
//   }
// }
const dateMask = IMask(
  document.querySelector('.date-mask'),
  {
    mask: Date,
    min: new Date(1990, 0, 1),
    max: new Date(2030, 0, 1),
    lazy: false
  });