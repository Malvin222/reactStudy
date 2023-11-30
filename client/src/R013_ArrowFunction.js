import { Component } from "react";
//화살표 함수
class R013_ArrowFunction extends Component{
    constructor(props){
        super(props);
        this.state={
            arrowFuc: 'React200',
            num:3
        };
    }
    componentDidMount(){
        // Function 1 ~ 5 까지 순서대로 호출
        Function1(1);
        this.Function2(1,1);
        this.Function3(1,3);
        this.Function4();
        this.Function5(0,2,3);

        //전달받은 num1 이라는 변수를 함수 내부에서 사용
        function Function1(num1){
            return console.log(num1+'. Es5 Function');
        }
    }

    //'function' 문자열 대신 '=>'로 선언
    //this는 R013_ArrowFunction 컴포넌트
    Function2 = (num1,num2) => {
        let num3 = num1 + num2;
        console.log(num3+'. Arrow Function : '+this.state.arrowFuc);
    }

    //콜백 함수 내부에서는 컴포넌트에 this로 접근할수 없음
    // this를 백업 : this.bind 이를 이용해서 state 변수에 접근 가능
    Function3(){
        var this_bind = this;
        setTimeout(function(){
            console.log(this_bind.state.num+'. Es5 Callback Function noBind: ');
            console.log(this.state.arrowFuc);
        },100);
    }
    
    //콜백 함수내부에서 this는 window 객체이기 때문에 this로 state 변수 접근하면 undefined에러 발생
    Function4(){
        setTimeout(function(){
            console.log('4. Es5 Callback Function Bind : '+this.state.arrowFuc);
        }.bind(this),100);
    }
    
    //화살표 함수에서는 this를 컴포넌트로 사용해 state 변수 접근 가능
    Function5 = (num1,num2,num3) =>{
        const num4 = num1 + num2 + num3;
        setTimeout(()=> {
            console.log(num4+'. Arrow Callback Function : '+ this.state.arrowFuc);
        },100);
    }

    render(){
        return(
            <h2>[THIS IS ArrowFunction]</h2>
        )
    }
}

export default R013_ArrowFunction;