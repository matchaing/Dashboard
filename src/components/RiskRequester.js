import '../App.css';
import { useEffect, useState } from "react";
import ScatterChart from "../pages/charts/ScatterChart";
import { Scatter } from "react-chartjs-2";
import LineChart from "../pages/charts/LineChart";
import { Line } from "react-chartjs-2";

const RiskData = [
    {
        "FILE_DT": 20211208,
        "z_score": 0.6745,
        "label": 0
    },
    {
        "FILE_DT": 20211208,
        "z_score": 0.0012456198,
        "label": 0
    },
    {
        "FILE_DT": 20211208,
        "z_score": 0.5296644838,
        "label": 0
    },
    {
        "FILE_DT": 20211208,
        "z_score": 0.6745,
        "label": 0
    },
    {
        "FILE_DT": 20211208,
        "z_score": 0.6745,
        "label": 0
    },
    {
        "FILE_DT": 20211208,
        "z_score": 0.3824460913,
        "label": 0
    },
    {
        "FILE_DT": 20211208,
        "z_score": 0.6521324985,
        "label": 0
    },
    {
        "FILE_DT": 20211208,
        "z_score": 0.6745,
        "label": 0
    },
    {
        "FILE_DT": 20211208,
        "z_score": 0.6745,
        "label": 0
    },
    {
        "FILE_DT": 20211208,
        "z_score": 1.7397338873,
        "label": 0
    }
];
//날짜 파일명 이상
//"label"이 1인 행만 붉은색으로 표시
// 이외에는 회색

console.log(RiskData);
//array에서 object "FILE_DT" 키 값 추출
console.log("FILE_DT 추출: " + RiskData.map(row=>row.FILE_DT));

//label이 1인 애들을 따로 추출해서,, 다른 색상으로 그리기!!!!!!!
const [FILE_DT, setFILE_DT] = useState([0]);


const RiskRequester = function(){
    const risk = {
        labels: RiskData.map(row=>row.FILE_DT), 
        datasets: [
        {
            label: 'Risk Scatter',
            data: RiskData.map(row=>row.z_score),
            backgroundColor: [
                "#5bbfd9"
            ],
        },
        ],
    };


    return (
        <div className="risk-chart">
            <ScatterChart chartData={risk}/>
        </div>

    );
}

export default RiskRequester;