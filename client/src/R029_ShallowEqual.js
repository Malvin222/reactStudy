import { Component } from "react";
import { shallowEqualArrays } from "shallow-equal";

//shallowEqualArrays() 문자열과 배열은 값만 비교, 객체는 참조값 비교
class R029_ShallowEqual extends Component{
    constructor(props){
        super(props)
        this.state = { StateString: 'react'}
    }

    shouldComponentUpdate(nextProps, nextState){
        return !shallowEqualArrays(this.state, nextState)
    }

    componentDidMount(){
        const object = {react : '200'};
        const Array1 = ['리액트', object];
        const Array2 = ['리액트', object];
        const Array3 = ['리액트', {react : '200'}];

        console.log('shallowEqualArrays(Array1, Array2) : '+ shallowEqualArrays(Array1, Array2));
        console.log('shallowEqualArrays(Array2, Array3) : '+ shallowEqualArrays(Array2, Array3));
        this.setState({StateString : 'react'})
    }
    render(){
        console.log('render() 실행')
        return (<div></div>)
    }
}

export default R029_ShallowEqual;