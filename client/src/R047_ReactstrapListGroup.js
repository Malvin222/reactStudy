
import React, { Component } from 'react'
import { Badge, ListGroup, ListGroupItem } from 'reactstrap'

// List Grooup 정돈된 스타일의 목록을 표시할때 사용
// <ListGroup>,<ListGroupItem> 은 <ul>,<li>로 변환
class R047_ReactstrapListGroup extends Component {
  render() {
    return (
    <>
      <ListGroup>
        <ListGroupItem color='danger' className='justify-content-between'>Badge
            <Badge pill>200</Badge>
        </ListGroupItem>
        <ListGroupItem disabled tag="a" href="#">Disable</ListGroupItem>
        <ListGroupItem tag="a" href='https://example.com'>Link</ListGroupItem>
        <ListGroupItem tag="button" action onClick={e => alert("button")}>
            Button
        </ListGroupItem>
      </ListGroup>
    </>
    )
  }
}

export default R047_ReactstrapListGroup