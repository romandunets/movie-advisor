const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'build');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

const config = {
  entry: [
    'webpack/hot/dev-server',
    'webpack/hot/only-dev-server',
    path.join(__dirname, '/src/index.js')
  ],
  devServer: {
    contentBase: 'src/public',
    devtool: 'eval',
    hot: true,
    inline: true,
    historyApiFallback: true,
    port: 3000,
    host: '0.0.0.0'
  },
  devtool: 'eval',
  output: {
    path: buildPath,
    filename: 'index.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new TransferWebpackPlugin([
      {from: 'public'},
    ], path.resolve(__dirname, 'src')),
    new webpack.DefinePlugin({
      'process.env': {
        'API_HOST': JSON.stringify('http://0.0.0.0:9000')
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
      include: __dirname,
      query: {
        presets:['react', 'es2015'],
        plugins: ['transform-object-rest-spread']
      }
    }, {
      test: /\.css?$/,
      loaders: [ 'style', 'raw' ],
      include: __dirname
    }]
  },
};

module.exports = config;
