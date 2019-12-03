const wrapClass = 'dropdown',
      displayClass = 'dropdown__display',
      openClass = 'dropdown--is-open',
      contentsClass = 'dropdown__contents',
      contentsVisibleClass = 'dropdown__contents--visible',
      optionClass = 'dropdown__option',
      optValClass = 'dropdown__option-value',
      optTitleClass = 'dropdown__option-name',
      controlClass = 'dropdown__option-control',
      addBtnClass = 'dropdown__option-control--add',
      subtractBtnClass = 'dropdown__option-control--subtract',
      disabledBtnClass = 'dropdown__option-control--disabled',
      discreteOutClass = 'dropdown--type_discrete',
      singleOutClass = 'dropdown--type_single',
      btnClass = 'button',
      applyBtnClass = 'dropdown__btn--apply',
      clearBtnClass = 'dropdown__btn--clear',
      UIdrops = document.querySelectorAll('.' + wrapClass);

document.body.addEventListener('mousedown', toggleDropdown);

function toggleDropdown(e) {
  // if dropdown display is clicked
  if(e.target.classList.contains(displayClass)) {
    const UIcurrent = e.target.parentElement;
    const UIconts = e.target.nextElementSibling;
    // close all dropdowns other than targeted
    UIdrops.forEach(drop => {
      if(drop !== UIcurrent) {
        drop.classList.remove(openClass);
        drop.querySelector('.' + contentsClass).classList.remove(contentsVisibleClass);
      }
    });
    // toggle clicked dropdown
    UIcurrent.classList.toggle(openClass);
    UIconts.classList.toggle(contentsVisibleClass);
  // when dropdown-content is clicked
  } else if (e.target.closest('.' + contentsClass)) {


    // when control (add / subtract) is clicked
    if(e.target.classList.contains(controlClass)) {
      updateOption(e.target);
      if (e.target.closest('.' + discreteOutClass)) {
    

        




        // count details (bedrooms, beds)
        discreteUpdateDisplay(e.target);









      } else if (e.target.closest('.' + singleOutClass)) {
    
        
        // count guests (with apply, clear buttons)
        countSingle(e.target);


      }


    } else if (e.target.classList.contains('.' + btnClass)) {
      console.log('drop btn');


    }
  } else {
    // close any and all dropdowns if none targeted
    UIdrops.forEach(drop => {
      drop.classList.remove(openClass);
      drop.querySelector('.' + contentsClass).classList.remove(contentsVisibleClass);
    });
  }
}

function updateOption(btn) {
  // get option, its min, max and current values, button action
  const opt = btn.parentElement,
        minValue = opt.dataset.min ? opt.dataset.min: 0,
        maxValue = opt.dataset.max ? opt.dataset.max : 99,
        action = btn.classList.contains(addBtnClass) ? 'add' : 'subtract',
        // UIvalue = btn.nextElementSibling ? btn.nextElementSibling : btn.previousElementSibling;
        UIvalue = opt.querySelector('.' + optValClass);
  let currentValue = UIvalue.innerText,


        isDisplaySingle = btn.closest('.' + wrapClass).classList.contains(singleOutClass);


  if (action == 'subtract' && parseInt(currentValue) > parseInt(minValue)) {
    currentValue--;
    UIvalue.innerText = currentValue;
    updateValues(opt)
  } else if (action == 'add' && parseInt(currentValue) < parseInt(maxValue)) {
    currentValue++
    UIvalue.innerText = currentValue;
    updateValues(opt)
  }
  if (!isDisplaySingle) {
    // console.log('discrete');
    // const value = 
  } else {
    // console.log('single');
  }
}

// enable & disable controls on min / max value
// function updateValue(opt, min, max, cur) {
//   const UIsubtract = opt.querySelector('.' + subtractBtnClass),
//         UIadd = opt.querySelector('.' + addBtnClass)
//   if(cur == min) {
//     UIsubtract.classList.add(disabledBtnClass);
//   } else {
//     UIsubtract.classList.remove(disabledBtnClass);
//   }
//   if(cur == max) {
//     UIadd.classList.add(disabledBtnClass);
//   } else {
//     UIadd.classList.remove(disabledBtnClass);
//   }
// }

function updateValues(opt = null) {
  if (opt) {
    // update single option
    updateSingleOption(opt);
  } else {
    // update values in all dropdowns
    const UIdrops = document.querySelectorAll('.' + discreteOutClass);
    UIdrops.forEach(drop => {
      const UIopts = drop.querySelectorAll('.' + optionClass);
      UIopts.foreach(opt => updateSingleOption(opt));
    });
  }
}

function updateSingleOption(opt) {
  // check dropdown type here
  const UIsub = opt.querySelector('.' + subtractBtnClass),
        UIadd = opt.querySelector('.' + addBtnClass),
        UIvalue = opt.querySelector('.' + optValClass),
        cur = parseInt(UIvalue.innerText),
        min = opt.dataset.min ? parseInt(opt.dataset.min) : 0,
        max = opt.dataset.max ? parseInt(opt.dataset.max) : 99;
  if(cur == min) {
    UIsub.classList.add(disabledBtnClass);
  } else {
    UIsub.classList.remove(disabledBtnClass);
  }
  if(cur == max) {
    UIadd.classList.add(disabledBtnClass);
  } else {
    UIadd.classList.remove(disabledBtnClass);
  }
}




function discreteUpdateDisplay(el) {
  const UIdrop = el.closest('.' + wrapClass),
  UIdisplay = UIdrop.querySelector('.' + displayClass),
  UIoptions = UIdrop.querySelectorAll('.' + optionClass);
  let string = '';
  UIoptions.forEach((opt, index) => {
  
    let value = opt.querySelector('.' + optValClass).innerText;
    let name;
    if (value % 10 == '1' && value != 11) {
      name = opt.dataset.single;
    } else if ((value % 10 < 5 && value < 5) || (value % 10 < 5 && value > 21)) {
      name = opt.dataset.few;
    } else {
      name = opt.dataset.many;
    }
    if (index < 1) {
      string += `${value} ${name}, `;
    } else if (index < 2) {
      string += `${value} ${name}...`;
    }
  });
  UIdisplay.value = string.toLowerCase();
}





// function countSingle(opt) {
//   console.log('countSingle');
// }


































// // handle subtraction / addition of values
// function changeDropdown(el) {
//   // define drop contents
//   const UIconts = el.closest('.' + contentsClass);
//   // define main OUTPUT (.input-box__input--dropdown)
//   const UIdisplay = UIconts.previousElementSibling;
//   // defune array of option elements
//   const opts = [];
//   // populate array
//   UIconts.querySelectorAll('.' + optionClass).forEach(opt => {
//     opts.push(opt);
//   });
//   // define array of option values
//   const optionValues = [];
//   // populate array with option values
//   // separate function for array and sum?
//   const optionValueElements = UIconts.querySelectorAll('.' + optValClass);
//   // handle addition
//   if(el.classList.contains(addBtnClass)) {
//     const currentOption = el.closest('.' + optionClass);
//     // which option was targeted??? splice to optionValues array
//     opts.forEach(opt => {
//       if(opt == currentOption) {
//         const currentVal = el.previousElementSibling;
//         currentVal.innerText = parseInt(currentVal.innerText) + 1;
//         updateValues(optionValueElements, optionValues, UIdisplay);
//       }
//     });
//   } else if(el.classList.contains(subtractBtnClass)) {
//     // const currentOption = el.closest('.input-box__dropdown-option');
//     // which option was targeted??? splice to optionValues array
//     // opts.forEach(opt => {
//     //   if(opt == currentOption) {
//       const currentVal = el.nextElementSibling;
//       // subtract only if greater than 0
//       if(parseInt(currentVal.innerText) > 0) {
//         currentVal.innerText = parseInt(currentVal.innerText) - 1;
//         updateValues(optionValueElements, optionValues, UIdisplay);
//       }
//     //   }
//     // });
//   }
// }

// function updateValues(elArr, valArr, sum) {
//   elArr.forEach(elem => {
//     // update options values
//     valArr.push(parseInt(elem.innerText));
//     // display sum of options array
//     sum.value = valArr.reduce((a,b) => a + b);
//     // change placeholder to default if sum is 0
//     if(sum.value == 0) {
//       // sum.value = sum.dataset.placeholder;
//       sum.value = '';
//     }
//   });
// }

// check if sum is not greater then room capacity

// disable - when 0 and + when full .drop-controll--disabled
