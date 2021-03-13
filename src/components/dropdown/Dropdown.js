import {
  DROPDOWN_DEFAULT_SELECTORS,
  DROPDOWN_DEFAULT_CLASSES,
} from './defaults';

class Dropdown {
  constructor(element = null, options = {}) {
    this._init(element, options);
  }

  _isNumberCaseFew(number) {
    return (
      number % 10 > 1 &&
      number % 10 < 5 &&
      (number % 100 < 10 || number % 100 > 20)
    );
  }

  _chooseWordCase(number, { single, few, many }) {
    if (number % 100 === 11) return many;

    if (number % 10 === 1) return single;

    if (this._isNumberCaseFew(number)) return few;

    return many;
  }

  _guestCase(sum) {
    return this._chooseWordCase(sum, {
      single: 'гость',
      few: 'гостя',
      many: 'гостей',
    });
  }

  _getValues() {
    const itemInputs = Array.from(
      this.dropdown.querySelectorAll(this.selectors.listItemValue)
    );
    const values = itemInputs.map((item) => parseInt(item.value));

    return values;
  }

  _getItemValueStrings() {
    const items = Array.from(
      this.dropdown.querySelectorAll(this.selectors.listItem)
    );

    const itemValues = items.map((item) => {
      const value = item.querySelector(this.selectors.listItemValue).value;

      const wordCase = this._chooseWordCase(value, item.dataset);

      return `${value} ${wordCase}`;
    });

    return itemValues;
  }

  _applyMulti() {
    const strings = this._getItemValueStrings();

    this.input.value = strings.filter((string) => string[0] !== '0').join(', ');
  }

  _getSum() {
    const values = this._getValues();
    return values.reduce((a, b) => a + b, 0);
  }

  _setInputValue() {
    const sum = this._getSum();

    this.input.value =
      sum > 0 ? `${sum.toString()} ${this._guestCase(sum)}` : '';
  }

  _apply() {
    this._setInputValue();
    this._updateClearBtn();
    this._toggleDropdown();
  }

  _clear() {
    const items = this.dropdown.querySelectorAll(this.selectors.listItemValue);

    items.forEach((item) => (item.value = item.parentElement.dataset.min));

    this._apply();
  }

  _updateListItem(item) {
    const value = item.querySelector(this.selectors.listItemValue).value;
    const addBtn = item.querySelector(this.selectors.addBtn);
    const subtractBtn = item.querySelector(this.selectors.subtractBtn);

    if (value === item.dataset.min) {
      subtractBtn.classList.add(this.classes.disabledBtn);
      subtractBtn.classList.add(`js-${this.classes.disabledBtn}`);

      addBtn.classList.remove(this.classes.disabledBtn);
      addBtn.classList.remove(`js-${this.classes.disabledBtn}`);
    } else if (value === item.dataset.max) {
      subtractBtn.classList.remove(this.classes.disabledBtn);
      subtractBtn.classList.remove(`js-${this.classes.disabledBtn}`);

      addBtn.classList.add(this.classes.disabledBtn);
      addBtn.classList.add(`js-${this.classes.disabledBtn}`);
    } else {
      subtractBtn.classList.remove(this.classes.disabledBtn);
      subtractBtn.classList.remove(`js-${this.classes.disabledBtn}`);

      addBtn.classList.remove(this.classes.disabledBtn);
      addBtn.classList.remove(`js-${this.classes.disabledBtn}`);
    }
  }

  _updateList() {
    this.dropdown
      .querySelectorAll(this.selectors.listItem)
      .forEach((item) => this._updateListItem(item));
  }

  _updateClearBtn() {
    const itemInputs = Array.from(
      this.dropdown.querySelectorAll(this.selectors.listItemValue)
    );
    const notMin = itemInputs.filter(
      (input) => input.value !== input.parentElement.dataset.min
    );

    if (notMin.length === 0) {
      this.clearBtn.classList.add(this.classes.hiddenBtn);
    } else {
      this.clearBtn.classList.remove(this.classes.hiddenBtn);
    }
  }

  _isButtonDisabled(btn) {
    return !btn || btn.classList.contains(this.classes.disabledBtn);
  }

  _subtract(e) {
    const btn = e.target.closest(this.selectors.subtractBtn);

    if (this._isButtonDisabled(btn)) return;

    const currentListItem = btn.closest(this.selectors.listItem);
    const valueInput = currentListItem.querySelector(
      this.selectors.listItemValue
    );

    const value = parseInt(valueInput.value);
    valueInput.value = (value - 1).toString();

    this._updateListItem(currentListItem);

    if (this.type === 'multi') this._applyMulti();
  }

  _add(e) {
    const btn = e.target.closest(this.selectors.addBtn);

    if (this._isButtonDisabled(btn)) return;

    const currentListItem = btn.closest(this.selectors.listItem);
    const valueInput = currentListItem.querySelector(
      this.selectors.listItemValue
    );

    const value = parseInt(valueInput.value);
    valueInput.value = (value + 1).toString();

    this._updateListItem(currentListItem);

    if (this.type === 'multi') this._applyMulti();
  }

  _toggleDropdown() {
    this.list.classList.toggle(this.classes.visibleList);
  }

  _close(e) {
    const dropdown = e.target.closest(this.selectors.dropdown);
    if (dropdown !== this.dropdown) {
      this.list.classList.remove(this.classes.visibleList);
    }
  }

  _addListeners() {
    this.input.addEventListener('click', () => this._toggleDropdown());
    this.list.addEventListener('click', (e) => this._subtract(e));
    this.list.addEventListener('click', (e) => this._add(e));

    if (this.type === 'single') {
      this.applyBtn.addEventListener('click', () => this._apply());
      this.clearBtn.addEventListener('click', () => this._clear());
    }

    document.body.addEventListener('click', (e) => this._close(e));
  }

  _init(element, options) {
    this.dropdown =
      typeof element === 'string' ? document.querySelector(element) : element;

    this.type = options.type || 'single';
    this.selectors = options.selectors || DROPDOWN_DEFAULT_SELECTORS;
    this.classes = options.classes || DROPDOWN_DEFAULT_CLASSES;

    this.input = this.dropdown.querySelector(this.selectors.input);
    this.list = this.dropdown.querySelector(this.selectors.list);

    if (this.type === 'single') {
      this.applyBtn = this.dropdown.querySelector(this.selectors.applyBtn);
      this.clearBtn = this.dropdown.querySelector(this.selectors.clearBtn);

      this._updateClearBtn();
    } else {
      this._applyMulti();
    }

    this._updateList();

    this._addListeners();
  }
}

export default Dropdown;
