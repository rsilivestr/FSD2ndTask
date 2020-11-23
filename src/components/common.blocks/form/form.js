// Prevent form submit
document.body.addEventListener('click', (e) => {
  if (e.target.matches('button')) e.preventDefault();
});
