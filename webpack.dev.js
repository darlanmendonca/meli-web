const merge = require('webpack-merge').default
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    port: 4000,
    historyApiFallback: true,
  },
})
