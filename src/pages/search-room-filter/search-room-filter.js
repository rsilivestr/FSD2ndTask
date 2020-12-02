import { FSD2ndTaskDatepicker } from 'CommonBlocks/date-dropdown/date-dropdown';
import { FSD2ndTaskRange } from 'CommonBlocks/range/range';
import { FSD2ndTaskDropdown } from 'CommonBlocks/dropdown/dropdown';
import { FSD2ndTaskRoomSlider } from 'CommonBlocks/room-card/room-card';

new FSD2ndTaskDatepicker('.js-filter-datepicker', { range: true });

new FSD2ndTaskRange('.js-rangeslider');

new FSD2ndTaskDropdown('.js-guest-dropdown');

new FSD2ndTaskDropdown('.js-comfort-dropdown', { type: 'multi' });

const roomCardSliders = Array.from(
  document.querySelectorAll('.room-card__photos')
);
roomCardSliders.forEach((slider) => new FSD2ndTaskRoomSlider(slider));
