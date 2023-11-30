import React, { Component } from "react";

// props 값을 Boolean 형으로 하위 컴포넌트에 전달할 경우, true나 false 중 하나를 할당
// 추가 문법으로 props 변수를 선언한 후 값을 할당하지 않으면 true가 기본값으로 할당
class R019_PropsBoolean extends Component{
    render(){
        let{
            BooleanTrueFalse
        } = this.props
        //삼항 연산자 ? true : false
        //Boolean 변수는 직접 화면에 출력 불가 toString()합수를 사용해 문자열로 변환
        return(
            <div style={{padding: "0px"}}>
                {BooleanTrueFalse ? '2. ' : '1. '}
                {BooleanTrueFalse.toString()}
            </div>
        )
    }
}

export default R019_PropsBoolean;