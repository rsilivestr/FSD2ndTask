import { FSD2ndTaskDatepicker } from 'Plugins/FSD2ndTaskDatepicker';
import { FSD2ndTaskRange } from 'Plugins/FSD2ndTaskRange';

if (document.querySelector('.page--layout_search-filter')) {
  new FSD2ndTaskDatepicker('.js-filter-datepicker', { range: true });

  new FSD2ndTaskRange('.js-rangeslider');
}
