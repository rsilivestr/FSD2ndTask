import 'Components/form/--type/booking/booking';
import 'Components/form/--type/registration/registration';
import 'Components/form/--type/search-room/search-room';
import FSD2ndTaskDatepicker from 'Components/date-dropdown/FSD2ndTaskDatepicker';
import FSD2ndTaskRoomSlider from 'Components/room-card/FSD2ndTaskRoomSlider';

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
