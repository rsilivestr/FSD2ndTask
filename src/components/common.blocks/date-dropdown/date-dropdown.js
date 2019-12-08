import datepicker from 'js-datepicker'

const UIdateDrops = document.querySelectorAll('.datepicker--single'),
  UIdateRangeDrops = document.querySelectorAll('.datepicker--range');

UIdateDrops.forEach(drop => {
  datepicker(drop, {
    formatter: (input, date, instance) => {
      const value = date.toLocaleDateString('ru-RU');
      input.value = value;
    }
  });
});

UIdateRangeDrops.forEach((drop, index) => {
  const start = datepicker(drop, {
    id: index,
    formatter: (input, date, instance) => {
      const value = date.toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'short',
      });
      input.value = value;
    }
  });
  const end = datepicker('.qs-datepicker-container', {
    id: index,
    formatter: (input, date, instance) => {
      const value = date.toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'short',
      });
      input.value = value;
    }
  });
});

// const picker = datepicker('.date-dropdown');