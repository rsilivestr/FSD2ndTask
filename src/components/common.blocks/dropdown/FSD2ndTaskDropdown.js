import {
  DROPDOWN_DEFAULT_SELECTORS,
  DROPDOWN_DEFAULT_CLASSES,
} from './defaults';

class FSD2ndTaskDropdown {
  constructor(element = null, options = {}) {
    this._init(element, options);
  }

  _guestCase(sum) {
    if (sum % 100 === 11) return ' гостей';
    if (sum % 10 === 1) return ' гость';
    if (sum % 10 > 1 && sum % 10 < 5 && (sum % 100 < 10 || sum % 100 > 20))
      return ' гостя';
    return ' гостей';
  }

  _getValues() {
    const itemInputs = Array.from(
      this.dropdown.querySelectorAll(this.selectors.listItemValue)
    );
    const values = itemInputs.map((item) => parseInt(item.value));

    return values;
  }

  _getStrings() {
    const items = Array.from(
      this.dropdown.querySelectorAll(this.selectors.listItem)
    );

    const itemValues = items.map((item) => {
      const value = item.querySelector(this.selectors.listItemValue).value;

      if (value % 100 === 11) return `${value} ${item.dataset.many}`;

      if (value % 10 === 1) return `${value} ${item.dataset.single}`;

      if (
        value % 10 > 1 &&
        value % 10 < 5 &&
        (value % 100 < 10 || value % 100 > 20)
      )
        return `${value} ${item.dataset.few}`;

      return `${value} ${item.dataset.many}`;
    });

    return itemValues;
  }

  _applyMulti() {
    const strings = this._getStrings();

    this.input.value = '';

    strings.forEach((string) => {
      if (string[0] !== '0') {
        if (this.input.value === '') this.input.value = string;
        else this.input.value += `, ${string}`;
      }
    });
  }

  _apply() {
    const values = this._getValues();
    // Get sum of list item values
    const sum = values.reduce((a, b) => a + b, 0);

    if (sum > 0) {
      // Set input value
      this.input.value = sum.toString() + this._guestCase(sum);
    } else {
      // Clear input
      this.input.value = '';
    }

    this._updateClearBtn();

    this._toggleDropdown();
  }

  _clear() {
    const items = this.dropdown.querySelectorAll(this.selectors.listItemValue);
    // Clear list item values
    items.forEach((item) => (item.value = '0'));
    // Clear input
    this.input.value = '';

    this._updateClearBtn();
  }

  _updateListItem(item) {
    const value = item.querySelector(this.selectors.listItemValue).value;
    const addBtn = item.querySelector(this.selectors.addBtn);
    const subtractBtn = item.querySelector(this.selectors.subtractBtn);
    // Enable / disable buttons
    if (value === item.dataset.min) {
      subtractBtn.classList.add(this.classes.disabledBtn);
      addBtn.classList.remove(this.classes.disabledBtn);
    } else if (value === item.dataset.max) {
      subtractBtn.classList.remove(this.classes.disabledBtn);
      addBtn.classList.add(this.classes.disabledBtn);
    } else {
      subtractBtn.classList.remove(this.classes.disabledBtn);
      addBtn.classList.remove(this.classes.disabledBtn);
    }
  }

  _updateList() {
    this.dropdown
      .querySelectorAll(this.selectors.listItem)
      .forEach((item) => this._updateListItem(item));
  }

  _updateClearBtn() {
    if (this.input.value === '') {
      this.clearBtn.classList.add(this.classes.hiddenBtn);
    } else {
      this.clearBtn.classList.remove(this.classes.hiddenBtn);
    }
  }

  _subtract(e) {
    const currentListItem = e.target.closest(this.selectors.listItem);

    const btn = e.target.closest(this.selectors.subtractBtn);
    if (btn) {
      if (!btn.classList.contains(this.classes.disabledBtn)) {
        const valueInput = e.target.nextElementSibling;
        const value = parseInt(valueInput.value);
        // Update value
        valueInput.value = (value - 1).toString();

        this._updateListItem(currentListItem);
      }
    }

    if (this.type === 'multi') this._applyMulti();
  }

  _add(e) {
    const currentListItem = e.target.closest(this.selectors.listItem);

    const btn = e.target.closest(this.selectors.addBtn);
    if (btn) {
      if (!btn.classList.contains(this.classes.disabledBtn)) {
        const valueInput = e.target.previousElementSibling;
        const value = parseInt(valueInput.value);

        valueInput.value = (value + 1).toString();

        this._updateListItem(currentListItem);
      }
    }

    if (this.type === 'multi') this._applyMulti();
  }

  _toggleDropdown() {
    this.list.classList.toggle(this.classes.visibleList);
  }

  _close(e) {
    const el = e.target.closest(this.selectors.dropdown);
    if (el !== this.dropdown) {
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
    if (typeof element === 'string')
      this.dropdown = document.querySelector(element);
    else this.dropdown = element;

    this.type = options.type || 'single';
    this.selectors = options.selectors || DROPDOWN_DEFAULT_SELECTORS;
    this.classes = options.classes || DROPDOWN_DEFAULT_CLASSES;

    this.input = this.dropdown.querySelector(this.selectors.input);
    this.list = this.dropdown.querySelector(this.selectors.list);

    if (this.type === 'single') {
      this.applyBtn = this.dropdown.querySelector(this.selectors.applyBtn);
      this.clearBtn = this.dropdown.querySelector(this.selectors.clearBtn);
    } else {
      this._applyMulti();
    }

    this._updateList();

    this._addListeners();
  }
}

export default FSD2ndTaskDropdown;
