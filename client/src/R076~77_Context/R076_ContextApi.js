import React from 'react';
import Children from "./R076_contextChildren";

const {Provider, Consumer} = React.createContext()
//Consumer 익스포트
export { Consumer };
//props를 사용하면 데이터를 부모컴포넌트에서 자식 컴포넌트로 전송가능
//손자 컴포넌트가 부모컴포넌트의 데이터를 필요한다면 사용
// 컨텍스트 : 데이터의 공급자와 소비자를 정의하고 데이터가 필요한 컴포넌트만 사용하게 구현
class R076_ContextApi extends React.Component {
  render () {
    return (
      // 자식컴포넌트를 <Provider> 태그로 감싸고 전달할 데이터를 value로 할당
      <Provider value='React200'>
        <Children />
      </Provider>
      )
    }
  }
export default R076_ContextApi