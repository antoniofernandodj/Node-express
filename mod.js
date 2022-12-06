const { readFileSync } = require('fs');
const { urls } = require('./urls')

function render(req, res) {
    let url = `${req.url}`;
    let doc = urls[url];
    console.log(`Getting: url '${url}'`);
    console.log(`Serving document: '${doc}'`);
    const resp = readFileSync(doc);
    res.end(resp);
}

module.exports = {
    render: render,
    urls: urls
}