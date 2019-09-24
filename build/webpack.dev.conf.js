const path = require('path');
const { HotModuleReplacementPlugin, DllReferencePlugin } = require('webpack');
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');

module.exports = {
  mode: 'development',
  devServer: {
    publicPath: '/',
    // contentBase: path.resolve(__dirname),
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
    new HotModuleReplacementPlugin(),
    // 添加动态链接库
    new DllReferencePlugin({
      manifest: path.resolve(__dirname, '../dll/manifest.json')
    }),
    new AddAssetHtmlWebpackPlugin({
      filepath: path.resolve(__dirname, '../dll/*.dll.js')
    })
  ],
}