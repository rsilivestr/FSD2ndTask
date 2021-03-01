const CLASS_NAMES = {
  header: 'header',
  nav: 'header__nav',
  navOpen: 'header__nav--expanded',
  btn: {
    account: 'header__btn--type_account',
    login: 'header__btn--type_login',
    menu: 'header__btn--type_menu',
    register: 'header__btn--type_register',
    withBorder: 'button--style_bordered',
    withGradient: 'button--style_gradient',
    withIcon: 'header__btn--type_iconic',
  },
};

class FSD2ndTaskHeader {
  constructor(user = null) {
    this.user = user;

    this._init();
  }

  _init() {
    // Set ui elements
    this.UI.header = document.querySelector(`.${CLASS_NAMES.header}`);
    this.UI.nav = this.UI.header.querySelector(`.${CLASS_NAMES.nav}`);
    this.UI.loginBtn = document.querySelector(`.${CLASS_NAMES.btn.login}`);
    this.UI.regBtn = document.querySelector(`.${CLASS_NAMES.btn.reg}`);
    this.UI.accountBtn = document.querySelector(`.${CLASS_NAMES.btn.account}`);

    // Set current layout depending viewport width
    this.isDesktop = window.innerWidth > 920 ? true : false;

    // Add event listeners
    this._addListeners();
  }

  _setButtonIcon(btn) {
    btn.classList.classList.add(CLASS_NAMES.btn.withIcon);
    btn.textContent = `<i class="material-icons">${btn.dataset.icon}</i>`;
  }

  _setButtonText(btn) {
    btn.classList.classList.remove(CLASS_NAMES.btn.withIcon);
    btn.textContent = btn.dataset.name;
  }

  _resizeHeader() {
    if (window.innerWidth < 920 && this.isDesktop) {
      // Toggle mobile layout
      this.isDesktop = false;

      if (!this.user) {
        // Toggle login btn icon
        this._setButtonIcon(this.UI.loginBtn);

        // Toggle register btn icon
        this._setButtonIcon(this.UI.regBtn);
      } else {
        // Toggle account btn icon
        this._setButtonIcon(this.UI.accountBtn);
      }
    } else if (window.innerWidth >= 920 && !this.isDesktop) {
      // Toggle desktop layout
      this.isDesktop = true;
    }
  }

  _addListeners() {
    // Update layout on resize
    window.addEventListener('resize', this._resizeHeader);

    // Toggle menu on click
    this.UI.header.addEventListener('click', this._toggleNav);
  }
}

export default FSD2ndTaskHeader;
