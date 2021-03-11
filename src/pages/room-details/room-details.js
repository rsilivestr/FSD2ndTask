import 'Components/form/--type/booking/booking';
import Header from 'Components/header/Header';
import Diagram from 'Components/diagram/Diagram';

new Header();

const votes = [
  { name: 'great', count: 111, colors: ['#ffe39c', '#ffba9c'] },
  { name: 'good', count: 66, colors: ['#6fcf97', '#66d2ea'] },
  { name: 'poor', count: 55, colors: ['#bc9cff', '#8ba4f9'] },
  { name: 'bad', count: 7, colors: ['#909090', '#3d4975'] },
];

const canvas = document.querySelector('.js-canvas');
new Diagram(canvas, votes);
