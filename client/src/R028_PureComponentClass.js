//PureComponent는 비교 대상의 값을 비교 , Class형 컴포넌트
import React, { PureComponent } from "react";

class R027_ComponentClass extends PureComponent{
    constructor(props){
        super(props);
        this.state = {
            StateString: 'react',
            StateArrayObj: ['react', {react:'200'}]
        }
    }
    //StateArrayObj 변수값은 값지만 참조값이 달라 다른객체로 인식
    buttonClick = (type) => {
        if(type === 'String'){
            this.setState({StateString: 'react'});
        }else{
            this.setState({StateArrayObj: ['react', {react:'200'}]});
        }
    }

    render(){
        console.log('render() 실행')
        return(
            <div>
                <button onClick={e => this.buttonClick('String')}> 문자열 변경</button>
                <button onClick={e => this.buttonClick('ArrayObject')}> 객체 배열 변경</button>
            </div>
        )
    }
}

export default R027_ComponentClass;