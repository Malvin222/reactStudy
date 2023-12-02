import React from 'react';
//Consumer 임포트
import { Consumer } from "./R076_ContextApi";

class contextChildren2 extends React.Component {
    render () {
      return (
        <Consumer>
            {contextValue=> <h3>{`contextValue : ${contextValue}`}</h3>}
        </Consumer>
      )
    }
}
export default contextChildren2