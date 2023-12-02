import React, { Component } from 'react';

//onSubmit이벤트는 <form>태그 안에 사용
class R072_onSubmit extends Component {
  Submit(e){
    var inputValue = document.getElementById("inputId").value;
    console.log("inputValue : "+inputValue);
    // 이벤트 객체에 preventDefault 함수를 실행하면 페이지 새로고칭 방지
    e.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.Submit}>
        <input type="text" name="inputName" id="inputId"/>
        <input type="submit" vlaue="Submit"/>
      </form>
      )
  }
}

export default R072_onSubmit