var path = require('path')

var env = process.env.ENV || 'development'
var destination = 'build'
var source = 'src'

var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  watch: env === 'development',
  entry: './app.js',
  context: path.resolve(source),
  output: {
    filename: 'application.js',
    path: path.resolve(destination)
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },

  plugins: [
    new HtmlWebpackPlugin({
        template: './public/index.html',
        inject: 'body'
      }),
    new MiniCssExtractPlugin({
      filename: "styles.css"
    })
    ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader || 'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.jsx?$/,
        include: /src/,
        loader: 'babel-loader',
        query: {
          babelrc: false,
          presets: [['es2015', { modules: false }], 'react']
        }
      }
    ]
  }
}
