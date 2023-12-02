import React, { Component } from 'react';

//커링(Currying)은 함수의 자사용성을 높이기 위해 함수자체를 return하는 함수
//파라미터도 나눠 전달가능
class R074_ReactCurrying extends Component {
    //파라미터로 전달된 c,d를 더해주는 함수
    plusNumOrString(c, d){
        return c + d;
    }
    //this.plusNumOrString(a,b)를 return하는 또 다른 함수를 return
    PlusFunc1(a){
        return function(b){
            return this.plusNumOrString(a,b)
        }.bind(this)
    }

    //PlusFunc1 함수를 화살표 함수로 간단하게 표현
    PlusFunc2 = a => b => this.plusNumOrString(a,b)

    //PlusFunc 파라미터를 1개만 받음, 변수 a와 상수 200을 파라미터로 전달
    PlusFunc(a){
        return this.PlusFunc1(a)(200)
    }
  render() {
    return (
        <>
        <input type="button" value="NumberPlus" onClick={e => alert(this.PlusFunc(100))}/>
        <input type="button" value="StringPlus" onClick={e => alert(this.PlusFunc("react"))}/>
        </>
        )
  }
}

export default R074_ReactCurrying