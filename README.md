# react_typescript_practice

리액트 cra 없이 babel, webpack 적용 및 typescript 공부~

# 초기 셋팅

- `npm init -y`
- `npm install --save react react-dom` - React(리액트) 개발에필요한 필수 항목입니다.
- `npm install --save-dev webpack webpack-cli html-webpack-plugin webpack-dev-server babel-loader @babel/core @babel/preset-env @babel/preset-react rimraf`
  - webpack - 웹팩 라이브러리
  - webpack-cli - 웹팩을 명령어로 조작하기 위한 라이브러리입니다.
  - html-webpack-plugin - 웹팩에서 HTML을 다루기 위한 플러그인입니다.
  - webpack-dev-server - 웹팩으로 로컬에서 개발하기 위한 테스트 서버입니다
  - babel-loader - 웹팩에서 babel을 다루기 위한 라이브러리입니다.
  - @babel/core - 바벨로 컴파일 할때 필요
  - @babel/preset-env - 바벨로 컴파일시 어떤 타겟으로 지정할지 설정 하는 라이브러리
  - @babel/preset-react - 리액트를 바벨로 컴파일 하기 위한 라이브러리
  - rimraf - Mac ,windows에서 동일한 명령어로 폴더 삭제하기 위한 라이브러리
