const config = require('./webpack.config');

config.mode = 'production';
config.devServer = {};
module.exports = config;