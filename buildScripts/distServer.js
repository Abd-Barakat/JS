var express = require('express');
var path = require('path');
var open = require('open');
//var compression = require('compression');

const port = 3000;
const app = express();

//app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});


app.listen(port, function(err) {
    if (err) {
        console.log(err); //eslint-disable-line no-console 
    } else {
        open('http://localhost:' + port);
    }
});