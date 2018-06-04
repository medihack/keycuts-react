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
        include: path.resolve(__dirname, '../src'),
        loader: 'eslint-loader'
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, '../src'),
        loader: 'babel-loader'
      }
    ]
  }
}
