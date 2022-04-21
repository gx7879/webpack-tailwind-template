const webpack =  require('webpack')
const { merge } = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map'
    })
  ],
})

module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig)
})