var express= require('express');
var path = require('path');

var app = express();

var static_path = path.join(__dirname, './../build');

app.enable('trust proxy');

app.route('/').get(function(req, res) {
    res.header('Cache-Control', "max-age=60, must-revalidate, private");
    res.sendFile('index.html', {
        root: static_path
    });
});

function nocache(req, res, next) {
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    next();
}

app.use('/', express.static(static_path, {
    maxage: 31557600
}));

var server = app.listen(process.env.PORT || 5000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});