import datatype from 'prop-types';
import React, { Component } from "react";

//자료형 설정 대신 isRequired를 조건으로 추가하면, 변수값이 없는 경우 경고 메시지가 발생
class R021_PropsRequired extends Component{
    render(){
        let{
            ReactString,
            ReactNumber
        } = this.props
        return (
            <div style={{padding:"0px"}}>
                {ReactString}{ReactNumber}
            </div>
        )
    }
}
// 에러발생 prop type `ReactString` is invalid; it must be a function, usually from the `prop-types` package, but received `undefined`
// ReactString의 변수값이 존재하지 않음
R021_PropsRequired.propTypes={
    ReactString: datatype.isRequired,
}
export default R021_PropsRequired