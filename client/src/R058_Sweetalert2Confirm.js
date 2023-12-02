import React, { Component } from 'react';
import Swal from 'sweetalert2';

//삭제 기능 구현시 한번더 알림창으로 확인
class R058_Sweetalert2Confirm extends Component {
    //  <h1 id='deleteId'>영역을 삭제
    deleteAlert = (e) =>{
        Swal.fire({
            title: '정말 삭제하시겠습니까?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#4B088A',
            cancelButtonColor: '#01DF01',
            confirmButtonText: '예',
            cancelButtonText: '아니요'
        }).then((result)=> {
            if (result.value){
                document.getElementById('deleteId').remove();
                Swal.fire(
                    'Deleted',
                    'sweetalert2 삭제완료',
                    'success'
                )
            }
        })
    }
  render() {
    return (
      <>
        <h1 id='deleteId'>sweetalert2</h1>
        <button onClick={e => this.deleteAlert()}>삭제</button>
      </>
    )
  }
}

export default R058_Sweetalert2Confirm