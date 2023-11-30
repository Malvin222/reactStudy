import React, { Component } from "react";
//forceUpdate() 화면 새로고침

class R026_ForceUpdate extends Component{
    constructor (props){
        super(props);
        this.state = {
            StateString: 'react',
        }
    }

    StateChage = () => {
        this.state.StateString = '리액트';
        this.forceUpdate();
    }

    render(){
        return(
            <div style={{padding: "0px"}}>
                <button onClick={(e) => this.StateChage('direct', e)}>
                    state 직접변경
                </button><br/>
                [state변경하기] StateString : {this.state.StateString}
            </div>
        )
    }
}

export default R026_ForceUpdate;