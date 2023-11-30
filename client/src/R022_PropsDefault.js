import React, { Component } from "react";

//props의 기본값은 부모 컴포넌트에서 값이 넘어 오지 않았을 때 사용.
class R022_PropsDefault extends Component{
    render(){
        let{
            ReatString,
            ReactNumber
        } = this.props
        return (
            <div style={{padding:"0px"}}>
                {ReatString}{ReactNumber}
            </div>
        )
    }
}

//기본값 설정
R022_PropsDefault.defaultProps={
    ReatString:"리액트",
    ReactNumber: 400
}

export default R022_PropsDefault;