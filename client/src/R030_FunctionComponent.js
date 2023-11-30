import React from "react";

//함수형 컴포넌트, state및 render() 함수 없이 return 사용, 생명주가 함수 사용불가
function R030_FunctionComponent(props){
    let { contents } = props;
    return(
        <h2>{contents}</h2>
    )
}

export default R030_FunctionComponent;