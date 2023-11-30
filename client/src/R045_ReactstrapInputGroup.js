import React, { Component } from 'react';
import { Button, Input, InputGroup, InputGroupText } from 'reactstrap';

//InputGroup패키지는 여러개의 태그를 하나의 input그룹으로 묶어 사용하는것을 지원
class R045_ReactstrapInputGroup extends Component {
  render() {
    return (
        // InputGroup 태그로 input태그와 버튼영역을 묶어 사용
        <>
      <InputGroup>
        <Input placeholder="userid" />
        {/* 최신 부트스트랩, 및 리액트스트랩에서는 InputGroupAddon 제거되었음
        버튼, 입력을 원하는 순서대로 직접 입력 그룹에 사용할 수 있음  
        InputGroupAddon : 고정텍스트 표시영역을 태그의 오른쪽(append)이나 앞쪽(prepend)에 표시
        */}
        {/* <InputGroupAddon addonType="append"> */}
          <InputGroupText>@reactmail.com</InputGroupText>
        {/* </InputGroupAddon> */}
      </InputGroup>
      <InputGroup>
        {/* <InputGroupAddon addonType="prepend"> */}
            <Button>버튼</Button>
        {/* </InputGroupAddon> */}
        <Input />
      </InputGroup>
        </>
    )
  }
}

export default R045_ReactstrapInputGroup;