import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import './index.css';
import reducers from './reducers';

//createStore 함수의 파라미터로 reducers 폴더 경로를 넘김
//리듀서 : reducers 폴더의 index.js에 데이터 초기값을 설정하고 데이터를 변경해주는 함수
const store = createStore(reducers);

const listener = () =>{
//render함수를 listener 함수 내부에 위치
ReactDOM.render(
  //Provider에 데이터를 넘겨주면 모든 하위 컴포넌트에서 데이터를 사용할 수 있다.
  <Provider store={store}>
  <App indexProp="react"/>
</Provider>,
  document.getElementById('root')
  );
};

//store데이터에 변화가 있을때 listener 함수 내부의 render를 실행 및 변경된 데이터 렌더링
store.subscribe(listener);

//초기 렌더링을 위해 수동으로 render 함수를 실행
listener();