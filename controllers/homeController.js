const fs = require('fs/promises');

module.exports = (req, res) => {
	fs.readFile('./views/home/index.html')
		.then(data => {
			res.writeHead(200, 'Content-Type', 'text/html');
			res.write(data);
			res.end();
		})
		.catch(console.log);
	// res.write('<a href="/cats">Cats page</a>');
};