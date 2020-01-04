const UIfiltersPage = document.querySelector('.search-room-page'),
  UIexpandBtn = document.querySelector('.search-room-page__expand-filters'),
  UIfiltersPanel = document.querySelector('.search-room-page__filters');

if (UIexpandBtn) {
  UIexpandBtn.addEventListener('click', toggleFliters);
}

function toggleFliters () {
  UIfiltersPage.classList.toggle('search-room-page--noscroll');
  UIfiltersPanel.classList.toggle('search-room-page__filters--expanded');
  UIexpandBtn.classList.toggle('search-room-page__expand-filters--expanded');
}

// remove class on resize