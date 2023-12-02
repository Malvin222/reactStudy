import React, { Component } from 'react';

//Promise의 상태가 거부상태가 됐을때 catch함수 실행, 대기상태의 promise가 에러가 발생해 이행으로 가지 못함
class R065_Promise extends Component {
    componentDidMount(){
        // 첫번째 함수는 이행함수, 두번째 함수는 거부함수로 사용
        new Promise((resolve, reject) =>{
            //거부함수가 실행하면서 Erro객체 사용으로 에러 발생
            reject(Error("ERROR Info"));
        })
        //거부함수가 실행되면 이행으로 상태변화가 안되기 때문에 then함수대신 catch함수 실행
        .then(result => console.log("then "+result))
        .catch(result => console.log("catch : "+result));
    }
  render() {
    return (
      <h1>Promise</h1>
    )
  }
}

export default R065_Promise