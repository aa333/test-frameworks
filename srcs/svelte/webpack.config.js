const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const babelLoader = {
  loader: 'babel-loader',
  options: {
    presets: [
      ['@babel/preset-env']
    ]
  }
};

module.exports = (env, options) => {
  const devMode = options.mode === 'development';
  const config = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/index.ts'),
    output: {
      path:  path.resolve(__dirname, '../../dist/svelte'),
      filename: '[name].js'
    },
    devtool: devMode ? 'eval' : 'source-map',
    resolve: {
      extensions: ['.ts', '.mjs', '.js', '.json', '.css', '.svelte', '.scss'],
      mainFields: ['svelte', 'browser', 'module', 'main']
    },
    module: {
      rules: [
        {
          oneOf: [
            {
              test: /\.svelte$/,
              use: [
                babelLoader,
                {
                  loader: 'svelte-loader',
                  options: {
                    emitCss: true,
                    preprocess: require('svelte-preprocess')()
                  }
                }
              ]
            },
            {
              test: /\.m?js$/,
              exclude: /node_modules\/(?!svelte)/,
              use: babelLoader
            },
            {
              test: /\.ts$/,
              use: [
                babelLoader,
                {
                  loader: 'awesome-typescript-loader',
                  options: {
                    logInfoToStdOut: true,
                    logLevel: 'info'
                  }
                }
              ]
            },
            {
              test: /\.css$/,
              use: [
                MiniCssExtractPlugin.loader,
                {
                  loader: 'css-loader',
                  options: {
                    importLoaders: 1
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/index.html'),
        inject: true,
        minify: {
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true,
        }
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css'
      })
    ].filter(Boolean)
  }

  return config;
};
