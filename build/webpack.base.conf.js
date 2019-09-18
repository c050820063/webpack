const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const dev = require('./webpack.dev.conf');
const prod = require('./webpack.prod.conf');

const resolve = (dir) => {
  return path.resolve(__dirname, '..', dir)
}

module.exports = (env) => {
  const isDev = env === 'development'
  console.log(isDev)
  const base = {
    // 入口
    entry: resolve('src/index.js'),
    // 出口
    output: {
      path: resolve('dist'),
      filename: '[name].js',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.(eot|woff|ttf|otf)$/,
          use: 'file-loader'
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 10 * 1024,
              name: '[hash:8].[ext]',
              outputPath: 'img'
            }
          }
        },
        {
          test: /\.(c|sc|sa)ss$/,
          use: [
            !isDev ? {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: isDev,
                publicPath: '../'
              }
            } : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2 // 引入的文件需要调用sass-loader来处理 
              }
            },
            'postcss-loader',
            'sass-loader'
          ]
        }
      ]
    },
    // 插件
    plugins: [
      !isDev && new MiniCssExtractPlugin({
        filename: 'css/[name].[hash:8].css'
      }),
      new HtmlWebpackPlugin({
        template: resolve('public/index.html'),
        filename: 'index.html', // 打包出来的文件名
        // hash: true,
        minify: {
          removeAttributeQuotes: true, // 删除属性双引号
          removeComments: true, //移除HTML中的注释
          collapseWhitespace: true //删除空白符与换行符
        }
      })
    ].filter(Boolean)
  }
  return merge(base, isDev ? dev : prod)
}