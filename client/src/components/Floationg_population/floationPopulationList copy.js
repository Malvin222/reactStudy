import axios from "axios";
import React, { Component } from 'react';
export class floationPopulationList extends Component {
    constructor(props){
        super(props);
        
        this.state={
            responseFPList:[],
            append_FPList:[],
        }
    }
    componentDidMount(){
        this.callFloatPopulListApi()
    }

    callFloatPopulListApi = async() =>{
        axios.get('https://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=30&pageNo=1&MobileOS=ETC&MobileApp=AA&_type=json&listYN=Y&arrange=A&contentTypeId=12&areaCode=4&sigunguCode=4&serviceKey=NGC3J%2F3kwKWZZORfbmneNB50s19CnM7Z3ggMyc55TMoPMLUH1G1Sd8sxXF2IkeElWi4BOMTCiIzjGK8dd6Crdw%3D%3D',{
        }).then(response => {
            try{
                const items = response.data.response.body.items.item;
                this.setState({responseFPList: items});
                this.setState({
                    append_FPList: this.FloatPopulListAppend(),
                });
            } catch(error){
                alert(error)
            }
        }).catch(error => {
            alert(error);
            return false;});
    }
    
    FloatPopulListAppend = () => {
        let result = []
        var FPList = this.state.responseFPList.data
        var jsonString = JSON.stringify(FPList)
        var json = JSON.parse(jsonString)

        for(let i=0; i<json.item.length; i++){
            var data = json.item[i]
            var idx = i+1
            result.push(
                <tr class="hidden_type">
                    <td>{idx}</td>
                    <td>{data.title}</td>
                    <td>{data.modifiedtime}</td>
                    <td>{data.tel}</td>
                    <td>{data.addr1}</td>
                    <td>{data.addr2}</td>
                    <td>
                        <img src={data.firstimage} alt={data.title} style={{ width: '50px', height: '50px' }} />
                    </td>
                </tr>
            )
        }
        return result
    }
  render() {
    return (
        <>
        <table class="table_ty1 fp_tlist">
            <tr>
                <th>Row</th>
                <th>이름</th>
                <th>일자</th>
                <th>전화</th>
                <th>주소</th>
                <th>상세주소</th>
                <th>시</th>
                <th>firstimage</th>
            </tr>
        </table><table class="table_ty2 fp_tlist">
                {this.state.append_FPList}
            </table>
            
            </>
        )
  }
}

export default floationPopulationList;