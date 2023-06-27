const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    
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
      })],
      module: {
        rules: [
            {
            test: /\.css$/,
            use:['style-loader','css-loader']           
        }    
        ],
      }
      
  };

  

