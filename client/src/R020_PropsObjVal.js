import datatype from 'prop-types';
import React, { Component } from "react";

//props 값을 객체로 하위 컴포넌트에 전달할 경우, 자료형을 object로 선언
//객체 형태(객체 내부 변수들)의 자료형을 선언 할 때는 shape라는 유형 사용
class R020_PropsObjVal extends Component{
    render(){
        let{
            ObjectJson
        } = this.props
        return (
            <div style={{padding: "0px"}}>
                {JSON.stringify(ObjectJson)}
            </div>
        )
    }
}
//shape를 사용해 ObjectJson 내부 키 값에 대해 자료형을 선언
R020_PropsObjVal.propType = {
    ObjectJson : datatype.shape({
        react: datatype.string,
        twohundred: datatype.number
    })
}
export default R020_PropsObjVal;