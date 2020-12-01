import 'CommonBlocks/form/--type/booking/booking';
import 'CommonBlocks/form/--type/registration/registration';
import 'CommonBlocks/form/--type/search-room/search-room';
import { FSD2ndTaskDatepicker } from 'CommonBlocks/date-dropdown/date-dropdown';
// import { FSD2ndTaskDropdown } from 'CommonBlocks/dropdown/dropdown';

new FSD2ndTaskDatepicker('.js-datepicker-static');

// Get elements
const container = document.querySelector('.js-datepicker-static');
const picker = container.querySelector('.datepicker');
// Force open datepicker
// Will close on apply anyway
picker.classList.add('form__datepicker--visible');
// Edit styles
container.style.position = 'relative';
picker.parentElement.style.position = 'relative';

// document.body.querySelectorAll('.dropdown--type_single')
//   .forEach(dropdown => new FSD2ndTaskDropdown(dropdown));
