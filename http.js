const res = require('express/lib/response');
const fs = require('fs')
const { Console } = require('console');
const http = require('http');
const Port = process.env.Port || 5000;
const m = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html')
    console.log(req.url);
    if (req.url == '/') {
        res.statusCode = 200;

        res.end('<h1>Welcome to Website</h1>');
    } else if (req.url == '/login.html') {
        res.statusCode = 200;
        const data = fs.readFileSync('login.html')
        res.end(data.toString());


    } else if (req.url == '/adminHome.html') {
        res.statusCode = 200;
        const data = fs.readFileSync('adminHome.html')
        res.end(data.toString());


    } else {
        res.statusCode = 404;
        res.end('Page not found')
    }
});
m.listen(Port, () => {
    console.log(`Server connected to port: ${Port}`)
})