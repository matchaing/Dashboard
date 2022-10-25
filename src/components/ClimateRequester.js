import '../App.css';
import { useQuery, useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
// import ClimateChart from "./ClimateChart";
import LineChart from "../pages/charts/LineChart";
import { Line } from "react-chartjs-2";
import Display from '../pages/dashboard/Display';

//react-query 사용
const queryClient = new QueryClient();

const DataRequester = (props) =>{
    const startdate_str = props.s.toString().replace(/-/g,"");
    const enddate_str = props.e.toString().replace(/-/g, "");
    console.log(startdate_str,enddate_str);

    //climate : 20180101~20180103
    //gochang : 20211208
    let rawUrl = `http://localhost:8080/Dashboard/detail/climate?sdate=${startdate_str}&edate=${enddate_str}`;
    let encodeUrl = encodeURI(rawUrl);
    console.log(encodeUrl);
    // let count = 0;

    const [data, setData] = useState([0]);

    const [labels, setLabel] = useState([]);
    const [humidity, setHumidity] = useState([]);
    const [temperature, setTemperature] = useState([]);


    const getData = async()=>{
        const res = await fetch(encodeUrl, {method: 'GET'})
        .then((res)=>res.json());
        
        let result = JSON.stringify(res);
        let count = 0;
        if(count>1){
            jsondata.splice(0);
        }
        let jsondata = (JSON.parse(result));
        // console.log(jsondata);

        // if(param === "climate"){
            
        // }

        ///데이터 존재 확인
        let length = jsondata.length;
        console.log(length);
        if(!(enddate_str == 0) && length == 0){
            alert("데이터가 비어있습니다.");
            return;
        }
        // console.log(typeof(jsondata); //object인거 확인
        
        // if(!(labels.length == 0)){
        //     labels = [];
        //     console.log("초기화 이후 : " + labels);

        // }
        if(labels.length > 1){ //데이터가 이미 있다면 초기화
            labels.splice(0);
            humidity.splice(0);
            temperature.splice(0);
        }
        count++;
        for(let i=0; i<length; i++){
            if(!Number.isNaN(parseInt(jsondata[i].DAILYDATADT))){
                labels.push(parseInt(jsondata[i].DAILYDATADT));
                humidity.push(parseInt(jsondata[i].HUMIDITY));
                temperature.push(parseInt(jsondata[i].TEMPERATURE));
            }
        }
        
            
        // console.log(temperature);

        //가져온 데이터 넣기
        setData(jsondata);
        setLabel(labels);
        setHumidity(humidity);
        setTemperature(temperature);
        // console.log("fff" + labels);
        // console.log("길이 ::: " +labels.length + " " + humidity.length);
    };
    

    console.log(data);
    console.log(labels);

    useEffect(()=>{ //컴포넌트 렌더링 이후에 데이터 가져오기
        // if(!(data.length == 1)){
            getData();
            
            console.log("useEffect");
        // }
    },[encodeUrl])

    
    //그래프
    const humidity_data ={
    // const [humidity_data, setHumidityData] = useState({
        labels: labels,
        datasets: [
            {
            label: "Humidity",
            data: humidity,
            backgroundColor: "#ecf0f1",
            },
        ],
    // });
    
    };
    const temperature_data ={
    // const [temperature_data, setTemperatureData] = useState({
        labels: labels,
        datasets: [
            {
            label: "Temperature",
            data: temperature,
            backgroundColor: "#5bbfd9",
            },
        ],
    // });
    };

    return (
        <div>
            {/* <button>버튼</button> */}
            {/* <QueryClientProvider client={queryClient}> */}
                    <div className="chart">
                        <LineChart chartData={humidity_data}/>
                    </div>
                    <div style={{display:'flex'}} className="chart">
                        <LineChart chartData={temperature_data}/>
                    </div>
            {/* </QueryClientProvider> */}
            
            {/* <ClimateChart labels={labels} humidity={humidity} temperature={temperature}/> */}
        </div>
    )
}


export default DataRequester;