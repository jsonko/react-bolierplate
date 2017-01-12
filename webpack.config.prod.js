var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: "#inline-source-map",      // 개발 source와 연결하기 위한 source-map 생성 설정
  entry: __dirname + "/app/main.js",  // Entry file 기준으로 의존 모듈들을 찾는다 
  output: {                           // bundle 위치 및 파일 명 설정 
    path: __dirname + "/build",
    filename: "[name]-[hash].js"
  },

  module: {
    loaders: [
      {
        test: /\.js$/,                // loader로 처리하기 위한 파일 확장자를 찾는 Regex
        exclude: /node_modules/,      // 제외 경로 
        loader: "babel",              // loader
        query:  {
          presets: ["react", "es2015"]
        }
      },
      {
        test: /\.css$/,              
        loader: ExtractTextPlugin.extract('style', 'css?modules')
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.tmpl.html"
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin("[name]-[hash].css")
  ]
}