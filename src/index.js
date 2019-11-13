import './index.sass';
import './static/favicon.png';
import './static/bf.jpg';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

// let c = ((a,b) => a + b)(1, 1);
console.log(((a,b) => a + b)(1, 9));