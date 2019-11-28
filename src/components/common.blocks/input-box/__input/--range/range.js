import noUiSlider from 'nouislider';

const UIrange = document.querySelector('.input-box__range');
const UIrangeLabel = document.querySelector('.input-box__range-label');

if(UIrange) {
  noUiSlider.create(UIrange, {
    start: [5000, 10000],
    step: 500,
    behaviour: 'drag',
    connect: true,
    range: {
      'min': 0,
      'max': 15000
    }
  });
  
  UIrange.noUiSlider.on('update', () => {
    const rangeValues = UIrange.noUiSlider.get().map(x => parseInt(x));
    UIrangeLabel.innerText = `${rangeValues[0]}₽ - ${rangeValues[1]}₽`;
  });
}
