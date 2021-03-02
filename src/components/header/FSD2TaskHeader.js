import { CLASSES } from './constants';

class FSD2ndTaskHeader {
  constructor(user = null) {
    this.user = user;

    this._init();
  }

  _init() {
    // Initialize UI object
    this.UI = {};

    // Set ui elements
    this.UI.header = document.querySelector(`.${CLASSES.header}`);
    this.UI.nav = this.UI.header.querySelector(`.${CLASSES.nav}`);
    this.UI.loginBtn = document.querySelector(`.${CLASSES.btn.login}`);
    this.UI.menuBtn = document.querySelector(`.${CLASSES.btn.menu}`);
    this.UI.registerBtn = document.querySelector(`.${CLASSES.btn.register}`);
    this.UI.accountBtn = document.querySelector(`.${CLASSES.btn.account}`);

    // Set current layout depending viewport width
    this.isDesktop = window.innerWidth > 920 ? true : false;

    // Toggle initial buttons variant
    if (this.isDesktop) {
      this._toggleDesktopButtons();
    } else {
      this._toggleMobileButtons();
    }

    // Add event listeners
    this._addListeners();
  }

  _setButtonIcon(btn) {
    btn.classList.add(CLASSES.btn.withIcon);
    btn.innerHTML = `<i class="material-icons">${btn.dataset.icon}</i>`;
  }

  _setButtonText(btn) {
    btn.classList.remove(CLASSES.btn.withIcon);
    btn.innerHTML = btn.dataset.name;
  }

  _toggleDesktopButtons() {
    if (this.user) {
      // Toggle account btn icon
      this._setButtonText(this.UI.accountBtn);
    } else {
      // Toggle login btn icon
      this._setButtonText(this.UI.loginBtn);

      // Toggle register btn icon
      this._setButtonText(this.UI.registerBtn);
    }
  }

  _toggleMobileButtons() {
    if (this.user) {
      // Toggle account button icon
      this._setButtonIcon(this.UI.accountBtn);
    } else {
      // Toggle login button icon
      this._setButtonIcon(this.UI.loginBtn);

      // Toggle register button icon
      this._setButtonIcon(this.UI.registerBtn);
    }
  }

  _resizeHeader() {
    if (window.innerWidth < 920 && this.isDesktop) {
      // Toggle mobile layout
      this.isDesktop = false;
      this._toggleMobileButtons();
    } else if (window.innerWidth >= 920 && !this.isDesktop) {
      // Toggle desktop layout
      this.isDesktop = true;
      this._toggleDesktopButtons();
    }

    if (window.innerWidth >= 768) {
      // Toggle mobile menu off
      this.UI.nav.classList.remove(CLASSES.navOpen);
    }
  }

  _toggleNav() {
    this.UI.nav.classList.toggle(CLASSES.navOpen);
  }

  _addListeners() {
    // Update layout on resize
    window.addEventListener('resize', () => this._resizeHeader());

    // Toggle menu on click
    this.UI.menuBtn.addEventListener('click', () => this._toggleNav());
  }
}

export default FSD2ndTaskHeader;
