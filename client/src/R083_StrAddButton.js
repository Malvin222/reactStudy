import React, { Component } from 'react';
//actions 폴더 경로를 임포트
import { connect } from 'react-redux';
import { add } from './actions';

//props에 스토어를 담아 하위 컴포넌트로 전달하면, 전달받은 컴포넌트에서 스토어에 접근가능
// dispatch 함수를 사용하면 스토어 데이터를 변경할 수 있다
class R078_StrAddButton extends Component {
  render() {
    return (
      // <input value="Add200" type='button' onClick={this.addString}/>
      <input value="Add200" type="button" onClick={this.props.addString}/>
    )
  }
  
  // addString = () => {
  //   // dispatch 함수를 통ㅎ래 add함수의 반환값을 스토어에 전달 (actions폴더의 index.js파일)
  //   // add 함수의 type값을 리듀서(reducers 폴더의 Index.js)에서 참고해 스토어 데이터를 변경
  //   // dispatch 함수는 리듀서에 액션을 전달하고 리듀서에서는 액션에 작성된 작업 내용을 읽어 스토어 데이터를 변경
  //   this.props.store.dispatch(add());
  // }
}

let mapDispatchToProps = (dispatch, props) => {
  console.log('Props from App.js : ' +props.AppProp)
  return{
    //addSString 함수는 props에 할당
    addString: () => dispatch(add())
  };
};

R078_StrAddButton = connect(null, mapDispatchToProps)(R078_StrAddButton);

export default R078_StrAddButton