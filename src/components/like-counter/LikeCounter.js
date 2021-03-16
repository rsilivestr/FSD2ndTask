import { boundMethod } from 'autobind-decorator';

class LikeCounter {
  constructor(element) {
    this._init(element);
  }

  @boundMethod
  _updateValue() {
    this.value += this.checkbox.checked ? 1 : -1;
    this.counter.textContent = this._getShortenedValue(this.value);
  }

  _getShortenedValue(value) {
    if (value >= 1e10) return `${(value / 1e9).toFixed(0)}B`;
    if (value >= 1e9) return `${(value / 1e9).toFixed(1)}B`;
    if (value >= 1e7) return `${(value / 1e6).toFixed(0)}M`;
    if (value >= 1e6) return `${(value / 1e6).toFixed(1)}M`;
    if (value >= 1e3) return `${(value / 1e3).toFixed(1)}K`;
    return value.toString();
  }

  _init(element) {
    this.el = element;
    this.checkbox = element.querySelector('.js-like-counter__input');
    this.counter = element.querySelector('.js-like-counter__value');

    this.value = parseInt(this.counter.textContent, 10);
    this._updateValue();

    this.checkbox.addEventListener('change', this._updateValue);
  }
}

export default LikeCounter;
