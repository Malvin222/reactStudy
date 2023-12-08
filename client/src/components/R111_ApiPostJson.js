import axios from 'axios';
import React, { Component } from 'react';

class R111_ApiPostJson extends Component {
  componentDidMount() {
    axios.post('/users', {})
      .then(response => {
        if (response && response.data) {
          console.log("response.data.message: " + response.data.message);
        } else {
          console.error("Invalid response structure");
        }
      })
      .catch(error => {
        console.error("Error in API request:", error);
      });
  }

  render() {
    return (
      <><h1>Call Node Api Post</h1></>
    );
  }
}

export default R111_ApiPostJson;

  //node서버를 Post방식으로 호출