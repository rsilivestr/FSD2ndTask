import IMask from 'imask';
import config from './config';

class FSD2ndTaskMaskedDate {
  constructor(selector) {
    this._init(selector);
  }

  _init(selector) {
    const input = document.querySelector(selector);

    IMask(input, config);
  }
}

export default FSD2ndTaskMaskedDate;
