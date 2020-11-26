const defaultSelectors = {
  dropdown: '.dropdown',
  input: '.dropdown__display',
  list: '.dropdown__contents',
  listItem: '.dropdown__option',
  listItemValue: '.dropdown__option-value',
  listBtn: '.dropdown__option-control',
  addBtn: '.dropdown__option-control--add',
  subtractBtn: '.dropdown__option-control--subtract',
  disabledBtn: '.dropdown__option-control--disabled',
  applyBtn: '.dropdown__btn--apply',
  clearBtn: '.dropdown__btn--clear',
};

const defaultClasses = {
  disabledBtn: 'dropdown__option-control--disabled',
  hiddenBtn: 'hidden',
  visibleList: 'dropdown__contents--visible',
};

export class FSD2ndTaskDropdown {
  constructor(
    selector,
    selectors = defaultSelectors,
    classes = defaultClasses
  ) {
    this._init(selector, selectors, classes);
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

    this._updateClearBtn();

    this._toggleDropdown();
  }

  _clear() {
    const items = this.dropdown.querySelectorAll(this.selectors.listItemValue);
    // Clear list item values
    items.forEach((item) => (item.textContent = '0'));
    // Clear input
    this.input.value = '';

    this._updateClearBtn();
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

  _updateClearBtn() {
    if (this.input.value === '') {
      this.clearBtn.classList.add(this.classes.hiddenBtn);
    } else {
      this.clearBtn.classList.remove(this.classes.hiddenBtn);
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
    this.list.addEventListener('click', (e) => this._subtract(e));
    this.list.addEventListener('click', (e) => this._add(e));
    this.applyBtn.addEventListener('click', () => this._apply());
    this.clearBtn.addEventListener('click', () => this._clear());
    this.input.addEventListener('click', () => this._toggleDropdown());
    document.body.addEventListener('click', (e) => this._close(e));
  }

  _init(selector, selectors, classes) {
    this.dropdown = document.querySelector(selector);

    this.selectors = selectors;
    this.classes = classes;

    this.input = this.dropdown.querySelector(selectors.input);
    this.list = this.dropdown.querySelector(selectors.list);
    this.applyBtn = this.dropdown.querySelector(selectors.applyBtn);
    this.clearBtn = this.dropdown.querySelector(selectors.clearBtn);

    this._addListeners();
  }
}
