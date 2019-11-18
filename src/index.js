const routerNav = document.querySelector('.router__nav'),
      routerIframe = document.querySelector('.router__current-page');
if(routerNav) {
  routerNav.addEventListener('click', e => {
    if(e.target.classList.contains('router__navlink')) {
      e.preventDefault();

      routerIframe.src = e.target.href;
    }
  });
}
