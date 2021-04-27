const path = require('path');

const config = {
  mode:"development",
  entry: path.resolve(__dirname, 'module/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: "babel-loader" ,
        options:{
            presets: ["@babel/preset-env"]
        }
    }
    ]
  }
};

module.exports = config;