// const FSD2ndTaskDropdown = (() => {
//   // class names
//   const CNAME = {
//     dropdown: 'dropdown',
//     multi: 'dropdown--type_multi',
//     single: 'dropdown--type_single',
//     display: 'dropdown__display',
//     open: 'dropdown--is-open',
//     contents: 'dropdown__contents',
//     visible: 'dropdown__contents--visible',
//     option: 'dropdown__option',
//     optionValue: 'dropdown__option-value',
//     optionName: 'dropdown__option-name',
//     control: 'dropdown__option-control',
//     controlAdd: 'dropdown__option-control--add',
//     controlSub: 'dropdown__option-control--subtract',
//     controlDisabled: 'dropdown__option-control--disabled',
//     btn: 'button',
//     btnApply: 'dropdown__btn--apply',
//     btnClear: 'dropdown__btn--clear',
//     btnDisabled: 'hidden',
//   };

//   // class selector strings
//   const CSEL = {};
//   for (const key in CNAME) {
//     // if (CNAME.hasOwnProperty(key)) {
//     if (key) {
//       const value = CNAME[key];
//       CSEL[key] = `.${value}`;
//     }
//   }

//   const UIdrops = document.querySelectorAll(CSEL.dropdown);
//   const UIsingle = document.querySelectorAll(CSEL.single);
//   const UImulti = document.querySelectorAll(CSEL.multi);
//   const UIoptions = document.querySelectorAll(CSEL.option);

//   const closeDrop = (drop) => {
//     drop.classList.remove(CNAME.open);
//     drop.querySelector(CSEL.contents).classList.remove(CNAME.visible);
//   };

//   // function to handle any dropdown click interactions
//   function toggleDropdown(e) {
//     // when dropdown display is clicked
//     if (e.target.classList.contains(CNAME.display)) {
//       const UIcurrent = e.target.parentElement;
//       // close all dropdowns other than targeted
//       UIdrops.forEach((drop) => {
//         if (drop !== UIcurrent) {
//           closeDrop(drop);
//         }
//       });
//       // toggle clicked dropdown
//       UIcurrent.classList.toggle(CNAME.open);
//       // show contents
//       e.target.nextElementSibling.classList.toggle(CNAME.visible);
//       // when dropdown-content is clicked
//     } else if (e.target.closest(CSEL.contents)) {
//       // when control (add / subtract) is clicked
//       if (e.target.classList.contains(CNAME.control)) {
//         updateOption(e.target);
//         if (e.target.closest(CSEL.multi)) {
//           updateDisplay(e.target.closest(CSEL.multi));
//         }
//       } else if (e.target.classList.contains(CNAME.btnApply)) {
//         // if apply button clicked
//         const parentDrop = e.target.closest(CSEL.dropdown);
//         updateSingleValDisplay(parentDrop);
//         closeDrop(parentDrop);
//       } else if (e.target.classList.contains(CNAME.btnClear)) {
//         // if clear button clicked
//         e.target
//           .closest(CSEL.dropdown)
//           .querySelectorAll(CSEL.optionValue)
//           .forEach((opt) => (opt.innerText = 0));
//         updateDisplay(e.target.closest(CSEL.dropdown));
//       }
//     } else {
//       // close any and all dropdowns if none targeted
//       UIdrops.forEach((drop) => closeDrop(drop));
//     }
//   }

//   // update option value on control click
//   function updateOption(btn) {
//     const opt = btn.parentElement,
//       min = opt.dataset.min || 0,
//       max = opt.dataset.max || 99,
//       action = btn.classList.contains(CNAME.controlAdd) ? 'add' : 'subtract',
//       UIvalue = opt.querySelector(CSEL.optionValue);
//     let currentValue = UIvalue.innerText;
//     if (action == 'subtract' && +currentValue > +min) {
//       currentValue--;
//       UIvalue.innerText = currentValue;
//       updateOptionControls(opt);
//     } else if (action == 'add' && +currentValue < +max) {
//       currentValue++;
//       UIvalue.innerText = currentValue;
//       updateOptionControls(opt);
//     }
//   }

//   // choose how to update controls state
//   function updateOptionControls(opt = null) {
//     if (opt) {
//       // update single option if invoked with parameter
//       updateSingleOptionControls(opt);
//     } else {
//       // update values in all dropdowns, e.g. on load
//       UIoptions.forEach((opt) => updateSingleOptionControls(opt));
//     }
//   }

//   // enable or disable option controls "+" & "-"
//   function updateSingleOptionControls(opt) {
//     const UIsub = opt.querySelector(CSEL.controlSub),
//       UIadd = opt.querySelector(CSEL.controlAdd),
//       UIvalue = opt.querySelector(CSEL.optionValue),
//       cur = +UIvalue.innerText,
//       min = opt.dataset.min || 0,
//       max = opt.dataset.max || 99;
//     if (cur == min) {
//       UIsub.classList.add(CNAME.controlDisabled);
//     } else {
//       UIsub.classList.remove(CNAME.controlDisabled);
//     }
//     if (cur == max) {
//       UIadd.classList.add(CNAME.controlDisabled);
//     } else {
//       UIadd.classList.remove(CNAME.controlDisabled);
//     }
//   }

//   // select funtcion to update display
//   function updateDisplay(drop) {
//     if (drop) {
//       if (drop.classList.contains(CNAME.multi)) {
//         updateMultiValDisplay(drop);
//       } else if (drop.classList.contains(CNAME.single)) {
//         updateSingleValDisplay(drop);
//       }
//     } else {
//       UImulti.forEach((drop) => updateMultiValDisplay(drop));
//       UIsingle.forEach((drop) => updateSingleValDisplay(drop));
//     }
//   }

//   // update display with separated option values
//   function updateMultiValDisplay(drop) {
//     let out = '';
//     drop.querySelectorAll(CSEL.option).forEach((opt, index) => {
//       const value = opt.querySelector(CSEL.optionValue).innerText;
//       let name;
//       // set valid word case
//       if (value % 10 == 1 && value != 11) {
//         // cases of 111 and further are not addressed
//         name = opt.dataset.single;
//       } else if (
//         (value % 10 < 5 && value < 5) ||
//         (value % 10 < 5 && value > 21)
//       ) {
//         name = opt.dataset.few;
//       } else {
//         name = opt.dataset.many;
//       }
//       if (index < 1) {
//         out += `${value} ${name}, `;
//       } else if (index < 2) {
//         out += `${value} ${name}...`;
//       }
//     });
//     drop.querySelector(CSEL.display).value = out.toLowerCase();
//   }

//   // update display with single value of options sum
//   function updateSingleValDisplay(drop) {
//     let guestCount = 0,
//       guestCase;
//     // count option values sum
//     drop.querySelectorAll(CSEL.option).forEach((opt) => {
//       guestCount += +opt.querySelector(CSEL.optionValue).innerText;
//     });
//     // set valid word case
//     if (guestCount % 10 == 1 && guestCount != 11) {
//       // 111
//       guestCase = 'гость';
//     } else if (
//       (guestCount % 10 < 5 && guestCount < 5) ||
//       (guestCount % 10 < 5 && guestCount > 21)
//     ) {
//       guestCase = 'гостя';
//     } else {
//       guestCase = 'гостей';
//     }
//     drop.querySelector(CSEL.display).value = `${guestCount} ${guestCase}`;
//     if (guestCount > 0) {
//       drop.querySelector(CSEL.btnClear).classList.remove(CNAME.btnDisabled);
//     } else {
//       drop.querySelector(CSEL.btnClear).classList.add(CNAME.btnDisabled);
//       drop.querySelector(CSEL.display).value = '';
//     }
//   }

//   const init = () => {
//     // initialize dropdowns' states
//     updateOptionControls();
//     updateDisplay();

//     // listen to clicks
//     document.body.addEventListener('mousedown', toggleDropdown);
//   };
//   return { init };
// })();

// FSD2ndTaskDropdown.init();
