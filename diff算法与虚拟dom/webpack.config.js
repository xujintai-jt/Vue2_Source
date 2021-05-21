const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    //虚拟打包路径
    publicPath: "/xuni/",
    filename: "bundle.js",
  },
  //使用后js文件热更新、html文件不会
  devServer: {
    //静态资源文件夹目录
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
};
