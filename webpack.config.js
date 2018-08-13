const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");



module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            { 
                test: /\.js$/,
                exclude: /node modules/,
                use: { loader: 'babel-loader' },
             },
             {
                test: /\.css$/,
                use: [
                    'style-loader',
                  {
                    loader: MiniCssExtractPlugin.loader,
                  },
                  "css-loader"
                ]
              },
              {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                        emitFile: false
                    }
                  }
                ]
              },
              {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                  'file-loader',
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      bypassOnDebug: true, // webpack@1.x
                      disable: true, // webpack@2.x and newer
                    },
                  },
                ],
              }
        ]
    },
    plugins: [
        new CleanWebpackPlugin('build'),
        new HtmlWebpackPlugin({
            title: 'Starnavi test',
            // filename: './index.html',
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "index.css",
            // chunkFilename: "[id].css"
          })
      ]
};