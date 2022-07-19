const path = require("path"); //절대 경로를 참조하기 위해 Path를 불러 오기

const HtmlWebpackPlugin = require("html-webpack-plugin"); // Webpack(웹팩)에서 HTML을 다루기위한 플러그인을 불러옵니다

module.exports = {
  entry: {
    "js/app": ["./src/App.jsx"], //번들 파일(bundle)로 만들기 위한 시작 파일(entry)을 설정하였습니다. 생성될 번들 파일(bundle)은 js 폴더 하위에 app.js라는 이름으로 생성될 것이며 이 파일은 ./src/App.jsx를 시작으로 번들링(하나로 합치기)합니다.
  },
  output: {
    path: path.resolve(__dirname, "dist/"), //생성된 번들 파일(bundle)은 ./dist/ 폴더에 생성됩니다. publicPath를 지정함으로써 HTML등 다른 파일에서 생성된 번들을 참조할 때, /을 기준으로 참조합니다.
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
    ],
  }, //React(리액트) 파일인 jsx와 js는 babel(바벨)을 이용하여 빌드합니다.
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
  ], //마지막으로 ./src/index.html 파일을 dist 경로에 index.html로 파일을 생성합니다. 파일을 생성할 때, Webpack(웹팩)이 만든 번들 파일(/js/app.js)를 HTML에 추가하여 생성합니다.
};
