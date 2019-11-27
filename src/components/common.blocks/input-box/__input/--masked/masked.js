import IMask from 'imask';

const UIdateMaskFields = document.querySelectorAll('.input-box__input--masked-date');

UIdateMaskFields.forEach(dateMask => {
  IMask(
    dateMask,
    {
      mask: Date,
      overwrite: true,
      autofix: true,
      blocks: {
        d: {
          mask: IMask.MaskedRange, 
          placeholderChar: 'Д', 
          from: 1, 
          to: 31, 
          maxLength: 2
        },
        m: {
          mask: IMask.MaskedRange, 
          placeholderChar: 'М', 
          from: 1, 
          to: 12, 
          maxLength: 2
        },
        Y: {
          mask: IMask.MaskedRange, 
          placeholderChar: 'Г', 
          from: 1900, 
          to: 2999, 
          maxLength: 4
        }
      },
      lazy: false
    }
  );
});