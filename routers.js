const routes = {
    get: {},
    post: {},
    delete: {},
    update: {},
};

const setRouter = (method, path, controller) => {
    routes[method.toLowerCase()][path] = controller;
    console.log(routes);
}

const useRouter = (req, res) => {
    const method = req.method.toLowerCase();
    const path = req.url.toLowerCase();

    if (typeof routes[method][path] === 'function') {
        routes[method.toLowerCase()][path](req, res);
        return;
    } else {
        res.writeHead(404, 'Content-Type', 'text/html');
        res.write('<h1>Page not found</h1>');
        res.write('<a href="/">return to home</a>');
        res.end();
    }
};

module.exports = {
    setRouter,
    useRouter
};