import React from 'react'

//InComponent 변수는 R075_ReactHoc 컴포넌트 자체,
//컴포넌트를 return하면서 props값 전달 :App.jsp에서 전달한 name변수
//컴포넌트가 리턴 되면서 R075_ReactHoc 컴포넌트의 render함수 실행 및 props.name값이 화면에 출력
export default function withHocComponent(InComponent, InComponentName) {
  return class OutComponent extends React.Component{
    componentDidMount(){
        console.log(`3. InComponentName : ${InComponentName}`)
    }
    render() {
        console.log('1. InComponent render')
    return (<InComponent {...this.props}/>)
  }
}
}
