var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: "#inline-source-map",      // 개발 source와 연결하기 위한 source-map 생성 설정
  entry: __dirname + "/app/main.js",  // Entry file 기준으로 의존 모듈들을 찾는다 
  output: {                           // bundle 위치 및 파일 명 설정 
    path: __dirname + "/build",
    filename: "bundle.js"
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
        test: /\.css$/,               // CSS 파일 확장자를 찾기 위한 regex
        loader: 'style!css?modules'   // css loader, "module" parameter추가 시 CSS module loader가 활성화 됨. 
      }
    ]
  },

  devServer: {                        // webpack dev server 설정 
    contentBase: "./public",          // WDS 에서 접근할 content root path 
    colors: true,                     // Server terminal output color setting 
    historyApiFallback: true,         // HTML5 History API 사용 SPA 에서 기존 Asset과 매핑안되는 요청 시 root(/)로 라우팅 
    inline: true,                     // Automatic Refresh를 위하여 inline mode 설정 
    port: 3000,                       // Server Port변경 
  },

  plugins: [
    // HtmlWebpackPlugin : webpack bundle을 포함한 최종 HTML5을 생성한다. 
    // bundle 빌드시 마다 hash를 붙여서 파일 명을 변경하는 경우 자동으로 포함되므로 유용하게 사용 가능함. 
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.tmpl.html"
    })
  ]
}