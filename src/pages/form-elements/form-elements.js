import { FSD2ndTaskDatepicker } from 'Plugins/FSD2ndTaskDatepicker';

if (document.querySelector('.page--layout_form-elements')) {
  new FSD2ndTaskDatepicker('.js-datepicker-double');

  new FSD2ndTaskDatepicker('.js-datepicker-range', { range: true });
}
