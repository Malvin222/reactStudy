import React, { Component } from 'react';
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';

//Form 패키지 : <html form> 태그에 깔끔하고 정리된 스타일을 간편하게 적용
class R044_ReactstrapForm extends Component {
  render() {
    return (
        <Form>
            <Label for="exampleGender">gender</Label>
            {/* bsSize 선택박스 태그 크기 : sm , lg */}
            <Input type="select" bsSize="sm">
                <option>no select</option>
                <option>woman</option>
                <option>man</option>
            </Input>
            {/* Row : 줄 단위로 태그들을 묶어 사용할 수 있게 해준다 */}
            <Row form>
                {/* Col 어느정도의 영역을 차지할지, md: 너비값 */}
                <Col md={6}>
                    {/* FormGroup 태그 : 비슷한 용도의 태그들을 div 태그로 감싸 사용가능 */}
                    <FormGroup>
                        <Label for="exampleAddress">address</Label>
                        <Input type="text" name="address" id="adress"/>
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup>
                        <Label for="exampleMobile">mobile</Label>
                        <Input type="text" name=" mobile" id="mobile"></Input>
                    </FormGroup>
                </Col>
                <Col md={2}>
                    <FormGroup>
                        <Label for="exampleAge">age</Label>
                        <Input type="text" name="age" id="age"/>
                    </FormGroup>
                </Col>
                </Row>
        </Form>
    )
  }
}

export default R044_ReactstrapForm