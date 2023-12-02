import React, { Component } from 'react';

//특정 tag 안에서 마우스 커서가 움직일때 발생
export class R068_onMouseMove extends Component {
    MouseMove(tag){
        console.log('TAG : '+tag);
    }

  render() {
    return (
      <>
      {/* div, input, selet 를 tag 파라미터로 보냄 */}
      <div onMouseMove={e => this.MouseMove("div")}>
        <h3>DIV onMouseMove</h3>
      </div>
      <input type='text' onMouseMove={e=> this.MouseMove("input")}/>
      <select onMouseMove={e => this.MouseMove("select")}>
        <option value="react">react</option>
        <option value="200">200</option>
      </select>
      </>
    )
  }
}

export default R068_onMouseMove