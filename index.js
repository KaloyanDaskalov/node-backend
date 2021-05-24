const http = require('http');
const { setRouter, useRouter } = require('./routers');
const controllers = require('./controllers/index');
const port = 5000;

setRouter('get', '/', controllers.home);
setRouter('get', '/cats', controllers.cats);
setRouter('get', '/public', controllers.public);

const server = http.createServer((req, res) => {
    const method = req.method.toLowerCase();
    const path = req.url.toLowerCase();
    useRouter(method, path)(req, res);
});

server.listen(port, () => console.log.bind(console, `Server start listening at port: ${port}...`));

// server.once('listening', () => console.log('>>> Server Listening Event <<<'));

// const uri = new URL(req.url, `https://${req.headers.host}`);
// uri.searchParams.forEach((val, key) => console.log(`${key} = ${val}`));