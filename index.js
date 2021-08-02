const http = require('http');
const path = require('path');
const fs = require('fs');

let app = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url === '/') {
        // console.log(__dirname);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Welcome to my home page!<h1>')
    } 
      else if (req.url === '/music') {
        res.writeHead(200, {'Content-Type': 'video/mp4'});     
        let vidstream = fs.createReadStream('assets/Omar_6.mp4');
        vidstream.pipe(res);
    } 
      else if (req.url === '/about') {
        // console.log(__filename);
        console.log(path.join(__dirname, 'public', 'index.html'));
        fs.readFile(
            path.join(__dirname, 'public', 'index.html'),
            (err, content) => {
                if (err) throw err;
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(content);
            }
        )
    }
    // res.writeHead(200, {'Content-Type': 'text/plain'});
    // res.writeHead(200, {'Content-Type': 'video/mp4'});    
    // res.end('Hello World! It is me!\n');
    // let vidstream = fs.createReadStream('assets/Omar_6.mp4');
    // vidstream.pipe(res);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Node server running on port ${PORT}`));



// const Item = require('./person');
// const item1 = new Item('John Smith', 30);
// item1.greeting();