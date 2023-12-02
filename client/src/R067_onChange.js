import React, { Component } from 'react';

//onChange 이벤트는 특정 element에 변화가 생겼을 때 정의된 함수를 호출
class R067_onChange extends Component {
    //change 함수 선언 및 파라미터를 e라는 내부변수에 넣어 사용
    change = (e) =>{
        //value값을 가져오고 val 변수에 할당
        var val = e.target.value;
        console.log('param : '+val);
    }
  render() {
    return (
      <>
      {/* 파라미터를 따로 넘겨주지 않아도 target속성으로 value값을 넘김 */}
      <input type='text' onChange={this.change}/>
      <select onChange={this.change}>
        <option value="react">react</option>
        <option value="200">200</option>
      </select>
      </>
    )
  }
}

export default R067_onChange