document.body.addEventListener('click', e => {
  if(e.target.closest('form')) {
    e.preventDefault();
  }
});