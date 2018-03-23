const images = require("images");
const fs = require('fs');

let path = __dirname + '/../photoes';
//console.log(path);
let files = fs.readdirSync(path);
files.forEach((val, index) => {
    if (!val.startsWith('.')) {
        let fPath = path + '/' + val;
        let stats = fs.statSync(fPath);
        if (stats.isFile()) {
            let destDirect = __dirname + "/../../dist/thumbnails/";
            if (!fs.existsSync(destDirect)) {
                fs.mkdirSync(destDirect);
            }
            compress(val, path + '/', destDirect);
            destDirect = __dirname + "/../../dist/images/";
            if (!fs.existsSync(destDirect)) {
                fs.mkdirSync(destDirect);
            }
            fs.createReadStream(path + '/' + val).pipe(fs.createWriteStream(destDirect + val));

        }
    }
});

function compress(srcName, srcDirect, destDirect) {
    images(srcDirect + srcName)
        .size(200)
        .save(destDirect + srcName, {
            quality: 20
        });
}