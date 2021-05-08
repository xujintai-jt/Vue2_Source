const path = require('path');

module.exports = {
  mode:"development",
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    //根目录
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    //虚拟打包路径
    publicPath:'/xuni/'
  }
};