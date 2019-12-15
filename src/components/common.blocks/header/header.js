const UIheader = document.querySelector('.main-header'),
  UIloginBtn = document.querySelectorAll('.main-header__btn')[0],
  UIregBtn = document.querySelectorAll('.main-header__btn')[1];


// check if page has header
if (UIheader) {
  
  // TODO check if user is logged in
  // then return

  resizeHeader(true);
  window.addEventListener('resize', resizeHeader);
}

// determine initial view
let isDesktop = (window.innerWidth > 920) ? true : false;

function resizeHeader(firstLoad=false) {
  // if view were changed on resize
  if ((window.innerWidth < 920 && isDesktop) || (window.innerWidth < 920 && firstLoad)) {
    // toggle view
    isDesktop = !isDesktop;

    // change buttons style
    UIloginBtn.classList.remove('button--style_bordered');
    UIloginBtn.classList.add('button--style_text');
    UIloginBtn.classList.add('main-header__btn--iconic');
    UIregBtn.classList.remove('button--style_gradient');
    UIregBtn.classList.add('button--style_text');
    UIregBtn.classList.add('main-header__btn--iconic');

    // change buttons content to icons
    UIloginBtn.innerHTML = '<i class="material-icons">input</i>'
    UIregBtn.innerHTML = '<i class="material-icons">person_add</i>'

  } else if ((window.innerWidth >= 920 && !isDesktop) || (window.innerWidth >= 920 && firstLoad)) {
    // toggle view
    isDesktop = !isDesktop;

    // change buttons style
    UIloginBtn.classList.add('button--style_bordered');
    UIloginBtn.classList.remove('button--style_text');
    UIloginBtn.classList.remove('main-header__btn--iconic');
    UIregBtn.classList.add('button--style_gradient');
    UIregBtn.classList.remove('button--style_text');
    UIregBtn.classList.remove('main-header__btn--iconic');

    // change buttons content to text
    UIloginBtn.innerHTML = 'login';
    UIregBtn.innerHTML = 'register';
  }
}