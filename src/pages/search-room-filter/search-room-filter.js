import { FSD2ndTaskDatepicker } from 'CommonBlocks/date-dropdown/date-dropdown';
import { FSD2ndTaskRange } from 'CommonBlocks/range/range';
import { FSD2ndTaskDropdown } from 'CommonBlocks/dropdown/dropdown';
import { FSD2ndTaskRoomSlider } from 'CommonBlocks/room-card/room-card';
import { FSD2ndTaskSpoiler } from 'CommonBlocks/spoiler/spoiler';

new FSD2ndTaskDatepicker('.js-filter-datepicker', { range: true, size: 'm' });

new FSD2ndTaskRange('.js-rangeslider');

new FSD2ndTaskDropdown('.js-guest-dropdown');

new FSD2ndTaskDropdown('.js-comfort-dropdown', { type: 'multi' });

Array.from(document.querySelectorAll('.room-card__photos')).forEach(
  (slider) => new FSD2ndTaskRoomSlider(slider)
);

new FSD2ndTaskSpoiler(document.querySelector('.js-spoiler'));
