import React, { Component } from "react";

//nod란 html 문서를 구성하는 포괄적 개념, 종류로는 요소, 속성, 테스트, 주석

class R023_PropsNode extends Component{
    render() {
        return(
            <div style={{padding:"0px"}}>
                {this.props.children}
            </div>
        )
    }
}

export default R023_PropsNode;