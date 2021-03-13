import IMask from 'imask';

import config from './config';

class Datemask {
  constructor(selector) {
    this._init(selector);
  }

  _init(selector) {
    const input = document.querySelector(selector);

    new IMask(input, config);
  }
}

export default Datemask;
