import datatype from 'prop-types';
import React, { Component } from "react";

// 자식 컴포넌트에서 props에 대한 자료형을 선언
// 부모 컴포넌트에서 넘어오는 props 변수들의 자료형과 비교
class R018_PropsDatatype extends Component{
    render() {
        let {
          String, Number, Boolean, Array, ObjectJson, Function
        } = this.props
        return (
            <div style={{padding: "0px"}}>
              <p>StringProps: {String}</p>
              <p>NumberProps: {Number}</p>
              <span>BooleanProps: {Boolean.toString()}</span>
              <p>ArrayProps: {Array.toString()}</p>
              <p>ObjectJsonProps: {JSON.stringify(ObjectJson)}</p>
              <p>FunctionProps: {Function}</p>
            </div>
            )
    }
}

R018_PropsDatatype.propTypes = {
    // 변수가 맞지않음 에러표시
    String: datatype.number,
    //Invalid prop `String` of type `string` supplied to `R018_PropsDatatype`, expected `number`.

    Number: datatype.number,
    Boolean: datatype.bool,
    Array: datatype.array,
    ObjectJson: datatype.object,
    Function: datatype.func,
}

export default R018_PropsDatatype