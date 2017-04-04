var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.[hash].js',
    publicPath: '/assets/',
    library: 'loginComponent'
  },
  resolve: {
    extensions: ['.js','.json','.jsx']
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),

    new webpack.optimize.OccurrenceOrderPlugin(true),
    // Compress and uglify the output.    
    new webpack.LoaderOptionsPlugin({
      minimize:true,
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      mangle: true,
      output: {
        comments: false
      },
      compress: {
        sequences: true,
        dead_code: true,
        conditionals: true,
        booleans: true,
        unused: true,
        if_return: true,
        join_vars: true,
        drop_console: true,
        warnings: false
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [ 'babel-loader' ]

      },
      {
        test: /\.jsx$/,
        use: ['babel-loader'],
      }
    ]
  }
};
