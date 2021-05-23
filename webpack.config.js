const path = require('path');

module.exports = {
  mode:"development",
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  //使用后js文件热更新、html文件不会
  devServer: {
    //静态资源文件夹目录
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    //虚拟打包路径
    publicPath:'/xuni/'
  }
};