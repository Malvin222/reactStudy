import React, { Component } from "react";

// class : 코드를 객체 단위로 재사용
// 자바스크립트에서는 함수를 객체로 사용 가능
class ClassPrototype extends Component{

    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){
        //ESS prototype
        //ExamCountFunc() 객체 실행 후 retrun되는 결과값을 cnt 변수에 저장
    var ExamCountFunc = (function(){
        function ExamCount(num){
            this.number = num;
        }
        //생성자함수명.prototype.함수명 선언 -> 외부에서 함수를 실행해 객체 내부에 선언된 함수사용 가능
        ExamCount.prototype.showNum = function(){
            console.log('1. react_'+ this.number);
        };
        return ExamCount;
    }());

    var cnt = new ExamCountFunc('200');
    cnt.showNum();

    //EX6 class
    // constructor() 생성자 항수가 실행 파라미터로 전달받은 num2 변수값을 number2에 저장
    class ExamCountClass {
        constructor(num2){
            //number2 변수
            this.number2 = num2;
        }
        showNum(){
            console.log(`2. react_${this.number2}`);
        }
    }

    var cnt2 = new ExamCountClass('2hundred');
    cnt2.showNum();

    }
    render(){
        return(
            <h2>[THIS IS Class]</h2>
        )
    }
}

export default ClassPrototype;