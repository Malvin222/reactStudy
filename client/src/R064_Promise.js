import React, { Component } from 'react';

//promise : 비동기적 동작하는 코드를 동기적으로 구현 , 콜백함수와 달리 코드 가독성 높일수 있음
class R064_Promise extends Component {
    componentDidMount(){
        //promise : 대기,이행,거부 -> 대기->이행 : then()함수 실행
        // 파라미터로 하나의 함수만 받을 경우 이행 함수로 사용
        new Promise(resolve => {
            // Timeout 함수로 1.5초후에 resolve 함수 실행 이때 promise는 이행 상태, then함수 실행
            setTimeout(function(){
                resolve('react');
            },1500);
        })
        //resolve함수의 결과값 :react를 result라는 파라미터로 받아 사용 후 200을 붙여 반환
        .then(function(result){
            console.log(result);
            return result + 200;
        })
        //then 함수 실행
        .then(result => {
            console.log(result);
        })
    }
  render() {
    return (
      <h1>Promise</h1>
    )
  }
}

export default R064_Promise