// air-datepicker is used as JQuery method here
// eslint rule no-unused-vars throws a false positive
/* eslint-disable-next-line */
import datepicker from 'air-datepicker';

export class FSD2ndTaskDatepicker {
  constructor(selector, options = {}) {
    this._init(selector, options);
  }

  _createButtons() {
    const buttons = document.createElement('div');
    buttons.className = 'datepicker__buttons-panel';

    const clearBtn = document.createElement('button');
    clearBtn.className =
      'button button--style_text button--size_auto datepicker__clear-btn';
    clearBtn.innerText = 'очистить';
    buttons.appendChild(clearBtn);

    const applyBtn = document.createElement('button');
    applyBtn.className =
      'button button--style_text button--size_auto datepicker__apply-btn';
    applyBtn.innerText = 'применить';
    buttons.appendChild(applyBtn);

    // Save button elements' references
    this.UI.clearBtn = clearBtn;
    this.UI.applyBtn = applyBtn;

    return buttons;
  }

  _togglePicker() {
    this.UI.picker.parentElement.classList.toggle('datepicker-inline--visible');
  }

  _hidePicker() {
    this.UI.picker.parentElement.classList.remove('datepicker-inline--visible');
  }

  _fillRangeInput() {
    // Date format options
    const options = { day: 'numeric', month: 'short' };
    const startDate = new Intl.DateTimeFormat('ru-RU', options)
      .format(this.picker.selectedDates[0])
      // Remove dot after month
      .slice(0, -1);
    const endDate = new Intl.DateTimeFormat('ru-RU', options)
      .format(this.picker.selectedDates[1])
      .slice(0, -1);
    // Set input value
    this.UI.input.value = `${startDate} — ${endDate}`;
    // Hide calendar
    this._hidePicker();
  }

  _fillInputs() {
    const startDate = this.picker.selectedDates[0];
    const endDate = this.picker.selectedDates[1];
    // Set inputs' values
    this.UI.inputStartDate.value =
      startDate && startDate.toLocaleDateString('ru-RU');
    this.UI.inputEndDate.value = endDate && endDate.toLocaleDateString('ru-RU');

    this._hidePicker();
  }

  _clearRangeInput() {
    this.UI.input.value = '';

    this.picker.clear();
  }

  _clearInputs() {
    this.UI.inputStartDate.value = '';
    this.UI.inputEndDate.value = '';

    this.picker.clear();
  }

  _addListeners() {
    // Toggle datepicker
    if (this.range) {
      this.UI.input.addEventListener('click', () => this._togglePicker());
    } else {
      this.UI.inputStartDate.addEventListener('click', () =>
        this._togglePicker()
      );
      this.UI.inputEndDate.addEventListener('click', () =>
        this._togglePicker()
      );
    }
    // Clear inputs
    if (this.range) {
      this.UI.clearBtn.addEventListener('click', () => this._clearRangeInput());
    } else {
      this.UI.clearBtn.addEventListener('click', () => this._clearInputs());
    }
    // Fill inputs
    if (this.range) {
      this.UI.applyBtn.addEventListener('click', () => this._fillRangeInput());
    } else {
      this.UI.applyBtn.addEventListener('click', () => this._fillInputs());
    }
  }

  _init(selector, options) {
    this.range = options.range || false;
    this.size = options.size || 'l';
    this.UI = {};
    // Get container element
    this.UI.container = document.querySelector(selector);
    if (this.range) {
      this.UI.input = this.UI.container.querySelector('input');
    } else {
      // Get start and end date inputs
      const inputs = this.UI.container.querySelectorAll('input');
      this.UI.inputStartDate = inputs[0];
      this.UI.inputEndDate = inputs[1];
    }
    // Create calendar
    $(this.UI.container).datepicker({
      prevHtml: '<i class="material-icons datepicker__arrow">arrow_back</i>',
      nextHtml: '<i class="material-icons datepicker__arrow">arrow_forward</i>',
      navTitles: {
        days: 'MM yyyy',
        months: 'yyyy',
        years: 'yyyy1 - yyyy2',
      },
      multipleDates: 2,
      range: true,
      classes: `datepicker--size_${this.size}`,
    });
    // Access datepicker instance data
    this.picker = $(selector).datepicker().data('datepicker');
    // Get calendar element
    this.UI.picker = this.picker.$datepicker[0];
    // Append buttons
    this.UI.picker.appendChild(this._createButtons());
    // Add event listeners
    this._addListeners();
  }
}
