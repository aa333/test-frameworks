const path = require('path')
const webpack = require('webpack')
const fs = require('fs')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const TSConfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = (env, options) => {
  const devMode = options.mode === 'development'
  const config = {
    entry: {
      'reactRedux/index': './ReduxApp.tsx',
      'reactRematch/index': './RematchApp.tsx'
    },
    resolveLoader: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },
    context: path.resolve(__dirname, './src'),
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
      path: path.resolve(__dirname, '../../dist')
    },
    plugins: [
      new CopyWebpackPlugin([
        { from: '../../shared/index.html', to: 'reactRedux/index.html' },
        { from: '../../shared/index.html', to: 'reactRematch/index.html' },
        { from: '../../shared/index.html', to: 'preactRedux/index.html' },
      ])
    ]
  }

  return config
}
