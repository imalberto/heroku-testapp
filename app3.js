

/*jslint nomen:true, node:true*/


/**

NOTE that there is no `listen()` call, so as such will not work on open source
nodejs.

ynodejs: node-start ./app3.js

**/

var app = require('./app');

module.exports = function (config, token) {
    process.emit('application-ready', token, app);
};


// This will also work
// module.exports = server.listen(port);

