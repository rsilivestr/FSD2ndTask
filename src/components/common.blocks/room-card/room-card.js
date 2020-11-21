import FSD2ndTaskRoomSlider from 'Plugins/FSD2ndTaskRoomSlider';

const sliders = Array.from(document.querySelectorAll('.room-card__photos'));

const sliderSelectors = {
  slider: '.room-card__photos',
  slide: '.room-card__photo',
  nav: '.room-card__nav',
  navButton: '.room-card__navbtn',
  control: '.room-card__control',
  controlLeft: '.room-card__control--direction_left',
  controlRight: '.room-card__control--direction_right',
  currentNavButtonClass: 'room-card__navbtn--current',
};

sliders.forEach((slider) => new FSD2ndTaskRoomSlider(slider, sliderSelectors));
