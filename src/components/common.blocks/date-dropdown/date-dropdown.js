import datepicker from 'air-datepicker'

// --- inputs --- //
const dateSingleSel = '.datepicker--single',
  dateRange = '.datepicker--range',
  today = new Date();

$(dateSingleSel).datepicker({
  minDate: today,
});



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