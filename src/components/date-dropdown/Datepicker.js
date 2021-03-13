// air-datepicker is used as JQuery method here
// eslint rule no-unused-vars throws a false positive
/* eslint-disable-next-line */
import datepicker from 'air-datepicker';
import { boundMethod } from 'autobind-decorator';

class Datepicker {
  constructor(selector, options = {}) {
    this._init(selector, options);
  }

  _createButtons() {
    const clearBtn = document.createElement('button');
    clearBtn.className =
      'button button--style_text button--size_auto datepicker__clear-btn';
    clearBtn.innerText = 'очистить';
    this.UI.clearBtn = clearBtn;

    const applyBtn = document.createElement('button');
    applyBtn.className =
      'button button--style_text button--size_auto datepicker__apply-btn';
    applyBtn.innerText = 'применить';
    this.UI.applyBtn = applyBtn;

    const buttons = document.createElement('div');
    buttons.className = 'datepicker__buttons-panel';
    buttons.appendChild(clearBtn);
    buttons.appendChild(applyBtn);

    return buttons;
  }

  @boundMethod
  _togglePicker() {
    this.UI.picker.parentElement.classList.toggle('datepicker-inline--visible');
  }

  _hidePicker() {
    this.UI.picker.parentElement.classList.remove('datepicker-inline--visible');
  }

  @boundMethod
  _fillRangeInput() {
    const [startDate, endDate] = this.picker.selectedDates;

    if (startDate === undefined || endDate === undefined) {
      this._clearRangeInput();
    } else {
      const options = { day: 'numeric', month: 'short' };

      const startDateString = new Date(startDate)
        .toLocaleDateString('ru-RU', options)
        // Remove dot after the month
        .slice(0, -1);

      const endDateString = new Date(endDate)
        .toLocaleDateString('ru-RU', options)
        .slice(0, -1);

      this.UI.input.value = `${startDateString} — ${endDateString}`;
    }

    this._hidePicker();
  }

  @boundMethod
  _fillInputs() {
    const [startDate, endDate] = this.picker.selectedDates;

    if (startDate === undefined || endDate === undefined) {
      this._clearInputs();
    } else {
      this.UI.inputStartDate.value = startDate.toLocaleDateString('ru-RU');
      this.UI.inputEndDate.value = endDate.toLocaleDateString('ru-RU');
    }

    this._hidePicker();
  }

  @boundMethod
  _clearRangeInput() {
    this.UI.input.value = '';

    this.picker.clear();
  }

  @boundMethod
  _clearInputs() {
    this.UI.inputStartDate.value = '';
    this.UI.inputEndDate.value = '';

    this.picker.clear();
  }

  _addListeners() {
    if (this.range) {
      this.UI.input.addEventListener('click', this._togglePicker);
    } else {
      this.UI.inputStartDate.addEventListener('click', this._togglePicker);
      this.UI.inputEndDate.addEventListener('click', this._togglePicker);
    }

    if (this.range) {
      this.UI.clearBtn.addEventListener('click', this._clearRangeInput);
    } else {
      this.UI.clearBtn.addEventListener('click', this._clearInputs);
    }

    if (this.range) {
      this.UI.applyBtn.addEventListener('click', this._fillRangeInput);
    } else {
      this.UI.applyBtn.addEventListener('click', this._fillInputs);
    }
  }

  _init(selector, options) {
    this.range = options.range || false;
    this.size = options.size || 'l';
    this.UI = {};

    this.UI.container = document.querySelector(selector);

    if (this.range) {
      this.UI.input = this.UI.container.querySelector('input');
    } else {
      const inputs = this.UI.container.querySelectorAll('input');
      this.UI.inputStartDate = inputs[0];
      this.UI.inputEndDate = inputs[1];
    }

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

    this.picker = $(selector).datepicker().data('datepicker');

    this.UI.picker = this.picker.$datepicker[0];
    this.UI.picker.appendChild(this._createButtons());

    this._addListeners();
  }
}

export default Datepicker;
