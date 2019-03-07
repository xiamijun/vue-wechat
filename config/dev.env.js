/** @format */

'use strict';

var merge = require('webpack-merge');
var prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
  USE_PROXY: true, // 是否开启代理
  NODE_ENV: '"development"'
});
