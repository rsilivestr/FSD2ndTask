import FSD2ndTaskRoomSlider from 'Plugins/FSD2ndTaskRoomSlider';

const sliders = Array.from(document.querySelectorAll('.room-card__photos'));

const sliderSelectors = {
  slider: '.room-card__photos',
  slide: '.room-card__photo',
  nav: '.room-card__dots',
  navButton: '.room-card__dot',
  control: '.room-card__control',
  controlLeft: '.room-card__control--direction_left',
  controlRight: '.room-card__control--direction_right',
  currentNavButtonClass: 'room-card__dot--current',
};

sliders.forEach((slider) => new FSD2ndTaskRoomSlider(slider, sliderSelectors));
