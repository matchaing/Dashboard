import '../App.css';
import { useEffect, useState } from "react";
import ScatterChart from "../pages/charts/ScatterChart";
import { Scatter } from "react-chartjs-2";
import LineChart from "../pages/charts/LineChart";
import { Line } from "react-chartjs-2";

// const RiskData = [
//     {
//         "FILE_DT": 20211208,
//         "z_score": 0.6745,
//         "label": 0
//     },
//     {
//         "FILE_DT": 20211208,
//         "z_score": 0.0012456198,
//         "label": 0
//     },
//     {
//         "FILE_DT": 20211208,
//         "z_score": 0.5296644838,
//         "label": 0
//     },
//     {
//         "FILE_DT": 20211208,
//         "z_score": 0.6745,
//         "label": 0
//     },
//     {
//         "FILE_DT": 20211209,
//         "z_score": 0.6745,
//         "label": 0
//     },
//     {
//         "FILE_DT": 20211209,
//         "z_score": 0.3824460913,
//         "label": 0
//     },
//     {
//         "FILE_DT": 20211209,
//         "z_score": 0.6521324985,
//         "label": 0
//     },
//     {
//         "FILE_DT": 20211209,
//         "z_score": 0.6745,
//         "label": 0
//     },
//     {
//         "FILE_DT": 20211209,
//         "z_score": 0.6745,
//         "label": 0
//     },
//     {
//         "FILE_DT": 20211209,
//         "z_score": 1.7397338873,
//         "label": 0
//     }
// ];


// console.log(RiskData);
// //array에서 object "FILE_DT" 키 값 추출
// console.log("FILE_DT 추출: " + RiskData.map(row=>row.FILE_DT));


// const risk = {
//     labels: RiskData.map(row=>row.FILE_DT), 
//     datasets: [
//         {
//             label: 'Safety',
//             data: RiskData.map(row=>row.z_score),
//             backgroundColor: [
//                 "#6fba2c"
//             ],
//             yAxisID:'y',
//             position: 'left',
//         },
//         {
//             label: 'Risk',
//             data: RiskData.map(row=>row.z_score),
//             backgroundColor: [
//                 "#dc0e0e"
//             ],
//             yAxisID:'y2',
//             position: 'right',
//             // tension:0.4,
//             // grid:false,
//         },
//     ],
// };

// const RiskRequester = function(){

//     const config = {
//         type: 'scatter',
//         data: RiskData,
//         options: {
//             responsive: true,
//             plugins: {
//             legend: {
//                 position: 'top',
//             },
//             title: {
//                 display: true,
//                 text: 'Chart.js Scatter Multi Axis Chart'
//             }
//             },
//             scales: {
//             y: {
//               type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
//                 position: 'left',
//                 ticks: {
//                 color: "#6fba2c"
//                 }
//             },
//             y2: {
//               type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
//             position: 'right',
//             reverse: true,
//             ticks: {
//                 color: "#dc0e0e"
//             },
//             grid: {
//                 drawOnChartArea: false // only want the grid lines for one axis to show up
//             }
//             }
//         }
//         },
//     };


//     return (
//         <div className="risk-chart">
//             <ScatterChart chartData={risk} options={config}/>
//         </div>

//     );
// }

// export default RiskRequester;


// const risk = {
//     // labels: RiskData.map(row=>row.FILE_DT), 
//     datasets: [
//     {
//         label: 'Risk',
//         data: RiskData.map(row=>row.z_score),
//         backgroundColor: [
//             "#6fba2c"
//         ],
//         tension:0.4,
//         grid:false,
//     },
//     ],
// };

// console.log(RiskData);
//array에서 object "FILE_DT" 키 값 추출
// console.log("FILE_DT 추출: " + RiskData.map(row=>row.FILE_DT));


// const RiskRequester = function(){
//     const risk = {
//         labels: RiskData.map(row=>row.FILE_DT), 
//         datasets: [
//         {
//             label: 'Risk Scatter',
//             data: RiskData.map(row=>row.z_score),
//             backgroundColor: [
//                 "#5bbfd9"
//             ],
//         },
//         ],
//     };


const RiskRequester = function() { //= (props) =>{
    // const startdate_str = props.s.toString().replace(/-/g,"");
    // const enddate_str = props.e.toString().replace(/-/g, "");
    // console.log(startdate_str,enddate_str);
//http://127.0.0.1:5000/Dashboard/risk
    let rawUrl = `http://localhost:8080/Dashboard/risk`;
    let encodeUrl = encodeURI(rawUrl);
    console.log(encodeUrl);
    

    const [data, setData] = useState([0]);

    const [file_dt, setFile_dt] = useState([]);
    const [z_score, setz_score] = useState([]);
    const [label, setLabel] = useState([]);

    const getData = async()=>{
        const res = await fetch(encodeUrl, {method: 'GET'})
        .then((res)=>res.json());
        
        let result = JSON.stringify(res);

        let jsondata = (JSON.parse(result));
        console.log("json? : " + jsondata);

        ///데이터 존재 확인
        let length = jsondata.length;
        console.log(length);
        // if(!(enddate_str == 0) && length == 0){
        //     alert("데이터가 비어있습니다.");
        //     return;
        // }

        for(let i=0; i<length; i++){
            if(!Number.isNaN(parseInt(jsondata[i].FILE_DT))){
                file_dt.push(parseInt(jsondata[i].FILE_DT));
                z_score.push(parseInt(jsondata[i].z_score));
                label.push(parseInt(jsondata[i].label));
            }
        }
        
         
        //가져온 데이터 넣기
        // setData(jsondata);
        setFile_dt(file_dt);
        setz_score(z_score);
        setLabel(label);
    };
    
    useEffect(()=>{ //컴포넌트 렌더링 이후에 데이터 가져오기
    //     // if(!(data.length == 1)){
            getData();
            
            console.log("risk : useEffect");
        // }
    },[encodeUrl])

    
    //그래프
    // const RiskRequester = function(){
    // const risk = {
    //     labels: RiskData.map(row=>row.FILE_DT), 
    //     datasets: [
    //     {
    //         label: 'Risk',
    //         data: RiskData.map(row=>row.z_score),
    //         backgroundColor: [
    //             "#5bbfd9"
    //         ],
    //     },
    //     ],
    // };

    return (
        <div className="risk-chart">
            {/* <ScatterChart chartData={risk}/> */}
            {/* <LineChart chartData={risk}/> */}
        </div>

    );
}

export default RiskRequester;