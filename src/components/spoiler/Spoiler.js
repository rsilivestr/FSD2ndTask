import { boundMethod } from 'autobind-decorator';

class Spoiler {
  constructor(element) {
    this._init(element);
  }

  @boundMethod
  _toggleSpoiler() {
    this.spoiler.classList.toggle('spoiler--is-open');
  }

  _init(element) {
    this.spoiler = element;
    this.title = this.spoiler.querySelector('.js-spoiler__title');

    this.title.addEventListener('click', this._toggleSpoiler);
  }
}

export default Spoiler;
