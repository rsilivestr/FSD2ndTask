import { boundMethod } from 'autobind-decorator';

class StarRating {
  constructor(el) {
    this._init(el);
  }

  @boundMethod
  _setRating(e) {
    const target = e.target;

    if (!target.classList.contains('star-rating__star')) return;

    this.activeStar.classList.remove('star-rating__star--active');
    this.activeStar.classList.remove('js-star-rating__star--active');
    this.activeStar = target;
    this.activeStar.classList.add('star-rating__star--active');
    this.activeStar.classList.add('js-star-rating__star--active');
  }

  _init(el) {
    this.activeStar = el.querySelector('.js-star-rating__star--active');

    el.addEventListener('click', this._setRating);
  }
}

export default StarRating;
