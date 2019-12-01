const wrapClass = 'dropdown',
      dropClass = 'dropdown__display',
      openClass = 'dropdown--is-open',
      contentsClass = 'dropdown__contents',
      contentsVisibleClass = 'dropdown__contents--visible',
      optionClass = 'dropdown__option',
      optValClass = 'dropdown__option-value',
      controlClass = 'dropdown__option-control',
      addClass = 'dropdown__option-control--add',
      subtractClass = 'dropdown__option-control--subtract',
      UIdrops = document.querySelectorAll('.'+wrapClass);

document.body.addEventListener('mousedown', toggleDropdown);

function toggleDropdown(e) {
  // if dropdown display is clicked
  if(e.target.classList.contains(dropClass)) {
    const UIcurrent = e.target.parentElement;
    const UIconts = e.target.nextElementSibling;
    // close all dropdowns other than targeted
    UIdrops.forEach(drop => {
      if(drop !== UIcurrent) {
        drop.classList.remove(openClass);
        drop.querySelector('.'+contentsClass).classList.remove(contentsVisibleClass);
      }
    });
    // toggle clicked dropdown
    UIcurrent.classList.toggle(openClass);
    UIconts.classList.toggle(contentsVisibleClass);
  // when dropdown-content is clicked
  } else if (e.target.closest('.'+contentsClass)) {
    // when control (add / subtract) is clicked
    if(e.target.classList.contains(controlClass)) {
      
      // functions to handle Maths
      
      // count details (bedrooms, beds)
      // setDetails(e.target)
      
      // count guests (with apply, clear buttons)
      // setGuests
      


      changeDropdown(e.target);



    }
  } else {
    // close any and all dropdowns if none targeted
    UIdrops.forEach(drop => {
      drop.classList.remove(openClass);
      drop.querySelector('.'+contentsClass).classList.remove(contentsVisibleClass);
    });
  }
}






// handle subtraction / addition of values
function changeDropdown(el) {
  // define drop contents
  const UIconts = el.closest('.'+contentsClass);
  // define main OUTPUT (.input-box__input--dropdown)
  const UIdisplay = UIconts.previousElementSibling;
  // defune array of option elements
  const opts = [];
  // populate array
  UIconts.querySelectorAll('.'+optionClass).forEach(opt => {
    opts.push(opt);
  });
  // define array of option values
  const optionValues = [];
  // populate array with option values
  // separate function for array and sum?
  const optionValueElements = UIconts.querySelectorAll('.'+optValClass);
  // handle addition
  if(el.classList.contains(addClass)) {
    const currentOption = el.closest('.'+optionClass);
    // which option was targeted??? splice to optionValues array
    opts.forEach(opt => {
      if(opt == currentOption) {
        const currentVal = el.previousElementSibling;
        currentVal.innerText = parseInt(currentVal.innerText) + 1;
        updateValues(optionValueElements, optionValues, UIdisplay);
      }
    });
  } else if(el.classList.contains(subtractClass)) {
    // const currentOption = el.closest('.input-box__dropdown-option');
    // which option was targeted??? splice to optionValues array
    // opts.forEach(opt => {
    //   if(opt == currentOption) {
      const currentVal = el.nextElementSibling;
      // subtract only if greater than 0
      if(parseInt(currentVal.innerText) > 0) {
        currentVal.innerText = parseInt(currentVal.innerText) - 1;
        updateValues(optionValueElements, optionValues, UIdisplay);
      }
    //   }
    // });
  }
}

function updateValues(elArr, valArr, sum) {
  elArr.forEach(elem => {
    // update options values
    valArr.push(parseInt(elem.innerText));
    // display sum of options array
    sum.value = valArr.reduce((a,b) => a + b);
    // change placeholder to default if sum is 0
    if(sum.value == 0) {
      // sum.value = sum.dataset.placeholder;
      sum.value = '';
    }
  });
}

// check if sum is not greater then room capacity

// disable - when 0 and + when full .drop-controll--disabled
