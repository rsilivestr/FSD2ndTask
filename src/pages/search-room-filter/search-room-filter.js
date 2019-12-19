const UIexpandBtn = document.querySelector('.search-filter-page__expand-filters');
const UIfiltersPanel = document.querySelector('.search-filter-page__filters');

if (UIexpandBtn) {
  UIexpandBtn.addEventListener('click', toggleFliters);
}

function toggleFliters () {
  UIfiltersPanel.classList.toggle('search-filter-page__filters--expanded');
  UIexpandBtn.classList.toggle('search-filter-page__expand-filters--expanded');
}

// remove class on resize