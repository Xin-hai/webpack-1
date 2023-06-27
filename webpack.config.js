const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static:'./dist',
       
    },
    entry: './src/index.js',
    output: {
        filename: 'index.[contenthash].js'
    },
    optimization: {
        runtimeChunk: 'single',
      },
    plugins: [new HtmlWebpackPlugin({
        title: '星星导航',
        template: 'src/assets/index.html'
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
        chunkFilename: '[id].[contenthash].css',
        ignoreOrder: false,
      })
    ],
    module: {
        rules: [
        {
        test: /\.css$/i,
        use: [
            {
            loader:MiniCssExtractPlugin.loader, 
            options: {
                publicPath: "/public/path/to/",
              },

        },
        "css-loader",     
        ],
        
     // use:['style-loader','css-loader']           
    }  
    ],
    }
};

  

