// import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
// import './App.css';
import { connect } from 'react-redux';
import StrAddButton from './R083_StrAddButton';
class App extends Component {
    render() {
        return (
            <div>
                <h1>Start React 200!</h1>
              {/* <span>{this.props.store.getState().data.str}</span><br/> */}
              {/* <StrAddButton store={this.props.store}/> */}
                <span>{this.props.str}</span><br/>
              <StrAddButton AppProp="200"/>
            </div>
        );
    }
}
//부모 컴포넌트에서 전달한 props 변수를 받는다
let mapStateToProps = (state, props) => {
    console.log('Props from index.js : ' +props.indexProp)
    return{
        str: state.data.str,
    };
};


// connect함수 파라미터: (첫번째 파라미터: mapStateToProps 스토어의 상태 값을 컴포넌트 props에 할당)
//                       (두번째 파라미터 : mapDispatchToProps : dispatch 함수를 컴포넌트 함수에 바인딩)
App = connect(mapStateToProps, null)(App);

export default App;