import React, { Component } from 'react';

//자바스크립트는 비동기적으로 동작, 먼저 실행된 작업이 끝나지 않아도 다음작업 시작가능
// 콜백함수 : 코드에 순서를 정해 원하는 시점에 실행가능
class R063_CallbackFunc extends Component {
    componentDidMount(){
        // logPrint 함수 : 파라미터로 1과 함수 전달
        this.logPrint(1, function(return1){
            console.log("return1 : "+return1);
            this.logPrint(return1, function(return2){
                console.log("return2 : "+return2);
            })
        }.bind(this))
    }
    
    // 함수 기능
    logPrint(param, callback){
        console.log("logPrint param : "+param);
        param += param
        callback(param);
    }
  render() {
    return (
      <h1>Callback Function</h1>
    )
  }
}

export default R063_CallbackFunc