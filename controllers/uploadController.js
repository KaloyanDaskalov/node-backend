const fs = require('fs');
const cats = require('../database/cats.json');
// const formidable = require('formidable');

module.exports = (req, res) => {
    // const form = new formidable.IncomingForm();

    // form.parse(req, async (err, fields, files) => {
    //     const filePath = files['uploaded-file'].path;
    //     const name = files['uploaded-file'].name;
    //     const targetPath = './uploads/' + name;

    //     await fs.rename(filePath, targetPath);

    //     res.writeHead(301, {
    //         'Location': '/catalog'
    //     });
    //     res.end();
    // });
    // const target = fs.createWriteStream('./database/cats.json');
    let newCat = '';
    req.on('data', data => {
        newCat += data;
    });
    req.on('end', () => {
        const pattern = /name=(?<name>[\w ]+)&description=(?<description>[\w\W]+)&breed=(?<breed>[\w ]+)/;
        console.log(newCat.replace(/\+/g, ' ').match(pattern));
        res.writeHead(301, {
            'Location': '/'
        });
        res.end();
    });
};