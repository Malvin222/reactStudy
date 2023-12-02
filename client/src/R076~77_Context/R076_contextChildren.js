import React from 'react';
import Children2 from "./R076_contextChildren2";

class contextChildren extends React.Component {
//  부모컴포넌트의 데이터를 사용하지 않고 손자 컴포넌트를 return
render () {
    return (
      <Children2 />
    )
  }
}
export default contextChildren