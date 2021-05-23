const http = require('http');
const { setRouter, useRouter } = require('./routers');
const port = 3030;

const home = (req, res) => {
    res.writeHead(200, 'Content-Type', 'text/html');
    res.write('<h1>Home Page</h1>');
    res.write('<a href="/cats">Cats page</a>');
    res.end();
};

const cats = (req, res) => {
    res.writeHead(200, 'Content-Type', 'text/html');
    res.write('<h1>Cats Page</h1>');
    res.write('<a href="/">Home page</a>');
    res.end();
};

setRouter('get', '/', home);
setRouter('get', '/cats', cats);

const server = http.createServer(useRouter);

server.listen(port, () => console.log(`Server started at port: ${port}`));

// server.once('listening', () => console.log('>>> Server Listening Event <<<'));

// const uri = new URL(req.url, `https://${req.headers.host}`);
// uri.searchParams.forEach((val, key) => console.log(`${key} = ${val}`));