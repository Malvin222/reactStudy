import React, { Component } from "react";

//Component는 비교 대상이 완전히 동일하지 않으면 변경발생으로 봄 (class형 컴포넌트)
class R027_ComponentClass extends Component{
    constructor(props){
        super(props);
        this.state = {
            StateString: 'react',
            StateArrayObj: ['react', {react:'200'}]
        }
    }

    buttonClick = (type) => {
        if(type === 'String'){
            this.setState({StateString: 'react'});
        }else{
            this.setState({StateArrayObj:['react', {react: '200'}]});
        }
    }

    render(){
        console.log('render() 실행')
        return(
            <div>
                <button onClick={e => this.buttonClick('String')}>문자열 변경</button>
                <button onClick={e => this.buttonClick('ArrayObject')}>객체 배열 변경</button>
            </div>
        )
    }
}

export default R027_ComponentClass;