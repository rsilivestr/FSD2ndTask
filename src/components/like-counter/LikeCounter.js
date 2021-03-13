class LikeCounter {
  constructor(element) {
    this._init(element);
  }

  _updateValue() {
    if (this.checkbox.checked) {
      this.counter.textContent = (this.value + 1).toString();
      this.value += 1;
    } else {
      this.counter.textContent = (this.value - 1).toString();
      this.value -= 1;
    }
  }

  _init(element) {
    this.el = element;
    this.checkbox = element.querySelector('.js-like-counter__input');
    this.counter = element.querySelector('.js-like-counter__value');
    this.value = parseInt(this.counter.textContent, 10);

    this.checkbox.addEventListener('change', () => this._updateValue());
  }
}

export default LikeCounter;
