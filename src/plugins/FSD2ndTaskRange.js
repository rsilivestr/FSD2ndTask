import noUiSlider from 'nouislider';

export class FSD2ndTaskRange {
  constructor(selector, options) {
    this._init(selector, options);
  }

  _createLabel() {
    const label = document.createElement('label');

    return label;
  }

  _formatValue(valueString) {
    return valueString
      .replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')
      .slice(0, -3);
  }

  _updateLabel() {
    const rangeValues = this.UI.container.noUiSlider.get();

    const min = this._formatValue(rangeValues[0]);
    const max = this._formatValue(rangeValues[1]);

    this.UI.label.textContent = `${min}₽ - ${max}₽`;
  }

  _init(selector, options) {
    this.UI = {};
    this.UI.container = document.querySelector(selector);
    this.UI.label = this._createLabel();
    this.UI.container.appendChild(this.UI.label);

    const defaultOptions = {
      start: [5000, 10000],
      step: 500,
      behaviour: 'drag',
      connect: true,
      range: {
        min: 0,
        max: 15000,
      },
    };

    this.options = options || defaultOptions;

    noUiSlider.create(this.UI.container, this.options);

    this.UI.container.noUiSlider.on('update', () => this._updateLabel());
  }
}

// const UIrange = document.querySelector('.input-box__range');
// const UIrangeLabel = document.querySelector('.input-box__range-label');

// noUiSlider.create(UIrange, {
//   start: [5000, 10000],
//   step: 500,
//   behaviour: 'drag',
//   connect: true,
//   range: {
//     'min': 0,
//     'max': 15000
//   }
// });

// UIrange.noUiSlider.on('update', () => {
//   const rangeValues = UIrange.noUiSlider.get().map(x => x.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ').replace('.00', ''));
//   UIrangeLabel.innerText = `${rangeValues[0]}₽ - ${rangeValues[1]}₽`;
// });
