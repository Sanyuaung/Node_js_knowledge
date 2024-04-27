const http = require('http');
http.createServer((req, res) => {
    res.end('Hello Nodejs')
}).listen(3000, () => {
    console.log('Server is running on prot 3000');
});