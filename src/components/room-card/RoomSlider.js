import { boundMethod } from 'autobind-decorator';

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

  @boundMethod
  _handleNavClick(e) {
    this.UI.navButtons.forEach((button, index) => {
      if (button === e.target) {
        this.currentSlideIndex = index;

        this._updateNav();
        this._updateSlides();
      }
    });
  }

  @boundMethod
  _handleControlClick(e) {
    const target = e.target.closest(this.selectors.control);

    if (!target) return;

    const left = this.UI.slider.querySelector(this.selectors.controlLeft);
    if (target === left) {
      if (this.currentSlideIndex > 0) {
        this.currentSlideIndex -= 1;
      } else {
        this.currentSlideIndex = this.slidesCount - 1;
      }
    }

    const right = this.UI.slider.querySelector(this.selectors.controlRight);
    if (target === right) {
      if (this.currentSlideIndex < this.slidesCount - 1) {
        this.currentSlideIndex += 1;
      } else {
        this.currentSlideIndex = 0;
      }
    }

    this._updateNav();
    this._updateSlides();
  }

  _init(slider, selectors) {
    this.selectors = selectors;

    this.UI = {};
    this.UI.slider = slider;
    this.UI.nav = this.UI.slider.querySelector(selectors.nav);
    this.UI.navButtons = Array.from(
      this.UI.nav.querySelectorAll(selectors.navButton)
    );
    this.UI.slides = Array.from(
      this.UI.slider.querySelectorAll(selectors.slide)
    );

    this.slidesCount = this.UI.slides.length;
    this.currentSlideIndex = 0;

    this.UI.slides.forEach(
      (slide, index) => (slide.style.left = `${100 * index}%`)
    );

    this.UI.nav.addEventListener('click', this._handleNavClick);
    this.UI.slider.addEventListener('click', this._handleControlClick);
  }
}

export default RoomSlider;
