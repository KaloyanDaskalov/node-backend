const fs = require('fs/promises');

module.exports = async (req, res) => {

    try {
        const data = await fs.readFile('./views/catShelter.html');
        res.writeHead(200, 'Content-Type', 'text/html');
        res.write(data);
        res.end();
    } catch (err) {
        console.log(err);
    }
    // res.write('<a href="/cats">Cats page</a>');
};