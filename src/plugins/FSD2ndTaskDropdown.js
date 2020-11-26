const defaultSelectors = {
  input: '.dropdown__display',
  // list: '.dropdown__list',
  list: '.dropdown__contents',
  // listItem: '.d-list__item',
  listItem: '.dropdown__option',
  listItemValue: '.dropdown__option-value',
  // listButton: '.d-list__button',
  listBtn: '.dropdown__option-control',
  // addBtn: '.d-list__button--type_add',
  addBtn: '.dropdown__option-control--add',
  // subtractBtn: '.d-list__button--type_subtract',
  subtractBtn: '.dropdown__option-control--subtract',
  disabledBtn: '.dropdown__option-control--disabled',
  applyBtn: '.dropdown__btn--apply',
  clearBtn: '.dropdown__btn--clear',
};

const defaultClasses = {
  disabledBtn: 'dropdown__option-control--disabled',
};

export class FSD2ndTaskDropdown {
  constructor(el, selectors = defaultSelectors, classes = defaultClasses) {
    this._init(el, selectors, classes);
  }

  _guestCase(sum) {
    if (sum % 100 === 11) return ' гостей';
    if (sum % 10 === 1) return ' гость';
    if (sum % 10 > 1 && sum % 10 < 5 && (sum < 12 || sum > 14)) return ' гостя';
    return ' гостей';
  }

  _getValues() {
    const items = Array.from(
      this.dropdown.querySelectorAll(this.selectors.listItemValue)
    );
    const values = items.map((item) => parseInt(item.textContent));

    return values;
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
  }

  _clear() {
    const items = this.dropdown.querySelectorAll(this.selectors.listItemValue);
    // Clear list item values
    items.forEach((item) => (item.textContent = '0'));
    // Clear input
    this.input.value = '';
  }

  _updateListItem() {
    const item = this.currentListItem;
    const value = item.querySelector(this.selectors.listItemValue).textContent;
    const addBtn = item.querySelector(this.selectors.addBtn);
    const subtractBtn = item.querySelector(this.selectors.subtractBtn);
    // Enable / disable buttons
    if (value === item.dataset.min) {
      subtractBtn.classList.add(this.classes.disabledBtn);
    } else if (value === item.dataset.max) {
      addBtn.classList.add(this.classes.disabledBtn);
    } else {
      subtractBtn.classList.remove(this.classes.disabledBtn);
      addBtn.classList.remove(this.classes.disabledBtn);
    }
  }

  _subtract(e) {
    this.currentListItem = e.target.closest(this.selectors.listItem);

    const btn = e.target.closest(this.selectors.subtractBtn);
    if (btn) {
      if (!btn.classList.contains(this.classes.disabledBtn)) {
        const valueSpan = e.target.nextElementSibling;
        const value = parseInt(valueSpan.textContent);
        // Update value
        valueSpan.textContent = (value - 1).toString();

        this._updateListItem();
      }
    }
  }

  _add(e) {
    this.currentListItem = e.target.closest(this.selectors.listItem);

    const btn = e.target.closest(this.selectors.addBtn);
    if (btn) {
      if (!btn.classList.contains(this.classes.disabledBtn)) {
        const valueSpan = e.target.previousElementSibling;
        const value = parseInt(valueSpan.textContent);

        valueSpan.textContent = (value + 1).toString();

        this._updateListItem();
      }
    }
  }

  _addListeners() {
    this.list.addEventListener('click', (e) => this._subtract(e));
    this.list.addEventListener('click', (e) => this._add(e));
    this.applyBtn.addEventListener('click', () => this._apply());
    this.clearBtn.addEventListener('click', () => this._clear());
  }

  _init(el, selectors, classes) {
    this.selectors = selectors;
    this.classes = classes;
    this.dropdown = el;

    this.input = el.querySelector(selectors.input);
    this.list = el.querySelector(selectors.list);
    this.applyBtn = el.querySelector(selectors.applyBtn);
    this.clearBtn = el.querySelector(selectors.clearBtn);

    this._addListeners();
  }
}
