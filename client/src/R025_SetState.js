import React, { Component } from "react";

//setState() 함수로 state를 변경해야 render() 함수를 호출해 변경된 값을 화면에 출력

class R025_SetState extends Component{
    constructor(props){
        super(props);
        this.state = {
            StateString: 'react',
        }
    }

    StateChange = (flag) =>{
        if(flag == 'direct') this.state.StateString = '리액트';
        if(flag == 'setstate') this.setState({StateString : '리액트'});
    }
    //직접 변경시 StateString의 값은 변경되지만 화면엔 표시되지 않음
    //setState 사용시 화면에도 표시됨
    render(){
        return(
            <div style={{padding: "0px"}}>
                <button onClick={(e) => this.StateChange('direct',e)}>
                state 직접변경</button>
                <button onClick={(e) => this.StateChange('setstate',e)}>
                    setState로 변경</button><br/>
                    [state 변경하기] StateString : {this.state.StateString}
            </div>
        )
    }
}
export default R025_SetState;