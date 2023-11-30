import React, { Component } from "react";

//props 부모 컴포넌트가 자식컴포넌트에 데이터를 전달할때 사용
//props를 전달받은 자식 컴포넌트에서는 데이터 수정 불가
class R017_Props extends Component{
    render(){
        let props_value = this.props.props_val;
        props_value += ' from App.js'
        return(
            <div>{props_value}</div>
        )
    }
}

export default R017_Props;