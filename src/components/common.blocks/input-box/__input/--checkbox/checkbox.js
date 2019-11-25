document.body.addEventListener('click', toggleChecklist);

function toggleChecklist(e) {
  // if we got expandable checkbox list title
  if(e.target.classList.contains('input-box__checkbox-group-title')) {
    e.target.parentElement.classList.toggle('input-box__checkbox-group--expanded');
  }
}