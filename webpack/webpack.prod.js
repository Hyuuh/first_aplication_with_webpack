const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  stats: { children: true },
  output: {
    publicPath: '.',
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.html$/i,
        use: { loader: 'html-loader', options: { minimize: true } },
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
});
