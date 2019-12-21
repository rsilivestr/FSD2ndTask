import datepicker from 'air-datepicker'


//---- double dropdown: 2 dates in different inputs ----//

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
      classes: 'form__datepicker datepicker--size_l'
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

    picker.addEventListener('click', e => {
      // if UIdatepickerStart or UIdatepickerEnd is targeted
      if (e.target.classList.contains('date-dropdown__display')) {
        // close other pickers
        document.querySelectorAll('.form__datepicker--visible').forEach(openPicker => {
          openPicker.classList.remove('form__datepicker--visible');
        });
        // open current picker
        UIdatepickerCalendar.classList.add('form__datepicker--visible');
      } else if (e.target.classList.contains('datepicker__clear-btn')) {
        // prevent form submit
        e.preventDefault();
        // clear calendar
        pickerObject.clear();
        // clear input fields
        UIdatepickerStart.value = '';
        UIdatepickerEnd.value = '';
      } else if (e.target.classList.contains('datepicker__apply-btn')) {
        // prevent form submit
        e.preventDefault();
        // get selected dates
        const dates = pickerObject.selectedDates;
        // formant and append dates if set
        if(dates[0]) {
          const startDateString = dates[0].toLocaleDateString('ru-RU');
          UIdatepickerStart.value = startDateString;
        } else {
          UIdatepickerStart.value = '';
        }
        if(dates[1]) {
          const endDateString = dates[1].toLocaleDateString('ru-RU');
          UIdatepickerEnd.value = endDateString;
        } else {
          UIdatepickerEnd.value = '';
        }
        // close calendar
        if(dates[0] && dates[1]) {
          UIdatepickerCalendar.classList.remove('form__datepicker--visible');
        }
      }
    });

    // close if clicked outside
    document.body.addEventListener('click', e => {
      if (
        // could not capture all insides with closest so here we go
        !e.target.closest('.date-dropdown') &&
        !e.target.closest('.datepicker') &&
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


//---- uikit static datepicker ----//

const UImountPointForReallyStaticAirDatepickerOnCardsPage = document.querySelector('.mount-point-for-really-static-air-datepicker-on-cards-page');

const today = new Date(),
  monday = new Date(),
  friday = new Date();

monday.setDate(today.getDate() + (7 + 1 - today.getDay()) % 7);
friday.setDate(monday.getDate() + (7 + 5 - monday.getDay()) % 7);

if (UImountPointForReallyStaticAirDatepickerOnCardsPage) {
  // preset dates
  const today = new Date(),
    monday = new Date(),
    friday = new Date();
  
  monday.setDate(today.getDate() + (7 + 1 - today.getDay()) % 7);
  friday.setDate(monday.getDate() + (7 + 5 - monday.getDay()) % 7);

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
    classes: 'really-static-air-datepicker-on-cards-page datepicker--size_l'
  }).data('datepicker');
  
  // set date
  reallyStaticAirDatepickerOnCardsPage.selectDate([monday, friday]);
}


//---- range dropdown: 2 dates in single input ----//

const UIrangePicker = document.querySelectorAll('.datepicker-range');

if (UIrangePicker) {
  UIrangePicker.forEach(picker => {
    $(picker).datepicker({
      prevHtml: '<i class="material-icons datepicker__arrow">arrow_back</i>',
      nextHtml: '<i class="material-icons datepicker__arrow">arrow_forward</i>',
      navTitles: {
        days: 'M yyyy',
        months: 'yyyy',
        years: 'yyyy1 - yyyy2'
      },
      multipleDates: 2,
      range: true,
      dateFormat: 'dd M',
      multipleDatesSeparator: ' - ',
      classes: 'datepicker--size_m'
    });
  });
}