const UIheader = document.querySelector('.header');
const UInav = UIheader && UIheader.querySelector('.header__nav');
const UIloginBtn = document.querySelector('.header__btn--type_login');
const UIregBtn = document.querySelector('.header__btn--type_register');
const UIaccountBtn = document.querySelector('.header__btn--type_account');

// check if page has header
if (UIheader) {
  resizeHeader(true);
  window.addEventListener('resize', resizeHeader);

  UIheader.addEventListener('click', toggleNav);
}

// determine initial view
let isDesktop = window.innerWidth > 920 ? true : false;

function resizeHeader(firstLoad = false) {
  // if view were changed on resize
  if (
    (window.innerWidth < 920 && isDesktop) ||
    (window.innerWidth < 920 && firstLoad)
  ) {
    // toggle view
    isDesktop = !isDesktop;

    // change buttons classes and contents

    if (UIloginBtn) {
      UIloginBtn.classList.remove('button--style_bordered');
      // UIloginBtn.classList.add('button--style_text');
      UIloginBtn.classList.add('header__btn--type_iconic');
      UIloginBtn.innerHTML = '<i class="material-icons">input</i>';
    }

    if (UIregBtn) {
      UIregBtn.classList.remove('button--style_gradient');
      // UIregBtn.classList.add('button--style_text');
      UIregBtn.classList.add('header__btn--type_iconic');
      UIregBtn.innerHTML = '<i class="material-icons">person_add</i>';
    }

    if (UIaccountBtn) {
      UIaccountBtn.classList.add('header__btn--type_iconic');
      UIaccountBtn.innerHTML = '<i class="material-icons">account_circle</i>';
    }
  } else if (
    (window.innerWidth >= 920 && !isDesktop) ||
    (window.innerWidth >= 920 && firstLoad)
  ) {
    // toggle view
    isDesktop = !isDesktop;

    if (UIloginBtn) {
      UIloginBtn.classList.add('button--style_bordered');
      // UIloginBtn.classList.remove('button--style_text');
      UIloginBtn.classList.remove('header__btn--type_iconic');
      UIloginBtn.innerHTML = UIloginBtn.dataset.name;
    }

    if (UIregBtn) {
      UIregBtn.classList.add('button--style_gradient');
      // UIregBtn.classList.remove('button--style_text');
      UIregBtn.classList.remove('header__btn--type_iconic');
      UIregBtn.innerHTML = UIregBtn.dataset.name;
    }

    if (UIaccountBtn) {
      UIaccountBtn.classList.remove('header__btn--type_iconic');
      UIaccountBtn.innerHTML = UIaccountBtn.dataset.name;
    }
  }

  // reset header__nav--expanded class on width > "tablet"
  if (window.innerWidth >= 768) {
    UInav.classList.remove('header__nav--expanded');
  }
}

// toggle mobile menu
function toggleNav(e) {
  if (e.target.closest('.header__btn--type_menu')) {
    UInav.classList.toggle('header__nav--expanded');
  }
}
