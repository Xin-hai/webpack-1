const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    
    entry: './src/index.js',
    output: {
        filename: 'index.[contenthash].js'
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [{loader: 'file-loader',},],
            },
            {
                test: /\.styl$/i,
                use:["style-loader", "css-loader", "stylus-loader"]
            },
            {
                test: /\.less$/i,
                use: ["style-loader", "css-loader", "less-loader",],
            },
            {
                test: /\.scss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {implementation:require("dart-sass")}
                    },

                ],
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin({
        title: '星星',
        template: 'src/assets/index.html'
      }),
    ],  
};

  

