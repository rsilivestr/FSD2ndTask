export default class FSD2ndTaskRoomSlider {
  constructor(el) {
    this._init(el);
  }

  _updateSlides(currentIndex) {
    this.slides.forEach((slide, slideIndex) => {
      slide.style.left = `${100 * (slideIndex - currentIndex)}%`;
    });
  }

  _handleClick(e) {
    const navButtons = Array.from(
      this.slider.querySelectorAll('.room-card__dot')
    );
    navButtons.forEach((button, index) => {
      button.classList.remove('room-card__dot--current');
      if (button === e.target) {
        this._updateSlides(index);
      }
    });

    e.target.classList.add('room-card__dot--current');
  }

  _init(slider) {
    this.slider = slider;
    this.slides = Array.from(this.slider.querySelectorAll('.room-card__photo'));
    // Place slides
    this.slides.forEach(
      (slide, index) => (slide.style.left = `${100 * index}%`)
    );

    const nav = this.slider.querySelector('.room-card__dots');
    // const navButtons = Array.from(nav.querySelectorAll('.room-card__dot'));

    nav.addEventListener('click', (e) => this._handleClick(e));
  }
}
