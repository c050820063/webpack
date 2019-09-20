const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devServer: {
    publicPath: '/',
    clientLogLevel: 'warning',
    inline: true,
    hot: true,
    compress: true,
    port: '3001',
    open: false,
    overlay: false,
    contentBase: false,
    quiet: true, // necessary for FriendlyErrorsPlugin
  },
  plugins: [
    // 热更新，热更新不是刷新
    new webpack.HotModuleReplacementPlugin()
  ],
}