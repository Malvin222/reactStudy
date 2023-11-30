import { Component } from "react";

// 배열함수 for Each()는 for 문에서 사용하던 순번과 배렬의 크기 변수를 사용하지 않음.
// 배열의 처음부터 마지막 순번까지 모두 작업하는 경우 forEach()문을 사용하는 것이 간편함
class R014_ForEach extends Component{
    componentDidMount(){
        var For_Arr = [3, 2, 8, 8];
        var For_newArr= [];

        for (var i = 0; i< For_Arr.length; i++){
            For_newArr.push(For_Arr[i]);
        }
        console.log("1. For_newArr : ["+For_newArr+"]");

        //forEach 함수에서는 순번과 배열의 크기 정보를 사용하지 않음(i , length)
        var ForEach_Arr = [3, 3, 9, 8];
        var ForEach_newArr = [];
        //콜백함수로 result를 받아 새로운 함수에 push함
        ForEach_Arr.forEach((result) =>{
            ForEach_newArr.push(result);
        })
        console.log("2. ForEach_newArr :["+ForEach_newArr+"]");
    }

    render(){
        return(
            <h2>[THIS IS ForEach]</h2>
        )
    }
}

export default R014_ForEach;