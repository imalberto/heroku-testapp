

/*jslint nomen:true, node:true*/


/**

NOTE that there is no `listen()` call, so as such will not work on open source
nodejs.

ynodejs: node-start ./app2.js

**/

var http = require('http'),
    app = require('./app'),
    port = app.get('port'),
    server;

server = http.createServer(app);

module.exports = server;


// This will also work
// module.exports = server.listen(port);

