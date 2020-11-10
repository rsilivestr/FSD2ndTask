import { FSD2ndTaskDatepicker } from 'Plugins/FSD2ndTaskDatepicker';
import { FSD2ndTaskRange } from 'Plugins/FSD2ndTaskRange';

if (document.querySelector('.page--layout_search-filter')) {
  new FSD2ndTaskDatepicker('.js-filter-datepicker', { range: true });

  new FSD2ndTaskRange('.js-rangeslider');
}

const UIfiltersPage = document.querySelector('.search-room-page'),
  UIexpandBtn = document.querySelector('.search-room-page__expand-filters'),
  UIfiltersPanel = document.querySelector('.search-room-page__filters');

if (UIexpandBtn) {
  UIexpandBtn.addEventListener('click', toggleFliters);
}

function toggleFliters() {
  UIfiltersPage.classList.toggle('search-room-page--noscroll');
  UIfiltersPanel.classList.toggle('search-room-page__filters--expanded');
  UIexpandBtn.classList.toggle('search-room-page__expand-filters--expanded');
}

// remove class on resize
