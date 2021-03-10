import SLIDER_DEFAULT_SELECTORS from './defaults';

class RoomSlider {
  constructor(el, selectors = SLIDER_DEFAULT_SELECTORS) {
    this._init(el, selectors);
  }

  _updateSlides() {
    this.UI.slides.forEach((slide, slideIndex) => {
      slide.style.left = `${100 * (slideIndex - this.currentSlideIndex)}%`;
    });
  }

  _updateNav() {
    this.UI.navButtons.forEach((btn, btnIndex) => {
      btn.classList.remove(this.selectors.currentNavButtonClass);

      if (btnIndex === this.currentSlideIndex) {
        btn.classList.add(this.selectors.currentNavButtonClass);
      }
    });
  }

  _handleNavClick(e) {
    this.UI.navButtons.forEach((button, index) => {
      if (button === e.target) {
        // Update current slide index
        this.currentSlideIndex = index;
        // Update slider
        this._updateNav();
        this._updateSlides();
      }
    });
  }

  _handleControlClick(e) {
    // Capture control click
    const target = e.target.closest(this.selectors.control);
    if (!target) return;

    // Get controls
    const left = this.UI.slider.querySelector(this.selectors.controlLeft);
    const right = this.UI.slider.querySelector(this.selectors.controlRight);

    if (target === left) {
      // Left control is clicked
      if (this.currentSlideIndex > 0) {
        // Go to the previous slide
        this.currentSlideIndex -= 1;
      } else {
        // Jump to the last slide
        this.currentSlideIndex = this.slidesCount - 1;
      }
    }

    if (target === right) {
      // Right control is clicked
      if (this.currentSlideIndex < this.slidesCount - 1) {
        // Go to the next slide
        this.currentSlideIndex += 1;
      } else {
        // Jump to the first slide
        this.currentSlideIndex = 0;
      }
    }
    // Update slider
    this._updateNav();
    this._updateSlides();
  }

  _init(slider, selectors) {
    // Save selectors to plugin instance
    this.selectors = selectors;
    // Initialize UI elements object
    this.UI = {};
    // Get UI elements
    this.UI.slider = slider;
    this.UI.nav = this.UI.slider.querySelector(selectors.nav);
    this.UI.navButtons = Array.from(
      this.UI.nav.querySelectorAll(selectors.navButton)
    );
    this.UI.slides = Array.from(
      this.UI.slider.querySelectorAll(selectors.slide)
    );
    // Number of slides (images)
    this.slidesCount = this.UI.slides.length;
    // Index of current slide (image)
    this.currentSlideIndex = 0;
    // Place slides
    this.UI.slides.forEach(
      (slide, index) => (slide.style.left = `${100 * index}%`)
    );
    // Listen to clicks on navigation
    this.UI.nav.addEventListener('click', (e) => this._handleNavClick(e));
    // Listen to clicks on controls
    this.UI.slider.addEventListener('click', (e) =>
      this._handleControlClick(e)
    );
  }
}

export default RoomSlider;
