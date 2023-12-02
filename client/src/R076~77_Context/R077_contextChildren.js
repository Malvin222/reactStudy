import React, { Component } from 'react';
import { Consumer } from "./R077_ContextApi";

class R077_contextChildren extends Component {
  render() {
    return (
        // Consumer 태그로 출력할 element를 감싸고 R077_ContextApi 컴포넌트에서 value에 할당했던 데이터를 
        //contextValue 변수로 받아 사용
        <Consumer>
            {/* 버튼 클릭시 setStateFunc 호출, state변수 name값을 react200으로 할당 */}
            {contextValue=> 
            <button onClick={e => contextValue.setStateFunc("react200")}>
                {contextValue.name}_button
            </button>
  }
        </Consumer>
    )
  }
}

export default R077_contextChildren