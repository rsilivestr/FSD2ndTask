if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

console.log(((a,b) => a + b)(1, 9));