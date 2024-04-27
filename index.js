// console.log("Hello SYA");
const fs = require('fs');
console.log('start program');
const node = fs.readFileSync('node.txt');
console.log(node.toString());
console.log('end program');