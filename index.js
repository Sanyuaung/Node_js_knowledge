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

// const h = require('./helper');
// console.log(h.sum(8,9));
// console.log(h.isLikeBlack);

const http = require('http');
const fs = require('fs');
http.createServer((req, res) => {
    fs.readFile('./pages/index.html', (err, data) => {
        if (err) throw err;
        res.write(data);
        res.end()
    })
}).listen(3000, () => {
    console.log('Server is running on prot 3000');
});