const path = require('path');
const webpack = require('webpack');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TSConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = (env, options) => {
  const devMode = options.mode === 'development';
  const config = {
    entry: './src/index.tsx',
    devtool: devMode ? 'eval' : 'source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: [/(\.d\.ts)/, /node_modules/],
          use: {
            loader: 'ts-loader'
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', { loader: 'css-loader', options: { importLoaders: 1 } }],
        },
        {
          test: /\.scss$/,
          loaders: [
            'style-loader',
            { loader: 'css-loader', options: { importLoaders: 1 } },
            'sass-loader',
          ],
        },
        {
          test: /\.(png|jpg|gif|svg|woff|woff2)$/,
          oneOf: [
            { resourceQuery: /inline/, use: 'url-loader' },
            { loader: 'file-loader?name=[name].[ext]' }
          ]
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      plugins: [new TSConfigPathsPlugin()]
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, '../../dist/reactMobx')
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      })
    ]
  }

  return config
}
