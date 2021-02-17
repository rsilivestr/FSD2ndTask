import FSD2ndTaskDatepicker from 'Components/date-dropdown/FSD2ndTaskDatepicker';
import FSD2ndTaskRange from 'Components/range/FSD2ndTaskRange';
import FSD2ndTaskDropdown from 'Components/dropdown/FSD2ndTaskDropdown';
import FSD2ndTaskRoomSlider from 'Components/room-card/FSD2ndTaskRoomSlider';
import FSD2ndTaskSpoiler from 'Components/spoiler/FSD2ndTaskSpoiler';

new FSD2ndTaskDatepicker('.js-filter-datepicker', { range: true, size: 'm' });

new FSD2ndTaskRange('.js-rangeslider');

new FSD2ndTaskDropdown('.js-guest-dropdown');

new FSD2ndTaskDropdown('.js-comfort-dropdown', { type: 'multi' });

Array.from(document.querySelectorAll('.room-card__photos')).forEach(
  (slider) => new FSD2ndTaskRoomSlider(slider)
);

new FSD2ndTaskSpoiler(document.querySelector('.js-spoiler'));
