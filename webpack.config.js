const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'qr-code-component/bundle.js',
    publicPath: '/qr-code-component/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png'
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  devServer: {
      historyApiFallback: true,
      static: {
        directory: path.join(__dirname, 'public'),
        },
      compress: true,
      port: 3005,
    },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'QR Code Component',
      templateContent: ({ htmlWebpackPlugin }) => '<!DOCTYPE html><html lang="en"><head><meta charset=\"utf-8\"><title>' + htmlWebpackPlugin.options.title + '</title></head><body><div id=\"app\"></div></body></html>',
      filename: 'index.html',
      favicon: './src/assets/favicon-32x32.png'
    }),
    new MiniCssExtractPlugin()
  ]
};

module.exports = config;