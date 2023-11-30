import React, { Component } from 'react';
import { ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

class R037_ReactstrapDropdown extends Component {
  constructor (props) {
    super(props);
    this.state = {
      dropdownOpen: false
    }
  }

  toggle = (e) => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  }
  
    render() {
    return (
        // isOpne이 true이면 하위 메뉴 표시, 초기값은 false
        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>버튼 Dropdown</DropdownToggle>
        <DropdownMenu>
            {/* 헤더영역 하위 메뉴 리스트에 대한 대표 정보를 기입 */}
            <DropdownItem header>헤더</DropdownItem>
            {/* disable 속성 : 버튼을 클릭해도 반응하지 않음 */}
            <DropdownItem disabled>비활성화 버튼</DropdownItem>
            <a href="http://example.com/">
                <DropdownItem>example 웹 사이트로 이동</DropdownItem>
            </a>
            <DropdownItem onClick={e => alert("Alert 버튼")}>
                Alert 버튼
            </DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    )
  }
}

export default R037_ReactstrapDropdown;