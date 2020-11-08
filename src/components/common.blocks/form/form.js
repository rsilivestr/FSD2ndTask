import './--type/search-room/search-room';
import './--type/booking/booking';

// Prevent form submit
document.body.addEventListener('click', (e) => {
  if (e.target.matches('button')) {
    e.preventDefault();
  }
});
