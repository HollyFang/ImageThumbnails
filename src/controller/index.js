const fs = require('fs');
var MIME_TYPES = {
	'_': 'text/plain',
	'.txt': 'text/plain',
	'.md': 'text/plain',
	'.html': 'text/html',
	'.css': 'text/css',
	'.js': 'application/javascript',
	'.json': 'application/json',
	'.jpg': 'image/jpeg',
	'.jpeg': 'image/jpeg',
	'.png': 'image/png',
	'.gif': 'image/gif'
};

function controller(pathname, basepath, res) {
	switch (pathname) {
		case '/':
		case '/index':
			renderHtml(basepath + "/index.html", res);
			break;
		default:
			getStatic(basepath + pathname, res);
			break;
	}
}

function renderHtml(filePath, res) {
	fs.readFile(filePath, (err, data) => {
		if (err) {
			console.log(err);
			deal404();
		} else {
			res.writeHead(200, {
				'Content-Type': MIME_TYPES[getExtention(filePath)]
			});
			res.write(data.toString());
			res.end();
		}
	});
}

function getStatic(filePath, res) {
	if (fs.existsSync(filePath)) {
		fs.readFile(filePath, (err, data) => {
			if (err) {
				console.log(err);
				deal404();
			} else {
				if (/\.(jpg|jpeg)$/.test(filePath)) {
					res.writeHead(200, {
						'Content-Type': MIME_TYPES[getExtention(filePath)]
					});
					var img = new Buffer(data);
					res.end(img);
				} else {
					res.writeHead(200, {
						'Content-Type': MIME_TYPES[getExtention(filePath)]
					});
					res.write(data.toString());
					res.end();
				}
			}
		});
	} else
		deal404(res);

}

function deal404(res) {
	res.writeHead(404, {
		'Content-Type': 'text/html'
	});
	res.end();
}

function getExtention(filePath) {
	let info = filePath.split('/');
	let fileName = info[info.length - 1];
	let name = fileName.split('.');
	console.log("****" + (name.length > 1 ? '.' + name[name.length - 1] : "_"), filePath);
	return name.length > 1 ? '.' + name[name.length - 1] : "_";
}
module.exports = controller;