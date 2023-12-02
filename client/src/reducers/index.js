//리듀서를 스토어에 넘겨주기 위해 combineReducers 함수를 임포트
import { combineReducers } from 'redux';
// actions 폴더 경로 임포트, index.js의 ADD 변수값을 가져옴
import { ADD } from '../actions';
//리듀서 데이터의 초기값을 선언, 할당
const initState = {
    str: 'react',
};

const data = (state = initState, action) => {
    // add 함수에서 반환된 type 변수값 ADD를 가져옴
    switch (action.type) {
        // action.type의 값이 ADD값과 같은경우 state.str에 200을 붙인다, 반환값은 data변수에 할당
        case ADD:
            return state, {
                str: state.str + '200'
            };
            // ADD 와 같지 않은경우 state 변수 그대로 반환
            default:
                return state;
        }
    };
// 리듀서 함수 data를 combineReducers 함수를 이용해 하나의 리듀싱 함수로 변환하고 익스포트
// src의 index.js에 있는 createStore 함수의 파라미터로 넘겨짐
const App = combineReducers({
    data
});

export default App;