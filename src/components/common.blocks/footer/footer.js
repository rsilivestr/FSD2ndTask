const footColTitleClass = 'main-footer__col-title--expandable';

document.body.addEventListener('click', e => {
  // if footer column nav title is clicked
  if (e.target.classList.contains(footColTitleClass)) {
    // expand nav-list & rotate expand_more icon
    e.target.classList.toggle('main-footer__col-title--expanded');
    e.target.nextElementSibling.classList.toggle('main-footer__nav-list--expanded');
  }
});

window.addEventListener('resize', resizeFooter);

function resizeFooter () {
  if (window.innerWidth >= 400) {
    // remove --expanded class on resize
    // no transition for expand_more (::after element) icon by default
    document.body.querySelectorAll('.main-footer__col-title--expanded').forEach(ul => ul.classList.remove('main-footer__col-title--expanded'));
    // remove --expanded class on resize from nav-list
    // all nav-lists are hidden by default
    document.body.querySelectorAll('.main-footer__nav-list--expanded').forEach(ul => ul.classList.remove('main-footer__nav-list--expanded'));
  }
}