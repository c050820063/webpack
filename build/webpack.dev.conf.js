const path = require('path');

module.exports = {
  mode: 'development',
  devServer: {
    publicPath: '/',
    clientLogLevel: 'warning',
    inline: true,
    hot: true,
    compress: true,
    port: '3000',
    open: false,
    overlay: false,
    contentBase: false,
    quiet: true, // necessary for FriendlyErrorsPlugin
  }
  
}