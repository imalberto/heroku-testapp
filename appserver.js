
/*jslint nomen:true, node:true*/

// console.log('working dir: ' + process.cwd());
// process.chdir(__dirname);

var express = require('express'),
    http = require('http'),
    app = require('./app'),
    port = app.get('port'),
    server;


//
// Assumption: sync 
/*
server = http.createServer(app);
server.listen(8888, function () {
    console.log('Server ready: port 8888');
});

module.exports = server;
*/

//
// Assumption: async
//
/*
module.exports = function (config, token) {

    // I suspect `config` here comes from /home/y/conf/node/services/<app>/<app>.json
    // console.log(config);
    // console.log(token.toString());
    // function (handler) {
    //     application_done(appname, handler);
    // }

    app.processMe = function (who, cb) {
        console.log('Who Am I: ' + who);
        cb();
    };
    // kick start the async process here
    //
    app.processMe('Joe', function () {
        process.emit('application-ready', token, app);
    });
};
*/


