import axios from "axios";
import React, { Component } from 'react';

class FloationPopulationList extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            responseFPList: [],
            append_FPList: [],
        }
    }

    componentDidMount() {
        this.callFloatPopulListApi();
    }

    callFloatPopulListApi = async () => {
        try {
            const response = await axios.get('https://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=30&pageNo=1&MobileOS=ETC&MobileApp=AA&_type=json&listYN=Y&arrange=A&contentTypeId=12&areaCode=4&sigunguCode=4&serviceKey=NGC3J%2F3kwKWZZORfbmneNB50s19CnM7Z3ggMyc55TMoPMLUH1G1Sd8sxXF2IkeElWi4BOMTCiIzjGK8dd6Crdw%3D%3D');
            //json 형식 참조
            if (response.data.response.body.items && response.data.response.body.items.item) {
                const items = response.data.response.body.items.item;
                this.setState({
                    //responseFPList 에 저장
                    responseFPList: items,
                    append_FPList: this.FloatPopulListAppend(items),
                });
            } else {
                // items 속성이 존재하지 않거나 비어 있음
                console.error('API 응답에서 "items" 속성이 정의되지 않았거나 비어 있습니다.');
            }
        } catch (error) {
            console.error('API 요청 중 오류 발생:', error);
        }
    }
    
    FloatPopulListAppend = (items) => {
        let result = items.map((data, idx) => (
            <tr key={idx} className="hidden_type">
                <td>{idx + 1}</td>
                <td>{data.title}</td>
                <td>{data.modifiedtime}</td>
                <td>{data.tel}</td>
                <td>{data.addr1}</td>
                <td>{data.addr2}</td>
                <td>
                    <img src={data.firstimage} alt={data.title} style={{ width: '50px', height: '50px' }} />
                </td>
            </tr>
        ));
        return result;
    }

    render() {
        return (
            <>
                <table className="table_ty1 fp_tlist">
                    <thead>
                        <tr>
                            <th>Row</th>
                            <th>이름</th>
                            <th>일자</th>
                            <th>전화</th>
                            <th>주소</th>
                            <th>상세주소</th>
                            <th>이미지</th>
                        </tr>
                    </thead>
                </table>
                <table className="table_ty2 fp_tlist">
                    <tbody>
                        {this.state.append_FPList}
                    </tbody>
                </table>
            </>
        );
    }
}

export default FloationPopulationList;
