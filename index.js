// console.log("Hello SYA");
// const fs = require('fs');

// console.log('start program');
// fs.readFile('node.txt', (err, data) => {
//     if (err) throw err;
//     console.log(data.toString());
// })
// const node = fs.readFileSync('node.txt');
// console.log(node.toString());
// console.log('end program');

const h = require('./helper');
console.log(h.sum(8,9));
console.log(h.isLikeBlack);