import React, { Component } from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';

//Tab 패키지 : 사용자 동작에 따라 특정 영역에 다른내용을 표시할 때 사용
//클릭 이벤트에 따라 원하는 영역을 표시해야할 경우, 간편하게 사용
class R055_ReactstrapTab extends Component {
    constructor(props){
        super(props);
        // 초기 탭id를 React로 설정
        this.state={TabState:'React'}
    }
    // tabnum : 파라미터 값, 현재 상태와 다르다면 변경된 값으로 수정
    toggle = (tabnum) => {
        if(this.state.TabState !== tabnum) this.setState({TabState:tabnum});
    }
  render() {
    return (
        <>
        <Nav tabs>
            <NavItem>
            <NavLink onClick={() => {this.toggle('React')}}>First Tab</NavLink>
            </NavItem>
            <NavItem>
            <NavLink onClick={() => {this.toggle('200')}}>Second Tab</NavLink>
            </NavItem>
        </Nav>
        {/* 할당된 값과 <TabPane> 태그의 tabId값을 비교해 일치하는 태그영역을 표시 */}
        <TabContent activeTab={this.state.TabState}>
            <TabPane tabId="React"><h3>React</h3></TabPane>
            <TabPane tabId="200"><h3>200</h3></TabPane>
        </TabContent>
        </>
    )
  }
}

export default R055_ReactstrapTab