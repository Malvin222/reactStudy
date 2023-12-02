import React, { Component } from 'react';

//camelCase 사용, 특정 elemet가 클릭 됐을 때 정의된 함수를 호출하는 방식으로 사용
//html : onclick으로 모두 소문자, react: 문자열 중간 대문자가 위로 올라옴
class R066_onClick extends Component {
    //파라미터를 param이라는 함수의 내부변수로 넣어서 사용
    buttonClick = (param) =>{
        if(typeof param != 'string') param = "Click a"
        console.log('param : '+ param);
    }
  render() {
    return (
        <>
        <button onClick={e => this.buttonClick("Click button")}>
            Click button
        </button>
        <div onClick={e => this.buttonClick("Click div")}>Click div</div>
        <a href='javascript:' onClick={this.buttonClick}>Click a</a>
        </>
        )
  }
}

export default R066_onClick