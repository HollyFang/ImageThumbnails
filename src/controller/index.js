
const fs = require('fs');

function controller(pathname,basepath,res){
	switch(pathname){
		case '/':
		case '/index':
			renderHtml(basepath+"/index.html",res);
		break;
		case 'a':
		    res.writeHead(200, {"Content-Type": "text/plain"});
		    res.write("Hello this is a~");
      		res.end();
		break;
		default:
			getStatic(basepath+pathname,res);
		break;
	}
}

function renderHtml(filePath,res){
	fs.readFile(filePath,  (err, data) => {
		if (err) {
			console.log(err);
			deal404();
		}else{
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(data.toString()); 
      		res.end();       
		}
	});
}
function getStatic(filePath,res){
	fs.readFile(filePath,  (err, data) => {
		if (err) {
			console.log(err);
			deal404();
		}else{
			res.writeHead(200, {'Content-Type': 'text/plain'});
			res.write(data.toString()); 
      		res.end();       
		}
	});
}
function deal404(res){
    res.writeHead(404, {'Content-Type': 'text/html'});
	res.end();  
}
module.exports=controller;