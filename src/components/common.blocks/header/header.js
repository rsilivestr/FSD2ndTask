const UIloginBtn = document.querySelectorAll('.main-header__btn')[0],
  UIloginBtnInner = UIloginBtn ? UIloginBtn.querySelector('span') : null;
  UIregBtn = document.querySelectorAll('.main-header__btn')[1],
  UIregBtnInner = UIregBtn ? UIregBtn.querySelector('span') : null;;

resizeHeader(true);
window.onresize = resizeHeader;
// determine initial view
let isDesktop = (window.outerWidth > 920) ? true : false;
function resizeHeader(firstLoad=false) {
  // if view were changed on resize
  if ((window.outerWidth < 920 && isDesktop) || (window.outerWidth < 920 && firstLoad)) {
    // toggle view
    isDesktop = !isDesktop;

    // change buttons style
    UIloginBtn.classList.remove('button--style_bordered');
    UIloginBtn.classList.add('button--style_text');
    UIregBtn.classList.remove('button--style_gradient');
    UIregBtn.classList.add('button--style_text');

    // change buttons content to icons
    UIloginBtnInner.innerHTML = '<i class="material-icons">input</i>'
    UIregBtnInner.innerHTML = '<i class="material-icons">person_add</i>'

  } else if ((window.outerWidth >= 920 && !isDesktop) || (window.outerWidth >= 920 && firstLoad)) {
    // toggle view
    isDesktop = !isDesktop;

    // change buttons style
    UIloginBtn.classList.add('button--style_bordered');
    UIloginBtn.classList.remove('button--style_text');
    UIregBtn.classList.add('button--style_gradient');
    UIregBtn.classList.remove('button--style_text');

    // change buttons content to text
    UIloginBtnInner.innerHTML = 'login'
    UIregBtnInner.innerHTML = 'register'
  }
}