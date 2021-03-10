import Datepicker from 'Components/date-dropdown/Datepicker';
import Dropdown from 'Components/dropdown/Dropdown';
import Rangepicker from 'Components/range/Rangepicker';
import Datemask from 'Components/masked-date/Datemask';
import Spoiler from 'Components/spoiler/Spoiler';
import LikeCounter from 'Components/like-counter/LikeCounter';
import StarRating from 'Components/star-rating/StarRating';

new Datepicker('.js-datepicker-double');

new Datepicker('.js-datepicker-range', { range: true, size: 'm' });

new Rangepicker('.js-rangepicker');

new Datemask('.js-masked-date');

new Dropdown(document.querySelector('.js-dropdown-1'));

new Dropdown(document.querySelector('.js-dropdown-2'), {
  type: 'multi',
});

Array.from(document.querySelectorAll('.js-spoiler')).forEach(
  (spoiler) => new Spoiler(spoiler)
);

Array.from(document.querySelectorAll('.js-like')).forEach(
  (like) => new LikeCounter(like)
);

new StarRating(document.querySelector('.js-rating'));
