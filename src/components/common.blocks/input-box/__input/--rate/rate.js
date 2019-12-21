document.body.addEventListener('click', setStarRating);

function setStarRating(e) {
  if(e.target.classList.contains('rate-box__star--rateable')) {
    const UIstars = e.target.parentElement.querySelectorAll('.rate-box__star');
    UIstars.forEach(star => {
      star.classList.remove('rate-box__star--active');
    });
    e.target.classList.add('rate-box__star--active');
  }
}