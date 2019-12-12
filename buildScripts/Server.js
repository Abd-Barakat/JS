var express = require('express');
var path = require('path');
var open = require('open');
var webpack = require('webpack');
var config = require('../WebPack.config.dev');

const port = 3000;
const app = express();

const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
}));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/Users', function(req, res) {
    res.json([
        { "id": 1, "firstName": "Abdel-Rahman", "lastName": "Barakat" },
        { "id": 2, "firstName": "Mohammed", "lastName": "Quraan" },
        { "id": 3, "firstName": "Ahmad", "lastName": "Al-Zoubi" }
    ]);
});
app.listen(port, function(err) {
    if (err) {
        console.log(err); //eslint-disable-line no-console 
    } else {
        open('http://localhost:' + port);
    }
});