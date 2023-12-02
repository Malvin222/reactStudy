import React, { Component } from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

//alert()창과 달리, 웹 브라우저에서 팝업창을 차단할 수 었고 배경페이지에 어울리는 디자인 적용가능
class R048_ReactstrapModal extends Component {
  constructor(props){
    super(props);
    // 모달 팝업 표시창 초기 false
    this.state ={ modal: false}
  }

  toggle = () => {
    // 토글을 누르면 반대로작동
    this.setState({modal: !this.state.modal})
  }
  
    render() {
    return (
      <>
      <Button color='warning' onClick={this.toggle}>Modal 버튼</Button>
      <Modal isOpen={this.state.modal} fade={true} toggle={this.toggle}>
        {/* 헤더 토글 -> x를 눌렀을때 실행 */}
        <ModalHeader toggle={this.toggle}>Modal Header</ModalHeader>
        <ModalBody>
            The generated Lorem Ipsum is therefore always free from repetition.
        </ModalBody>
        <ModalFooter>
            <Button color='primary' onClick={this.toggle}>확인</Button>
            <Button color='secondary' onClick={this.toggle}>닫기</Button>
        </ModalFooter>
      </Modal>
      </>
    )
  }
}

export default R048_ReactstrapModal