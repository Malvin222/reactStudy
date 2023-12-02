import React, { Component } from 'react';
import { Spinner } from 'reactstrap';
//Spinner 패키지 : 어떤 작업이 진행되고 있음을 표시, 움직이는 원 형태의 디자인제공 (로딩중)
class R053_ReactstrapSpinner extends Component {
  render() {
    return (
        <>
      <Spinner color="secondary"/>
      <Spinner color="success"/>
      {/* grow : 원이 점점커지다 사라짐 */}
      <Spinner type="grow" color="dark"/>
      <Spinner type="grow" color="info"/>
      <Spinner size="sm" color="primary"/>
      {/* rem: css크기 단위 , 기본 크기의 몇배의 크기 표시 */}
      <Spinner style={{ width: '10rem', height: '0.5rem'}} color="dark"/>
      <Spinner style={{ width: '10rem', height: '10rem'}} color="secondary"/>
      <Spinner style={{ width: '3rem', height: '10rem'}} type="grow" color="primary"/>
        </>
    )
  }
}

export default R053_ReactstrapSpinner