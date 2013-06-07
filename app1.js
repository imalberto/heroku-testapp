

/*jslint nomen:true, node:true*/


/**

open source nodejs: node ./app1.js

ynodejs: node-start ./app1.js

**/

var http = require('http'),
    app = require('./app'),
    port = app.get('port');

http.createServer(app).listen(port, function () {
    console.log('[app1] ready to serve on port: ' + port);
});


// This will also work
// module.exports = http.createServer(app).listen(port, function () {
//     console.log('[app1] ready to serve on port: ' + port);
// });

