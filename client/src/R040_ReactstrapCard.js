import React, { Component } from 'react';
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap';
// Card 패키지는 이미지 제목,부제목,내용,버튼등을 한세트로 묶음
class R040_ReactstrapCard extends Component {
  render() {
    return (
      <div>
        <Card>
            <CardImg top height="200px" src="https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e66113e2bd2b7407c8202a97d2241a96625" alt="Card image cap" />
            <CardBody>
                <CardTitle>제목</CardTitle>
                <CardSubtitle>Card 부제목</CardSubtitle>
                <CardText>Card 내용 Lorem Ipsum is simply dummy text.</CardText>
                <Button> 버튼</Button>
            </CardBody>
        </Card>
      </div>
    )
  }
}

export default R040_ReactstrapCard;