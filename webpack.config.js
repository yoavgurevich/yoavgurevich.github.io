const webpack = require('webpack');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = (env, argv) => ({
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
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ImageminPlugin({
            disable: argv.mode !== 'production', // Disable during development
            pngquant: {
              quality: '95-100'
            }
        })
    ],
    devServer: {
        contentBase: '.',
        hot: true
    }
});