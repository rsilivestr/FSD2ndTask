// listen to body clicks
document.body.addEventListener('click', handleDropdown);

function handleDropdown(e) {
  const inputDropdowns = document.querySelectorAll('.input-box__dropdown-box');
  // if dropdown is clicked (targeted)
  if(e.target.classList.contains('input-box__input--dropdown')) {
    const dropBox = e.target.parentElement;
    // close all dropdowns other than targeted
    inputDropdowns.forEach(drop => {
      if(drop !== dropBox) {
        drop.classList.remove('input-box__dropdown-box--is-open');
      }
    });
    // toggle clicked dropdown
    dropBox.classList.toggle('input-box__dropdown-box--is-open');
  // when dropdown-content is clicked
  } else if (e.target.classList.contains('input-box__dropdown-option') || e.target.parentElement.classList.contains('input-box__dropdown-option')) {
    // when control (add / subtract) is clicked
    if(e.target.classList.contains('drop-control')) {
      changeDropdown(e.target);
    }
  } else {
    // close any and all dropdowns if none targeted
    inputDropdowns.forEach(drop => drop.classList.remove('input-box__dropdown-box--is-open'));
  }
}
// handle subtraction / addition of values
function changeDropdown(el) {
  // define drop contents
  const dropContents = el.closest('.input-box__dropdown-contents');
  // define main OUTPUT (.input-box__input--dropdown)
  const dropOut = dropContents.previousElementSibling;
  // its placeholder is main sum
  // let dropSum = parseInt(dropOut.placeholder) ? dropOut.placeholder : 0;
  // defune array of option elements
  const optionElements = [];
  // populate array
  dropContents.querySelectorAll('.input-box__dropdown-option').forEach(opt => {
    optionElements.push(opt);
  });
  // define array of option values
  const optionValues = [];
  // populate array with option values
  // separate function for array and sum?
  const optionValueElements = dropContents.querySelectorAll('.input-box__dropdown-option-value')
  // handle addition
  if(el.classList.contains('input-box__dropdown-option-add')) {
    const currentOption = el.closest('.input-box__dropdown-option');
    // which option was targeted??? splice to optionValues array
    optionElements.forEach(opt => {
      if(opt == currentOption) {
        const currentVal = el.previousElementSibling;
        currentVal.innerText = parseInt(currentVal.innerText) + 1;
        updateValues(optionValueElements, optionValues, dropOut);
      }
    });
  } else if(el.classList.contains('input-box__dropdown-option-subtract')) {
    // const currentOption = el.closest('.input-box__dropdown-option');
    // which option was targeted??? splice to optionValues array
    // optionElements.forEach(opt => {
    //   if(opt == currentOption) {
      const currentVal = el.nextElementSibling;
      // subtract only if greater than 0
      if(parseInt(currentVal.innerText) > 0) {
        currentVal.innerText = parseInt(currentVal.innerText) - 1;
        updateValues(optionValueElements, optionValues, dropOut);
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
    sum.placeholder = valArr.reduce((a,b) => a + b);
    // change placeholder to default if sum is 0
    if(sum.placeholder == 0) {
      sum.placeholder = sum.dataset.placeholder;
    }
  });
}

// check if sum is not greater then room capacity

// disable - when 0 and + when full .drop-controll--disabled
