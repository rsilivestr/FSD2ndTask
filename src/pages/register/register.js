import { FSD2ndTaskMaskedDate } from 'Plugins/FSD2ndTaskMaskedDate';

if (document.body.classList.contains('page-register')) {
  new FSD2ndTaskMaskedDate('.js-dob-masked');
}
