import axios from 'axios'
import React, { Component } from 'react'
class R061_AxiosGet extends Component {
    componentDidMount(){
        // axios.get('호출 url') get 호출
        axios.get('http://date.jsontest.com/')
        // reponse와 호출 변수명 사이에 data를 붙이면 변수 사용 가능
        .then( response => {alert(response.data.date)})
    }

  render() {
    return (
      <h1>axiosGet</h1>
    )
  }
}

export default R061_AxiosGet