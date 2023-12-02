import React, { Component } from 'react';
//withHocComponent 컴포넌트 임포트
import withHocComponent from './Hoc/withHocComponent';

//커링과 같이 함수 자체를 인자로 받거나 반환하는 함수 : '고차 함수'
//컴포넌트를 인자로 받거나 반환하는 함수 (HOC, Higher-Order Component)
class R075_ReactHoc extends Component {
  render() {
    console.log('2.HocComponent render')
    return (
        <h2>props.name : {this.props.name}</h2>
        )
  }
}
//withHocComponent 컴포넌트를 익스포트 하면서 전달한 파라미터를 받음
export default withHocComponent(R075_ReactHoc,'R075_ReactHoc');