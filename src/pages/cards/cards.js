import { FSD2ndTaskDatepicker } from 'Plugins/FSD2ndTaskDatepicker';

if (document.body.classList.contains('page--layout_cards')) {
  new FSD2ndTaskDatepicker('.js-datepicker-static');

  // Get elements
  const container = document.querySelector('.js-datepicker-static');
  const picker = container.querySelector('.datepicker');
  // Force open datepicker
  // Will close on apply anyway
  picker.classList.add('form__datepicker--visible');
  // Edit styles
  container.style.position = 'relative';
  picker.parentElement.style.position = 'relative';
}
