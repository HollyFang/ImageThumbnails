const http = require('http');
const url = require('url');
const config = require('./config');
const controller = require("./controller");

const port = config.get('sport');
const staticDir = config.get('staticDir');

http.createServer(function(request, response) {
	var pathname = url.parse(request.url).pathname;
	console.log("Request for " + pathname + " received.");
	controller(pathname, staticDir, response);

}).listen(port);

console.log('Server running at http://127.0.0.1:' + port);

process.on('unhandledRejection', (reason, p) => {
	console.log('Unhandled Rejection at:', p, 'reason:', reason);
	// too lasy to use log4js
});