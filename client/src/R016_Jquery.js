import $ from 'jquery';
import React, { Component } from "react";

class R016_Jquery extends Component{
   
    input_alert = (e) => {
    //jquery를 사용할때는 $기호
    //jquery문법 $('#inputId')로 input태그에 접근
    var input_val = $('#inputId').val();
    alert(input_val);
    }

    render(){
        return(
            <div>
                <h2>[THIS IS Jquery]</h2>
                <input id="inputId" name="inputName"/>
                <button id="buttonId" onClick={e => this.input_alert(e)}>
                    Jquery Button
                </button>
            </div>
        )
    }
}

export default R016_Jquery;