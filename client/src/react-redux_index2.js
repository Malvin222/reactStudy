import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import App from './App';
import './index.css';
import reducers from './reducers';

// 다중컬링구조 세가지 인자, 첫버째 스토어, 두번째 다음미들웨어, 세번째 액션
const CallMiddleware = store => nextMiddle => action =>{
  console.log('1. reducer 실행 전');
  console.log('2. action.type : '+action.type+', store str :'+store.getState().data.str);
  let result = nextMiddle(action);
  console.log('3. reducer 실행 후');
  console.log('4. action.type : '+action.type+', store str: '+store.getState().data.str);
  return result;
}
const store = createStore(reducers, applyMiddleware(CallMiddleware));

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