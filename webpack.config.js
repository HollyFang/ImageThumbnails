const DevWebpack = require('./src/config/webpack.dev');
const ProdWebpack = require('./src/config/webpack.prod');
switch (process.env.npm_lifecycle_event) {
    case 'dev':
        module.exports = DevWebpack;
        break;
    case 'prod':
        console.log("************************");
        module.exports = ProdWebpack;
        break;
    default:
        module.exports = DevWebpack;
        break;
}