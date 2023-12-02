import React, { Component } from 'react'
import Swal from 'sweetalert2'
//sweetalert2 패키지는 다양한 디자인과 기능의 알림창을 지원
class R056_Sweetalert2Basic extends Component {
    componentDidMount(){
        // Swal.fire('1. SweetAlert')
        // alert('2. alert()')
        // 프로미스, 비동기 함수를 동기적으로 사용할 수 있도록 하는 개념, then은 이전함수가 완전히 종료되었을때 실행
        Swal.fire('1. SweetAlert').then(result =>
            { alert('2. result.value : '+result.value)})
    }
  render() {
    return (
      <h1>sweetalert2</h1>
    )
  }
}

export default R056_Sweetalert2Basic