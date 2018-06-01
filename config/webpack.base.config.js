/* eslint-env node */

const path = require('path')

module.exports = {
  entry: {
    'keycuts-react': path.resolve(__dirname, '../src/index.js')
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    library: {
      root: 'keycutsReact',
      amd: 'keycuts-react',
      commonjs: 'keycuts-react'
    },
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}
