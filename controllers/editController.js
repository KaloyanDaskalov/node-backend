const fs = require('fs/promises');

module.exports = (req, res) => {
    fs.readFile('./views/editCat.html')
        .then(data => {
            res.writeHead(200, 'Content-Type', 'text/html');
            res.write(data);
            res.end();
        })
        .catch(console.log);
};