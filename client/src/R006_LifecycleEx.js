import React, { Component } from "react";

class R006_LifecycleEx extends Component{
    // constructor() 함수 다음으로 실행 됨
    // 컴포넌트가 새로운 props를 받게 됐을때 state를 변경해줌
    // App.js에서 전달한 prop_value라는 변수를 props.prop_value로 접근해서 값을가져옴
    static getDerivedStateFromProps(props, state){
        console.log('2. getDerivedStateFromProps Call :' +props.prop_value);
        return {};
    }
    constructor(props){
        super(props);
        this.state = {};
        console.log ('1. constructor Call');
    }

    render(){
        console.log('3. render Call');
        return(
            <h2>[THIS IS CONSTRUCTOR FUNCTION]</h2>
        )
    }
}
export default R006_LifecycleEx;