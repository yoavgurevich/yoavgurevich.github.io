const webpack = require('webpack');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

var baseConfig = {
    entry: [
        'react-hot-loader/patch',
        './src/index.js'
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              "presets": [
                "@babel/preset-env",
                "@babel/preset-react"
              ],
              plugins: [
                "@babel/plugin-proposal-optional-chaining",
                "@babel/plugin-syntax-dynamic-import",
                "@babel/plugin-syntax-import-meta",
                "@babel/plugin-proposal-class-properties",
                "@babel/plugin-proposal-json-strings",
                [
                    "@babel/plugin-proposal-decorators",
                    {
                        "legacy": true
                    }
                ],
                "@babel/plugin-proposal-throw-expressions"
              ]
            }
          }
        },
        {
            test: /\.scss$/,
            loaders: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader']
        },
        {
            test: /\.(png|jpg|jpeg|gif|ico|ttf|eot|svg|woff(2)?)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
            loader: 'file-loader'
        }
      ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: __dirname,
        publicPath: '/',
        filename: '[name].bundle.js'
    }
};

var environmentAdditionals = {
    'development': {
        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ],
        devServer: {
            contentBase: '.',
            hot: true
        }
    },
    'production': {
        optimization: {
            splitChunks: {
              chunks: 'all'
            },
        },
        plugins: [
            new OptimizeCssAssetsPlugin(),
            new ImageminPlugin({
                pngquant: {
                  quality: '95-100'
                }
            })
        ],
    }
}

module.exports = (env, argv) => (Object.assign(baseConfig, environmentAdditionals[argv.mode]));