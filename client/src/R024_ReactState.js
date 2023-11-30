import React, { Component } from "react";
//state는 하나의 컴포넌트 안에서 전역변수처럼 사용

class R024_ReactState extends Component{
    //생성자 함수 안에서 state 변수의 초기값을 정의
    constructor (props){
        super(props);
        this.state ={
            StateString: this.props.reactString,
            StateNumber: 200,
        }
    }

    render(){
        return(
            <div style={{padding: "0px"}}>
                {this.state.StateString}{this.state.StateNumber}
            </div>
        )
    }
}

export default R024_ReactState;