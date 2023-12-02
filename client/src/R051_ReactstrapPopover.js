import React, { Component } from 'react'
import { Button, PopoverBody, PopoverHeader, UncontrolledPopover } from 'reactstrap'
//Popover: html 요소를 클릭했을 때 요소에 연결된 메시지 박스를 띄울 수 있는 기능 
class R051_ReactstrapPopover extends Component {
  render() {
    return (
        <>
            <Button id="Popover_id" type="button">Popover button
            </Button>
            {/* placement : 메시지 박스가 표시되는 위치 속성 */}
            <UncontrolledPopover placement="right" target="Popover_id">
                {/* Popover 제목 */}
                <PopoverHeader>React 200</PopoverHeader>
                <PopoverBody>Aenean id magna id risus congue ornare.
                    Vestibulum sed diam et mi pulvinar facilisis sed eu risus.
                </PopoverBody>
            </UncontrolledPopover>
        </>
    )
  }
}

export default R051_ReactstrapPopover