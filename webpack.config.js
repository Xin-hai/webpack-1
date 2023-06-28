const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const base = require('./webpack.config.base.js')

module.exports = {
    ...base,
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static:'./dist',   
    },
    optimization: {
        runtimeChunk: 'single',
      },
    
    module: {
        rules: [
            ...base.module.rules,
        {
        test: /\.css$/i,
      use:['style-loader','css-loader']           
    }  
    ],
    }
};

  

