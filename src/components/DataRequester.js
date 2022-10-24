import '../App.css';
import { useQuery, useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import ClimateChart from "./ClimateChart";
import LineChart from "../pages/charts/LineChart";
import { Chart, Line } from "react-chartjs-2";

//react-query 사용
// const queryClient = new QueryClient();

const DataRequester = (props) =>{
    const startdate_str = props.s.toString().replace(/-/g,"");
    const enddate_str = props.e.toString().replace(/-/g, "");
    const param = props.param.toString();
    console.log(param,startdate_str,enddate_str);

    //climate : 20180101~20180103
    //gochang : 20211208
    let rawUrl = `http://localhost:8080/Dashboard/detail/${param}?sdate=${startdate_str}&edate=${enddate_str}`;
    let encodeUrl = encodeURI(rawUrl);
    console.log(encodeUrl);

    const [data, setData] = useState([0]);
    const [labels, setLabel] = useState([]);
    const [humidity, setHumidity] = useState([]);
    const [temperature, setTemperature] = useState([]);


    const getData = async()=>{
        const res = await fetch(encodeUrl, {method: 'GET'})
        .then((res)=>res.json());
        
        let result = JSON.stringify(res);
        let climate_data = (JSON.parse(result));
        console.log(climate_data);

        ///데이터 존재 확인
        let length = climate_data.length;
        console.log(length);
        if(length == 0){
            alert("데이터가 비어있습니다.");
            return;
        }
        // console.log(typeof(climate_data); //object인거 확인
        
        
        for(let i=0; i<length; i++){
            if(!Number.isNaN(parseInt(climate_data[i].DAILYDATADT))){
                labels.push(parseInt(climate_data[i].DAILYDATADT));
                humidity.push(parseInt(climate_data[i].HUMIDITY));
                temperature.push(parseInt(climate_data[i].TEMPERATURE));
            }
        }
            
        // }
        console.log(humidity);
        // console.log(temperature);

        // const climateData = climate_data && climate_data.map((it)=>{
        //     return {
        //         dailydatadt: it.DAILYDATADT,
        //         humidity: it.HUMIDITY,
        //         temperature: it.TEMPERATURE
        //     };
        // });


        // const [data, setData] = useState({
        //     labels: data.map((data) => data.DAILYDATATIME),
        //     datasets: [
        //         {
        //         label: "Humidity",
        //         data: climateData.map((data) => data.HUMIDITY),
        //         backgroundColor: "#ecf0f1",
        //         },
        //     ],
        // });

        // const [climateData, setClimateData] = useState({
        //     labels: labels,
        //     datasets: [
        //         {
        //         label: "Humidity",
        //         data: humidity,
        //         backgroundColor: [
        //             // "#8ab0ba",
        //             "#ecf0f1",
        //             // "#619cab",
        //             // "#5bbfd9",
        //             // "#159cbf",
        //         ],
        //         },
        //     ],
        // });

        //가져온 데이터 넣기
        setData(climate_data);
        setLabel(labels);
        setHumidity(humidity);
        setTemperature(temperature);


        console.log(labels);
    //     var climate_chart = new Chart(document.getElementById("line-chart"), {
    //     type: 'line',
    //     data: {
    //         labels: labels,
    //         datasets: [
    //             {
    //                 label: "Climate",
    //                 backgroundColor: "#ecf0f1",
    //                 data: humidity
    //             }
    //         ]
    //     },
    //     options: {
    //         legend: { display: false },
    //         title: {
    //             display: true,
    //             text: 'hhtext'
    //         }
    //     }
    // });

    };
    

    console.log(data);
    useEffect(()=>{ //컴포넌트 렌더링 이후에 데이터 가져오기
        if(data.length === 1){
            getData();
            
            console.log("useEffect");
        }
    },[encodeUrl])

    return (
        <div className="page">
            {/* <QueryClientProvider client={queryClient}>

                <div className='chart'>
                <LineChart chartData={climateData}/>
                <canvas id="climate_chart"></canvas>
            </div>
            </QueryClientProvider> */}
            
            <ClimateChart lables={labels} humidity={humidity}/>
        </div>
    )
}


export default DataRequester;