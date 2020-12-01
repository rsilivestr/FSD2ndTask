import { FSD2ndTaskDatepicker } from 'CommonBlocks/date-dropdown/date-dropdown';
import { FSD2ndTaskRange } from 'Plugins/FSD2ndTaskRange';
import { FSD2ndTaskDropdown } from 'CommonBlocks/dropdown/dropdown';

new FSD2ndTaskDatepicker('.js-filter-datepicker', { range: true });

new FSD2ndTaskRange('.js-rangeslider');

new FSD2ndTaskDropdown('.js-guest-dropdown');

new FSD2ndTaskDropdown('.js-comfort-dropdown', { type: 'multi' });
