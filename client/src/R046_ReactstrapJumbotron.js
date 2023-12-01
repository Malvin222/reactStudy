import React, { Component } from 'react'
import { Button, Jumbotron } from 'reactstrap'

//Jumbotron 대형 전광판을 의미, 넓은 영역에 눈에 띄게 정보 표시
//reactstrap5 이상부터 Jumbotron 제거됨
// 대신 div에 사진 넣고 적용
class R046_ReactstrapJumbotron extends Component {
  render() {
    return (
      <>
      <Jumbotron style={{backgroundColor : "#D38C7C"}}>
        <h1 className='display-4'>REACT 200</h1>
        <p className='h4'>Contrary to popular belief.
        Lorem Ipsum is not simply ramdp, text.</p>
        <hr className='my-2'/>
        <p>There are many variations of passages of Lorem Ipsum availabel.</p>
        <p className='lead'>
          <Button color='danger'>Go Detail</Button>
        </p>
      </Jumbotron>
      </>
    )
  }
}

export default R046_ReactstrapJumbotron