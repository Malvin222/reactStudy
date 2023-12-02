import React, { Component } from 'react';

//키입력시 동작 
// onKeyDown : a눌렀을때 공백 ctr눌렀을때 a 출력
// onKeyPress: a눌렀을때 공백, ctrl눌렀을때 출력되지않음
//onKeyUp a, ctrl 눌렀다 뗐을 때 모두 a 출력
class R071_OnKey extends Component {
    // event는 문자열 , e는 이벤트 객체유형
    OnKey(event, e){
        var val = e.target.value;
        console.log('event : '+event+", value: "+val);
    }
  render() {
    return (
        <>
            onKeyDown: <input type="text" onKeyDown={e=>this.OnKey("onKeyDown", e)}/><br/>
            onKeyPress : <input type="text" onKeyPress={e => this.OnKey("onKeyPress", e)}/><br/>
            onKeyUp : <input type="text" onKeyUp={e => this.OnKey("onKeyUp",e)}/>
        </>
        )
  }
}

export default R071_OnKey