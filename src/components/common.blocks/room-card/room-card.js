import FSD2ndTaskRoomSlider from 'Plugins/FSD2ndTaskRoomSlider';

const sliders = Array.from(document.querySelectorAll('.room-card__photos'));

sliders.forEach((slider) => new FSD2ndTaskRoomSlider(slider));
