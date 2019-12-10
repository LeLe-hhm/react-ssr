const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  target: 'node',
  externals: [nodeExternals()], // 防止node_modules 下面的文件被打包
  mode: 'development',
  entry: './server/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
        test: /\.js$/,
        // 支持 import、jsx
        loader: 'babel-loader',
        // 排除
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react', ['@babel/preset-env']]
        }
      },
      // {
      // 防止不能运行在node服务层的文件被打包
      // test: /\.(scss|css|pdf)$/,
      // loader: 'ignore-loader',
      // },
    ]
  }
}