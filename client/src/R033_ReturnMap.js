import React, { Component } from "react";

// element들을 배열에 넣어두고 map() 합수로 순서대로 나열
class R033_ReturnMap extends Component{
    render(){
        const element_Array = [
            <li>react</li>
            , <li>200</li>
            , <li>Array map</li>
        ]
        return(
            <ul>
                {element_Array.map((array_val)=> array_val)}
            </ul>
        )
    }
}

export default R033_ReturnMap;