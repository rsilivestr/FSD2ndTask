import { FSD2ndTaskDatepicker } from 'Plugins/FSD2ndTaskDatepicker';
import { FSD2ndTaskRange } from 'Plugins/FSD2ndTaskRange';
import { FSD2ndTaskMaskedDate } from 'Plugins/FSD2ndTaskMaskedDate';

if (document.querySelector('.page--layout_form-elements')) {
  new FSD2ndTaskDatepicker('.js-datepicker-double');

  new FSD2ndTaskDatepicker('.js-datepicker-range', { range: true });

  new FSD2ndTaskRange('.js-rangepicker');

  new FSD2ndTaskMaskedDate('.js-masked-date');
}
