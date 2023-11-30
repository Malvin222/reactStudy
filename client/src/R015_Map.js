import React, { Component } from "react";

//map() 함수는 forEach()와 마찬가지로 for 문에서 사용하던 순번과 배열의 크기 함수를 사용하지 않음
//return을 사용해 반환값을 받을 수 있음
class R015_Map extends Component{

    componentDidMount(){
        var Map_Arr =[3, 2, 8, 8]
        //콜백함수 실행 : 변수 x를 그대로 반환
        let Map_newArr = Map_Arr.map(x => x)
        console.log("1. Map_newArr :["+Map_newArr+"]")
        
        //변수 x 를 각각 2를 곱해 반환
        let Map_mulitiArr = Map_Arr.map(x => x * 2)
        console.log("2. Map_mulitiArr : ["+Map_mulitiArr+"]")

        var ObjArray = [{key:'readct', value:'200'},
                        {key:'리액트', value:'TwoHundred'}];
        let Map_objArr = ObjArray.map((obj, index) =>{
            console.log((index+3)+".obj : "+JSON.stringify(obj))
            //새로운 객체 Obj 선언
            var Obj ={};
            Obj[obj.key] = obj.value;
            return Obj;
        });
        console.log("5. Map_objArr : "+JSON.stringify(Map_objArr))
    }
    render(){
        return(
            <h2>[THIS IS Map]</h2>
        )
    }
}

export default R015_Map;