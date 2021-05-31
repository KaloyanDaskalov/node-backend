const fs = require('fs/promises');

module.exports = async (req, res) => {

	try {
		const data = await fs.readFile('./views/home/index.html');
		res.writeHead(200, 'Content-Type', 'text/html');
		res.write(data.toString().replace(/Kitty/g, 'Bunny'));
		res.end();
	} catch (err) {
		console.log(err);
	}
};