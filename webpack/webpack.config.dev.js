var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    './src/index'
  ],
  resolve: {
    extensions: ['.js','.json','.jsx']
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.js',
    publicPath: '/assets/',
    library: 'loginComponent'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [ 'babel-loader']
      },
      {
        test: /\.jsx$/,
        use: ['babel-loader']
      }
    ]
  }
};
