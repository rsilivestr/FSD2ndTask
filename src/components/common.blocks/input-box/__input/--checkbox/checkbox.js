document.body.addEventListener('click', toggleCheckBoxList);

function toggleCheckBoxList(e) {
  if(e.target.classList.contains('input-box__checkbox-group-title')) {
    e.target.parentElement.classList.toggle('input-box__checkbox-group--expanded');
  }
}