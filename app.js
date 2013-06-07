
/*jslint nomen:true, node:true*/


var express = require('express'),
    app;

app = express();
app.get('/*', function (req, res) {
    var time = Date();
    console.log('[' + time + '] req: ' + req.url);
    res.send('[' + time + '] 200 OK');
});

app.set('port', 80);

module.exports = app;
