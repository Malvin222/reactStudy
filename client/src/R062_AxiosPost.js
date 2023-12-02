import axios from 'axios'
import React, { Component } from 'react'

// post함수의 파라미터로 json과 같은 형태의 데이터를 넣고 http body에 담아 url 호출가능
class R062_AxiosPost extends Component {
    componentDidMount(){
        //axios.post('호출url',json 데이터)
        axios.post('http://date.jsontest.com/',{
            a:"react",b:200
        })
        .then( response =>{alert(response.data.date)})
    }
  render() {
    return (
      <h1>axios post</h1>
    )
  }
}

export default R062_AxiosPost