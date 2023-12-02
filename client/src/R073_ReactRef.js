import React, { Component } from 'react';

//Ref는 'reference'의 약자, element의 값을 얻거나 수정할때 javascript나 jquery사용
//Ref를 사용하면 element가 참조하는 변수에 접근해 변경하고 element 제어 가능
class R073_ReactRef extends Component {
    constructor(props){
        super(props);
        // 참조에 대한 정보가 ref의 currnet라는 속성에 할당
        this.InputRef = React.createRef();
    }

    RefFocus = (e) =>{
        this.InputRef.current.focus();
    }

    JavascriptFocus(){
        document.getElementById('id').focus();
    }
  render() {
    return (
        <>
            <input id="id" type="text" ref={this.InputRef}/>
            <input type="button" value="Ref Focus" onClick={this.RefFocus}/>
            <input type="button" value="Javascript" onClick={this.JavascriptFocus}/>

        </>
        )
  }
}

export default R073_ReactRef