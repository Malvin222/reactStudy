import React, { Component } from 'react';
import { Progress } from 'reactstrap';

// Progress : 전체 작업에 대한 현재 진행 상태 표시
class R052_ReactstrapProgress extends Component {
  constructor (props) {
    super(props);
    this.state = { progress:0 }
}
    // progress() 함수 호출
    componentDidMount(){ this.progress() }

    progress =()=>{
      if(this.state.progress !== 100){
        // setTimeout() 함수는 0.1초마다 실행, 진행 상태값을 1씩 증가
        setTimeout(function() {
          this.setState({progress: this.state.progress+1});
          this.progress();
        }.bind(this), 100);
      }
    }

  render() {
    return (
      <>
      <Progress color="info" value={this.state.progress}>{this.state.progress}%</Progress><br/>
      <Progress multi>
      <Progress bar color="warning" value="25">25%</Progress>
          <Progress bar color="success" value="35">react</Progress>
          <Progress bar value="20">200</Progress>
          <Progress bar color="danger" value="20">20%</Progress>
        </Progress>
      </>
    )
  }
}

export default R052_ReactstrapProgress;