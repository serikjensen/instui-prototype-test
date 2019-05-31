const path = require('path')
const baseConfig = require('@instructure/ui-webpack-config')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const outputPath = path.resolve(__dirname, '__build__')

module.exports = {
  ...baseConfig,
  entry: './src/index.js',
  output: {
    path: outputPath,
    filename: '[name].js'
  },
  devServer: {
    contentBase: outputPath,
    host: '0.0.0.0'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './favicon.ico'
    })
  ]
}
