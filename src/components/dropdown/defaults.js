const DROPDOWN_DEFAULT_SELECTORS = {
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

const DROPDOWN_DEFAULT_CLASSES = {
  disabledBtn: 'dropdown__option-control--disabled',
  hiddenBtn: 'dropdown__btn--hidden',
  visibleList: 'dropdown__contents--visible',
};

export { DROPDOWN_DEFAULT_SELECTORS, DROPDOWN_DEFAULT_CLASSES };
