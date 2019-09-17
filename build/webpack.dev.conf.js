const path = require('path');

module.exports = {
  mode: 'development',
  devServer: {
    port: 3000,
    compress: true, // 开启gzip
    contentBase: path.resolve(__dirname, '../dist') // 更改静态文件目录位置
  }
}