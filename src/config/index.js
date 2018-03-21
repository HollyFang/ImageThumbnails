const config = new Map();
config.set('sport', 3000);
//静态资源的存放
config.set('staticDir', `${__dirname}/../../dist`);
//视图的存放
config.set('viewsDir', `${__dirname}/../../dist`);

module.exports = config;