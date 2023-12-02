import React, { Component } from 'react';

// fetch 함수로 get 방식 호출 get: url? 뒤 파라미터=값 형태로 필요한 데이터 전달
// fetch : 비동기 통신 구현, url 호출해서 데이터를 가져옴
// async : 비동기 함수를 실행하는 함수에 추가
class R059_FetchGet extends Component {
    componentDidMount = async() =>{
        // 가져온 데이터를 response로 저장
        // await: 동기적으로 처리돼야 하는 함수 구문 앞에 추가
        const response = await fetch('http://date.jsontest.com/');
        // json 형태의 데이터를 json()함수로 변환해 body에 저장
        const body = await response.json();
        alert(body.date)
    }
  render() {
    return (
      <h1>fetch get</h1>
    )
  }
}

export default R059_FetchGet