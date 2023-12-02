// import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
// import './App.css';
import StrAddButton from './R078_StrAddButton';

class App extends Component {
  render() {
      return (
          <div>
              <h1>Start React 200!</h1>
              <span>{this.props.store.getState().data.str}</span><br/>
              <StrAddButton store={this.props.store}/>
          </div>
      );
  }
}

export default App;