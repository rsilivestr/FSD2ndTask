//---- air datepicker ----//
import datepicker from 'air-datepicker'

const today = new Date(),
monday = new Date(),
friday = new Date();

monday.setDate(today.getDate() + (7 + 1 - today.getDay()) % 7);
friday.setDate(monday.getDate() + (7 + 5 - monday.getDay()) % 7);

// const UIdatepickerSingle = document.querySelectorAll('.datepicker--single'),
//   UIdatepickerRange = document.querySelectorAll('.datepicker--range'),
//   UIdatepickerStatic = document.querySelectorAll('.datepicker--static'),
const UImountPointForReallyStaticAirDatepickerOnCardsPage = document.querySelectorAll('.mount-point-for-really-static-air-datepicker-on-cards-page');

// $(UIdatepickerSingle).datepicker({
//   prevHtml: '<i class="material-icons datepicker__arrow">arrow_back</i>',
//   nextHtml: '<i class="material-icons datepicker__arrow">arrow_forward</i>',
//   navTitles: {
//     days: 'MM yyyy',
//     months: 'yyyy',
//     years: 'yyyy1 - yyyy2'
//   },
//   minDate: today,
//   position: 'bottom center',
//   autoClose: true,
// });

// $(UIdatepickerRange).datepicker({
//   prevHtml: '<i class="material-icons datepicker__arrow">arrow_back</i>',
//   nextHtml: '<i class="material-icons datepicker__arrow">arrow_forward</i>',
//   navTitles: {
//     days: 'MM yyyy',
//     months: 'yyyy',
//     years: 'yyyy1 - yyyy2'
//   },
//   minDate: today,
//   multipleDates: 2,
//   range: true,
//   dateFormat: 'dd M',
//   multipleDatesSeparator: ' — ',
//   position: 'bottom center',
//   autoClose: true,
// });

// const dpStatic = $(UIdatepickerStatic).datepicker({
//   prevHtml: '<i class="material-icons datepicker__arrow">arrow_back</i>',
//   nextHtml: '<i class="material-icons datepicker__arrow">arrow_forward</i>',
//   navTitles: {
//     days: 'MM yyyy',
//     months: 'yyyy',
//     years: 'yyyy1 - yyyy2'
//   },
//   multipleDates: 2,
//   range: true,
// }).data('datepicker');

// if(dpStatic) dpStatic.selectDate([monday, friday]);





const UIdoublePickers = document.querySelectorAll('.datepicker-double');

if (UIdoublePickers) {
    // for each instanse of double date dropdown
  UIdoublePickers.forEach(picker => {
    
    const UIdatepickerStart = picker.querySelector('.date-dropdown__start'),
      UIdatepickerEnd = picker.querySelector('.date-dropdown__end');

    $(picker).datepicker({
      prevHtml: '<i class="material-icons datepicker__arrow">arrow_back</i>',
      nextHtml: '<i class="material-icons datepicker__arrow">arrow_forward</i>',
      navTitles: {
        days: 'MM yyyy',
        months: 'yyyy',
        years: 'yyyy1 - yyyy2'
      },
      multipleDates: 2,
      range: true,
      classes: 'form__datepicker'
    });

    // get created datepicker block
    const UIdatepickerCalendar = picker.querySelector('.form__datepicker');

    // get datapicker object to call functions
    const pickerObject = $(picker).datepicker().data('datepicker');

    // append buttons
    const buttonsPanel = document.createElement('div');
    buttonsPanel.className = 'datepicker__buttons-panel';
    UIdatepickerCalendar.appendChild(buttonsPanel);

    const clearBtn = document.createElement('button');
    clearBtn.className = 'button button--style_text button--size_auto datepicker__clear-btn';
    clearBtn.innerText = 'очистить';
    buttonsPanel.appendChild(clearBtn);

    const applyBtn = document.createElement('button');
    applyBtn.className = 'button button--style_text button--size_auto datepicker__apply-btn';
    applyBtn.innerText = 'применить';
    buttonsPanel.appendChild(applyBtn);

    document.body.addEventListener('click', e => {
      // if UIdatepickerStart or UIdatepickerEnd is targeted
      if (e.target.classList.contains('date-dropdown__display')) {
        UIdatepickerCalendar.classList.add('form__datepicker--visible');
      } else if (e.target.classList.contains('datepicker__clear-btn')) {
        // clear calendar
        pickerObject.clear();
        // clear input fields
        UIdatepickerStart.value = '';
        UIdatepickerEnd.value = '';
      } else if (e.target.classList.contains('datepicker__apply-btn')) {
        // get selected dates
        const dates = pickerObject.selectedDates;
        // formant and append dates
        const startDateString = dates[0].toLocaleDateString('ru-RU');
        UIdatepickerStart.value = startDateString;
        const endDateString = dates[1].toLocaleDateString('ru-RU');
        UIdatepickerEnd.value = endDateString;
        // close calendar
        UIdatepickerCalendar.classList.remove('form__datepicker--visible');
      } else if (
        // could not capture all insides with closest so here we go
        !e.target.classList.contains('datepicker--nav') &&
        !e.target.classList.contains('datepicker--nav-title') &&
        !e.target.classList.contains('datepicker--nav-action') &&
        !e.target.classList.contains('datepicker__arrow') &&
        !e.target.classList.contains('datepicker--cells') &&
        !e.target.classList.contains('datepicker--cell') &&
        !e.target.classList.contains('datepicker--day-name') &&
        !e.target.classList.contains('datepicker--content') &&
        !e.target.classList.contains('datepicker__buttons-panel')
      ) {
        UIdatepickerCalendar.classList.remove('form__datepicker--visible');
      }
    });
  });
}


const reallyStaticAirDatepickerOnCardsPage = $(UImountPointForReallyStaticAirDatepickerOnCardsPage).datepicker({
  prevHtml: '<i class="material-icons datepicker__arrow">arrow_back</i>',
  nextHtml: '<i class="material-icons datepicker__arrow">arrow_forward</i>',
  navTitles: {
    days: 'MM yyyy',
    months: 'yyyy',
    years: 'yyyy1 - yyyy2'
  },
  multipleDates: 2,
  range: true,
  // this classes apply to the '.datepicker' container which is inside '.datepicker-static' container
  classes: 'really-static-air-datepicker-on-cards-page',
}).data('datepicker');

if(UImountPointForReallyStaticAirDatepickerOnCardsPage) {
  reallyStaticAirDatepickerOnCardsPage.selectDate([monday, friday]);
}