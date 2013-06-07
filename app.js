
/*jslint nomen:true, node:true*/


var express = require('express'),
    app;

app = express();
app.get('/*', function (req, res) {
    var time = Date();
    console.log('[' + time + '] req: ' + req.url);
    res.send('[' + time + '] 200 OK');
});

app.set('port', process.env.PORT || 8666);

module.exports = app;
