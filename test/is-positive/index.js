var isPositive = require('is-positive');

console.log('+1:' + isPositive(1));
console.log('+0:' + isPositive(+0));
console.log('-0:' + isPositive(-0));
console.log('-1:' + isPositive(-1));
