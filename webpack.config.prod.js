const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
  output: {
    publicPath: '/MasterStroy/', // Укажите путь к вашему репозиторию
  },
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new CopyPlugin({
      patterns: [
        { from: 'img', to: 'img' },
        { from: 'icons', to: 'icons' },
        { from: 'css', to: 'css' },
        { from: 'fonts', to: 'fonts' },
        { from: 'js/vendor', to: 'js/vendor' },
        { from: 'icon.svg', to: 'icon.svg' },
        { from: 'favicon.ico', to: 'favicon.ico' },
        { from: 'robots.txt', to: 'robots.txt' },
        { from: 'icon.png', to: 'icon.png' },
        { from: '404.html', to: '404.html' },
        { from: 'site.webmanifest', to: 'site.webmanifest' },
      ],
    }),
  ],
  rules: [
    {
      test: /\.(png|jpe?g|gif|svg|webp)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'img/[name][ext]',
      },
    },
  ],
});
