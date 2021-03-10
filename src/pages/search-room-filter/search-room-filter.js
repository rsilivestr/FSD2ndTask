import Datepicker from 'Components/date-dropdown/Datepicker';
import Header from 'Components/header/Header';
import Rangepicker from 'Components/range/Rangepicker';
import Dropdown from 'Components/dropdown/Dropdown';
import RoomSlider from 'Components/room-card/RoomSlider';
import Spoiler from 'Components/spoiler/Spoiler';

new Header();

new Datepicker('.js-filter-datepicker', { range: true, size: 'm' });

new Rangepicker('.js-rangeslider');

new Dropdown('.js-guest-dropdown');

new Dropdown('.js-comfort-dropdown', { type: 'multi' });

Array.from(document.querySelectorAll('.room-card__photos')).forEach(
  (slider) => new RoomSlider(slider)
);

new Spoiler(document.querySelector('.js-spoiler'));
