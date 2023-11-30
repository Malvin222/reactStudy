import React, { useEffect, useState } from "react";

//생명주기 함수
function R031_ReactHook(props){
    const [contents, setContents] =useState('[THIS IS REACT]');

    //화면이 그려진 이후에 실행
    useEffect(() => {
        console.log('userEffect');
    });

    return(
        <div style={{padding: "0px"}}>
            <h2>{contents}</h2>
            <button onClick={() => setContents('[THIS IS HOOK]')}>버튼</button>
        </div>
    )
}

export default R031_ReactHook;