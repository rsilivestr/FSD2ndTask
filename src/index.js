import _ from 'lodash';
import printMe from './print.js';
import './index.scss';
import Favicon from './favicon.png';

function component() {
  const element = document.createElement('div');
  
  const logo = new Image();
  logo.src = Favicon;
  const hello = document.createElement('span');
  hello.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // const para = _.join(['Hello', 'webpack'], ' ');
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.appendChild(logo);
  element.appendChild(hello);

  const btn = document.createElement('button');
  btn.innerHTML = 'Output to console log';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());