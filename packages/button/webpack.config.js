const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('../../webpack.common.js');

const componentConfig = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  }
}

module.exports = () => {
  const config = merge(commonConfig, componentConfig);

  return config;
}