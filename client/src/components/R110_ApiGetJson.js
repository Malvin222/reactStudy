import React, { Component } from 'react';

//node서버 api를 get으로 json 데이터 호출
class R110_ApiGetJson extends Component {
    componentDidMount = async () => {
        const response = await fetch('/users');
        const body = await response.json();
        console.log("body.message : "+body.message)
    }
  render() {
    return (
      <><h1>Call Node Api Get</h1></>
    )
  }
}

export default R110_ApiGetJson