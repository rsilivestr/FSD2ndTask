import { FSD2ndTaskDatepicker } from 'CommonBlocks/date-dropdown/date-dropdown';
import { FSD2ndTaskRange } from 'Plugins/FSD2ndTaskRange';
import { FSD2ndTaskMaskedDate } from 'Plugins/FSD2ndTaskMaskedDate';
import { FSD2ndTaskDropdown } from 'CommonBlocks/dropdown/dropdown';

new FSD2ndTaskDatepicker('.js-datepicker-double');

new FSD2ndTaskDatepicker('.js-datepicker-range', { range: true });

new FSD2ndTaskRange('.js-rangepicker');

new FSD2ndTaskMaskedDate('.js-masked-date');

new FSD2ndTaskDropdown(document.querySelector('.js-dropdown-1'));

new FSD2ndTaskDropdown(document.querySelector('.js-dropdown-2'), {
  type: 'multi',
});
