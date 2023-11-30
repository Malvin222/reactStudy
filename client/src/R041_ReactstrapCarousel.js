import React, { Component } from 'react';
import { UncontrolledCarousel } from 'reactstrap';

// Carousel 슬라이드를 자동으로 회전시키는 기능, 이미지텍스트,버튼을 일정시간단위로 다음 슬라이드로 이동

const items=[
    {
        src: 'https://i.imgur.com/R5EdVui.jpeg',
        altText: ' 슬라이드1 이미지 대체 문구',
        caption: ' 슬라이드1 설명',
        header: ' 슬라이드1 제목'
    },
    {
        src: 'https://i.imgur.com/A6P9hIH.jpeg',
        altText: ' 슬라이드2 이미지 대체 문구',
        caption: ' 슬라이드2 설명',
        header: ' 슬라이드2 제목'
    },
    {
        src: 'https://i.imgur.com/3vgSPNk.png',
        altText: ' 슬라이드3 이미지 대체 문구',
        caption: ' 슬라이드3 설명',
        header: ' 슬라이드3 제목'
    }
];

class R041_ReactstrapCarousel extends Component {
  
    render() {
    return (
      <UncontrolledCarousel items={items}/>
    )
  }
}

export default R041_ReactstrapCarousel