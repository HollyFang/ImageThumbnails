const images = require("images");
const fs=require('fs');

let path=__dirname+'/../photoes';
//console.log(path);
let files=fs.readdirSync(path);
        files.forEach((val,index) => {
        	if(!val.startsWith('.')){
            let fPath=path+'/'+val;
            let stats=fs.statSync(fPath);
            if(stats.isFile()) {
            	compress(val,path+'/',__dirname+"/../../dist/images/");
            }
          }
        });
function compress(srcName,srcDirect,destDirect){
	images(srcDirect+srcName) 
    .size(300)
    .save(destDirect+srcName, {
        quality : 50 
    });
}