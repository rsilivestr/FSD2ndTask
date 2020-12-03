import 'CommonBlocks/form/--type/booking/booking';
import 'CommonBlocks/form/--type/registration/registration';
import 'CommonBlocks/form/--type/search-room/search-room';
import { FSD2ndTaskDatepicker } from 'CommonBlocks/date-dropdown/date-dropdown';
import { FSD2ndTaskRoomSlider } from 'CommonBlocks/room-card/room-card';

new FSD2ndTaskDatepicker('.js-datepicker-static');

const roomCardSliders = Array.from(
  document.querySelectorAll('.room-card__photos')
);
roomCardSliders.forEach((slider) => new FSD2ndTaskRoomSlider(slider));

// Get datepicker elements
const container = document.querySelector('.js-datepicker-static');
const picker = container.querySelector('.datepicker-inline');
// Force open datepicker
// Will close on apply anyway
picker.classList.add('datepicker-inline--visible');
// Edit styles
container.style.position = 'relative';
picker.style.position = 'relative';
picker.style.marginTop = '0';
