const DROPDOWN_DEFAULT_SELECTORS = {
  dropdown: '.js-dropdown',
  input: '.js-dropdown__display',
  list: '.js-dropdown__contents',
  listItem: '.js-dropdown__option',
  listItemValue: '.js-dropdown__option-value',
  listBtn: '.js-dropdown__option-control',
  addBtn: '.js-dropdown__option-control--add',
  subtractBtn: '.js-dropdown__option-control--subtract',
  disabledBtn: '.js-dropdown__option-control--disabled',
  applyBtn: '.js-dropdown__btn--apply',
  clearBtn: '.js-dropdown__btn--clear',
};

const DROPDOWN_DEFAULT_CLASSES = {
  disabledBtn: 'dropdown__option-control--disabled',
  hiddenBtn: 'dropdown__btn--hidden',
  visibleList: 'dropdown__contents--visible',
};

export { DROPDOWN_DEFAULT_SELECTORS, DROPDOWN_DEFAULT_CLASSES };
