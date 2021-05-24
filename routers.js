const routes = {
    get: {},
    post: {},
    delete: {},
    update: {},
};

const setRouter = (method, path, controller) => {
    routes[method.toLowerCase()][path] = controller;
    // console.log(routes);
};

const notFound = (req, res) => {
    res.writeHead(404, 'Content-Type', 'text/html');
    res.write('<h1>Page not found</h1>');
    res.write('<a href="/">return to home</a>');
    res.end();
};

const useRouter = (method, path = '') => {
    if (typeof routes[method][path] === 'function') {
        return routes[method][path];
    } else if (path.startsWith('/public')) {
        return routes[method]['/public'];
    } else {
        return notFound;
    }
};

module.exports = {
    setRouter,
    useRouter
};