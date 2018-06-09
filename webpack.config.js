const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = [
  {
    entry: './src/index.js',
    output: {
      path: __dirname + '/dist/',
    },
    devServer: {
      contentBase: './dist'
    },
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.tag$/,
          enforce: 'pre',
          exclude: /node_modules/,
          use: 'riotjs-loader'
        },
        {
          test: /\.js|\.tag$/,
          enforce: 'post',
          exclude: /node_modules/,
          use: ['buble-loader']
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.tag']
    },
    plugins: [
      new webpack.ProvidePlugin({
        riot: 'riot'
      }),
      new HtmlWebpackPlugin({
        template: 'src/index.html'
      })
    ]
  }
]