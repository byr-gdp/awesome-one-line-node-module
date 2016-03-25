var leftPad = require('left-pad');

console.log(leftPad('foo', 5));
console.log(leftPad('foobar', 6));
console.log(leftPad(1, 2, 0));  // 第三个参数用于 pad 值
