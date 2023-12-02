import React, { Component } from 'react';

//Post 서버의 상태나 데이터를 변경 (url뒤에 파라미터 표시하지 않고 사용가능), Get : 데이터를 조회
class R060_FetchPost extends Component {
    componentDidMount = async () =>{
        const response = await fetch('http://date.jsontest.com/',
        // 두번째 파라미터에 post 호출정보 추가
        {
        method: 'POST',
        // header부분에 어떤형태의 데이터를 사용할지 지정
        header: {
            'Content-Type': 'application/json',
        },
        //json 형태의 데이터를 담아 전송
        body: {a:"react",b:200},
        });
        const body = await response.json();
        alert(body.date)
    }

  render() {
    return (
      <h1>fetch post</h1>
    )
  }
}

export default R060_FetchPost