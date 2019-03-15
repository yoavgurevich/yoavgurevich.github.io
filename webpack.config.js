const webpack = require('webpack');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

var baseConfig  = {
    entry: [
        'react-hot-loader/patch',
        './src/index.js'
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
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
        filename: 'bundle.js'
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
            minimizer: [
              new UglifyJsPlugin({
                extractComments: true,
                cache: true,
                parallel: true,
                uglifyOptions: {
                  mangle: {
                    keep_fnames: true,
                  },
                },
              })
            ],
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