const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
});
