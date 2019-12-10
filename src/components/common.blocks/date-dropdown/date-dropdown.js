import datepicker from 'air-datepicker'

const UIdatepickerSingle = document.querySelectorAll('.datepicker--single'),
  UIdatepickerRange = document.querySelectorAll('.datepicker--range'),
  UIdatepickerStatic = document.querySelectorAll('.datepicker--static');

const today = new Date(),
  monday = new Date(),
  friday = new Date();

  monday.setDate(today.getDate() + (7 + 1 - today.getDay()) % 7);
  friday.setDate(monday.getDate() + (7 + 5 - monday.getDay()) % 7);

$(UIdatepickerSingle).datepicker({
  prevHtml: '<i class="material-icons datepicker__arrow">arrow_back</i>',
  nextHtml: '<i class="material-icons datepicker__arrow">arrow_forward</i>',
  navTitles: {
    days: 'MM yyyy',
    months: 'yyyy',
    years: 'yyyy1 - yyyy2'
  },
  minDate: today,
  position: 'bottom center',
  autoClose: true,
});

$(UIdatepickerRange).datepicker({
  prevHtml: '<i class="material-icons datepicker__arrow">arrow_back</i>',
  nextHtml: '<i class="material-icons datepicker__arrow">arrow_forward</i>',
  navTitles: {
    days: 'MM yyyy',
    months: 'yyyy',
    years: 'yyyy1 - yyyy2'
  },
  minDate: today,
  multipleDates: 2,
  range: true,
  dateFormat: 'dd M',
  multipleDatesSeparator: ' — ',
  position: 'bottom center',
  autoClose: true,
});

const dpStatic = $(UIdatepickerStatic).datepicker({
  prevHtml: '<i class="material-icons datepicker__arrow">arrow_back</i>',
  nextHtml: '<i class="material-icons datepicker__arrow">arrow_forward</i>',
  navTitles: {
    days: 'MM yyyy',
    months: 'yyyy',
    years: 'yyyy1 - yyyy2'
  },
  multipleDates: 2,
  range: true,
}).data('datepicker');

dpStatic.selectDate([monday, friday]);






// import datepicker from 'js-datepicker'
// const UIdateDrops = document.querySelectorAll('.datepicker--single'),
//   UIdateRangeDrops = document.querySelectorAll('.date-dropdown--single');
// UIdateDrops.forEach(drop => {
//   $(drop).datepicker({
//     // formatter: (input, date, instance) => {
//     //   const value = date.toLocaleDateString('ru-RU');
//     //   input.value = value;
//     // }
//     // multipleDates: 2
//   });
// });

// UIdateRangeDrops.forEach((drop, index) => {
//   const start = datepicker(drop, {
//     id: index,
//     formatter: (input, date, instance) => {
//       const value = date.toLocaleDateString('ru-RU', {
//         day: 'numeric',
//         month: 'short',
//       });
//       input.value = value;
//     }
//   });
//   const end = datepicker('.qs-datepicker-container', {
//     id: index,
//     formatter: (input, date, instance) => {
//       const value = date.toLocaleDateString('ru-RU', {
//         day: 'numeric',
//         month: 'short',
//       });
//       input.value = value;
//     }
//   });
// });

// const picker = datepicker('.date-dropdown');