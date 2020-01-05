// class names
const cname = {
  dropdown: 'dropdown',
  multi: 'dropdown--type_multi',
  single: 'dropdown--type_single',
  display: 'dropdown__display',
  open: 'dropdown--is-open',
  contents: 'dropdown__contents',
  visible: 'dropdown__contents--visible',
  option: 'dropdown__option',
  optionValue: 'dropdown__option-value',
  optionName: 'dropdown__option-name',
  control: 'dropdown__option-control',
  controlAdd: 'dropdown__option-control--add',
  controlSub: 'dropdown__option-control--subtract',
  controlDisabled: 'dropdown__option-control--disabled',
  btn: 'button',
  btnApply: 'dropdown__btn--apply',
  btnClear: 'dropdown__btn--clear',
  btnDisabled: 'hidden',
};

// class selector strings
const csel = {};
for (const key in cname) {
  // if (cname.hasOwnProperty(key)) {
  if (key) {
    const value = cname[key];
    csel[key] = '.' + value;
  }
}

const UIdrops = document.querySelectorAll(csel.dropdown),
  UIsingle = document.querySelectorAll(csel.single),
  UImulti = document.querySelectorAll(csel.multi),
  UIoptions = document.querySelectorAll(csel.option);

// initialize dropdowns' states
updateOptionControls();
updateDisplay();

// listen to clicks
document.body.addEventListener('mousedown', toggleDropdown);

// function to handle any dropdown click interactions
function toggleDropdown(e) {
  // when dropdown display is clicked
  if(e.target.classList.contains(cname.display)) {
    const UIcurrent = e.target.parentElement;
    // close all dropdowns other than targeted
    UIdrops.forEach(drop => {
      if(drop !== UIcurrent) {
        drop.classList.remove(cname.open);
        drop.querySelector(csel.contents).classList.remove(cname.visible);
      }
    });
    // toggle clicked dropdown
    UIcurrent.classList.toggle(cname.open);
    // show contents
    e.target.nextElementSibling.classList.toggle(cname.visible);
  // when dropdown-content is clicked
  } else if (e.target.closest(csel.contents)) {
    // when control (add / subtract) is clicked
    if(e.target.classList.contains(cname.control)) {
      updateOption(e.target);
      if (e.target.closest(csel.multi)) {
        updateDisplay(e.target.closest(csel.multi));
      }
    } else if (e.target.classList.contains(cname.btnApply)) {
      // if apply button clicked
      updateSingleValDisplay(e.target.closest(csel.dropdown));
    } else if (e.target.classList.contains(cname.btnClear)) {
      // if clear button clicked
      e.target.closest(csel.dropdown).querySelectorAll(csel.optionValue).forEach( opt => opt.innerText = 0);
      updateDisplay(e.target.closest(csel.dropdown));
    }
  } else {
    // close any and all dropdowns if none targeted
    UIdrops.forEach(drop => {
      drop.classList.remove(cname.open);
      drop.querySelector(csel.contents).classList.remove(cname.visible);
    });
  }
}

// update option value on control click
function updateOption(btn) {
  const opt = btn.parentElement,
    min = opt.dataset.min ? opt.dataset.min: 0,
    max = opt.dataset.max ? opt.dataset.max : 99,
    action = btn.classList.contains(cname.controlAdd) ? 'add' : 'subtract',
    UIvalue = opt.querySelector(csel.optionValue);
  let currentValue = UIvalue.innerText;
  if (action == 'subtract' && +currentValue > +min) {
    currentValue--;
    UIvalue.innerText = currentValue;
    updateOptionControls(opt);
  } else if (action == 'add' && +currentValue < +max) {
    currentValue++;
    UIvalue.innerText = currentValue;
    updateOptionControls(opt);
  }
}

// choose how to update controls state
function updateOptionControls(opt = null) {
  if (opt) {
    // update single option if invoked with parameter
    updateSingleOptionControls(opt);
  } else {
    // update values in all dropdowns, e.g. on load
    UIoptions.forEach(opt => updateSingleOptionControls(opt));
  }
}

// enable or disable option controls "+" & "-"
function updateSingleOptionControls(opt) {
  const UIsub = opt.querySelector(csel.controlSub),
    UIadd = opt.querySelector(csel.controlAdd),
    UIvalue = opt.querySelector(csel.optionValue),
    cur = +UIvalue.innerText,
    min = opt.dataset.min ? +opt.dataset.min : 0,
    max = opt.dataset.max ? +opt.dataset.max : 99;
  if(cur == min) {
    UIsub.classList.add(cname.controlDisabled);
  } else {
    UIsub.classList.remove(cname.controlDisabled);
  }
  if(cur == max) {
    UIadd.classList.add(cname.controlDisabled);
  } else {
    UIadd.classList.remove(cname.controlDisabled);
  }
}

// select funtcion to update display
function updateDisplay(drop) {
  if (drop) {
    if (drop.classList.contains(cname.multi)) {
      updateMultiValDisplay(drop);
    } else if (drop.classList.contains(cname.single)) {
      updateSingleValDisplay(drop);
    }
  } else {
    UImulti.forEach(drop => updateMultiValDisplay(drop));
    UIsingle.forEach(drop => updateSingleValDisplay(drop));
  }
}

// update display with separated option values
function updateMultiValDisplay(drop) {
  let out = '';
  drop.querySelectorAll(csel.option).forEach((opt, index) => {
    const value = opt.querySelector(csel.optionValue).innerText;
    let name;
    // set valid word case
    if (value % 10 == 1 && value != 11) {
      // cases of 111 and further are not addressed
      // later try: value.slice(-2) != '11'
      name = opt.dataset.single;
    } else if ((value % 10 < 5 && value < 5) || (value % 10 < 5 && value > 21)) {
      name = opt.dataset.few;
    } else {
      name = opt.dataset.many;
    }
    if (index < 1) {
      out += `${value} ${name}, `;
    } else if (index < 2) {
      out += `${value} ${name}...`;
    }
  });
  drop.querySelector(csel.display).value = out.toLowerCase();
}

// update display with single value of options sum
function updateSingleValDisplay(drop) {
  let guestCount = 0, guestCase;
  // count option values sum
  drop.querySelectorAll(csel.option).forEach(opt => {
    guestCount += +opt.querySelector(csel.optionValue).innerText;
  });
  // set valid word case
  if (guestCount % 10 == 1 && guestCount != 11) {
    // 111
    guestCase = 'гость';
  } else if ((guestCount % 10 < 5 && guestCount < 5) || (guestCount % 10 < 5 && guestCount > 21)) {
    guestCase = 'гостя';
  } else {
    guestCase = 'гостей';
  }
  drop.querySelector(csel.display).value = `${guestCount} ${guestCase}`;
  if (guestCount > 0) {
    drop.querySelector(csel.btnClear).classList.remove(cname.btnDisabled);
  } else {
    drop.querySelector(csel.btnClear).classList.add(cname.btnDisabled);
    drop.querySelector(csel.display).value = '';
  }
}