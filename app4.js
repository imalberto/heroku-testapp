

/*jslint nomen:true, node:true*/


/**

NOTE that there is no `listen()` call, so as such will not work on open source
nodejs.

ynodejs: node-start ./app3.js

**/

var app = require('./app'),
    port = app.get('port');

// debugger;
app.listen(port, function () {
    console.log('Server ready to serve on port: ' + port);
});
