document.body.addEventListener('click', handleLike);

function handleLike(e) {
  if(e.target.classList.contains('input-box__like-checkbox')) {
    const UIlikeCounter = e.target.nextElementSibling.querySelector('.input-box__like-counter');
    if(e.target.checked == true) {
      UIlikeCounter.innerText = parseInt(UIlikeCounter.innerText) + 1;
    } else if(e.target.checked == false) {
      UIlikeCounter.innerText = parseInt(UIlikeCounter.innerText) - 1;
    }
  }
}