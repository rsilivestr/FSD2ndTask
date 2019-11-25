import IMask from 'imask';

import 'CommonBlocks/input-box/__input/--dropdown/dropdown.js';
import 'CommonBlocks/input-box/__input/--checkbox/checkbox.js';

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
const UIdateMaskFields = document.querySelectorAll('.input-box__input--masked-date');
UIdateMaskFields.forEach(dateMask => {
  IMask(
    dateMask,
    {
      mask: Date,
      overwrite: true,
      autofix: true,
      blocks: {
        d: {
          mask: IMask.MaskedRange, 
          placeholderChar: 'Д', 
          from: 1, 
          to: 31, 
          maxLength: 2
        },
        m: {
          mask: IMask.MaskedRange, 
          placeholderChar: 'М', 
          from: 1, 
          to: 12, 
          maxLength: 2
        },
        Y: {
          mask: IMask.MaskedRange, 
          placeholderChar: 'Г', 
          from: 1900, 
          to: 2999, 
          maxLength: 4
        }
      },
      lazy: false
    }
  );
});