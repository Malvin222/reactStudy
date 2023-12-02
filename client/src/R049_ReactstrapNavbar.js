import React, { Component } from 'react';
import { Collapse, Nav, NavItem, NavLink, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';

//Navbar : 내부 페이지들로 쉽게 이동할 수 있도록 메뉴리스트와 링크 제공
class R049_ReactstrapNavbar extends Component {
  constructor(props){
    super(props);
    this.state={ collapsed: false}
  }

  toggle = () =>{
    this.setState({collapsed: !this.state.collapsed})
  }
  
    render() {
    return (
      <>
      <Navbar color='faded' light>
        {/* 내비게이션에서 무조건 표시되는 영역 */}
        <NavbarBrand href="/" className='mr-auto'>Navbar</NavbarBrand>
        <NavbarToggler onClick={this.toggle} className='mr-2'/>
        <Collapse isOpen={this.state.collapsed} navbar>
            <Nav navbar>
                {/* 네비게이션 링크 및 메뉴 */}
                <NavItem>
                    <NavLink href="#">react</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="http://example.com">200</NavLink>
                </NavItem>
            </Nav>
        </Collapse>
      </Navbar>
      </>
    )
  }
}

export default R049_ReactstrapNavbar