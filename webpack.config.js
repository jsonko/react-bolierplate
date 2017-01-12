module.exports = {
  devtool: "#inline-source-map",      // 개발 source와 연결하기 위한 source-map 생성 설정
  entry: __dirname + "/app/main.js",  // Entry file 기준으로 의존 모듈들을 찾는다 
  output: {                           // bundle 위치 및 파일 명 설정 
    path: __dirname + "/public",      
    filename: "bundle.js"
  },

  module: {
    loaders: [
      {
        test: /\.js$/,                // loader로 처리하기 위한 파일 확장자를 찾는 Regex
        exclude: /node_modules/,      // 제외 경로 
        loader: "babel",              // loader 
        query: {                      // loader에 전달할 추가 options 
          presets: ['es2015', 'react']
        }
      }
    ]
  },

  devServer: {                        // webpack dev server 설정 
    contentBase: "./public",          // WDS 에서 접근할 content root path 
    colors: true,                     // Server terminal output color setting 
    historyApiFallback: true,         // HTML5 History API 사용 SPA 에서 기존 Asset과 매핑안되는 요청 시 root(/)로 라우팅 
    inline: true,                     // Automatic Refresh를 위하여 inline mode 설정 
    port: 3000                        // Server Port변경 
  }
}