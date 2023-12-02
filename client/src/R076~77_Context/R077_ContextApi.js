import React, { Component } from 'react';
import Children from "./R077_contextChildren";

// 컨텍스트 사용시 자식컴포넌트에서 부모컴포넌트의 데이터 변경가능
const{Provider, Consumer} = React.createContext()

export { Consumer };

export class R077_ContextApi extends Component {
  constructor(props){
    super(props);
    this.setStateFunc = this.setStateFunc.bind(this)
  }
  
  //state 변수 name에 파라미터 value를 할당하는 함수를 선언
  setStateFunc(value){
    this.setState({name : value});
  }
    render() {
        
        //content 변수에 R077_ContextApi 컴포넌트의 state와 setStateFunc 함수를 할당
        const content ={
            ...this.state,
            setStateFunc: this.setStateFunc
        }
    return (
        //자식 컴포넌트를 Provider 태그로 감싸고 전달할 데이터인 content를 value값으로 할당
        <Provider value={content}>
            <Children />
        </Provider>
    )
    
  }
}

export default R077_ContextApi