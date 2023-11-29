import { Component } from "react";

class R008_LifecycleEx extends Component{
    static getDerivedStateFromProps(props, state){
        console.log('2. getDerivedStateFromProps Call:'+props.prop_value);
        return{tmp_state:props.prop_value};
    }

    constructor(props){
        super(props);
        this.state={};
        console.log('1.constructor Call');
    }
    //'생성' 단계의 생명주기 함수 중 가장 마지막으로 실행
    componentDidMount(){
        console.log('4. componentDidMount Call');
        console.log('5 tmp_state : '+this.state.tmp_state);
        this.setState({tmp_state2: true});
    }
    //boolean 유형의 데이터를 반환 -> true 일경우 render() 함수를 한 번 더 호출
    shouldComponentUpdate(props, state){
        console.log('6. shouldComponentUpdate Call / tmp_state2 = ' +state.tmp_state2);
        return state.tmp_state2
    }

    render(){
        console.log('3. render Call');
        return(
            <h2> [THIS IS shouldComponentUpdate FUNCTION]</h2>
        )
    }
}

export default R008_LifecycleEx;