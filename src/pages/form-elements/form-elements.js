import { FSD2ndTaskDatepicker } from 'CommonBlocks/date-dropdown/date-dropdown';
import { FSD2ndTaskRange } from 'CommonBlocks/range/range';
import { FSD2ndTaskMaskedDate } from 'CommonBlocks/masked-date/masked-date';
import { FSD2ndTaskDropdown } from 'CommonBlocks/dropdown/dropdown';
import { FSD2ndTaskSpoiler } from 'CommonBlocks/spoiler/spoiler';

new FSD2ndTaskDatepicker('.js-datepicker-double');

new FSD2ndTaskDatepicker('.js-datepicker-range', { range: true });

new FSD2ndTaskRange('.js-rangepicker');

new FSD2ndTaskMaskedDate('.js-masked-date');

new FSD2ndTaskDropdown(document.querySelector('.js-dropdown-1'));

new FSD2ndTaskDropdown(document.querySelector('.js-dropdown-2'), {
  type: 'multi',
});

const spoilers = Array.from(document.querySelectorAll('.js-spoiler'));

spoilers.forEach((spoiler) => {
  new FSD2ndTaskSpoiler(spoiler);
});
