const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpack = new HtmlWebpackPlugin({
  template: './assets/index.template.html',
  filename: './index.html',
});

/* This is telling webpack where to start and where to output the bundled file. */
module.exports = {
  entry: {
    app: './assets/javascript/entry.js',
    'service-worker': './assets/javascript/sw.js',
  },
  output: {
    publicPath: '/',
    path: path.join(__dirname, '..'),
    filename: '[name].js',
  },
  plugins: [htmlWebpack],
  /* Telling webpack to use the loaders for the files that match the test. */
  module: {
    rules: [
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: 'img/[name].[hash:7].[ext]',
        },
      },
      {
        test: /\.jpg$/,
        loader: 'url-loader',
      },

    ],
  },
};
