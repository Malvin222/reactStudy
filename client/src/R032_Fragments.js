import React, { Component } from "react";

//element를 리턴할때 <html> 태그로 전체를 감싸지 않으면 에러가 발생
// <Fragments> 태그로 감싸면 불필요한 <html> 태그를 추가하지 않고 사용
class R032_Fragments extends Component{
    render(){
        return(
            <React.Fragment>
                <p>P TAG</p>
                <span>SPAN TAG</span>
            </React.Fragment>
        )
    }
}

export default R032_Fragments;