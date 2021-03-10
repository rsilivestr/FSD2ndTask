class StarRating {
  constructor(el) {
    this._init(el);
  }

  _setRating(target) {
    if (target.classList.contains('star-rating__star')) {
      this.activeStar.classList.remove('star-rating__star--active');
      this.activeStar = target;
      this.activeStar.classList.add('star-rating__star--active');
    }
  }

  _init(el) {
    this.activeStar = el.querySelector('.star-rating__star--active');

    el.addEventListener('click', (e) => this._setRating(e.target));
  }
}

export default StarRating;
