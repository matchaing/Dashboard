import '../App.css';
import { useQuery, useEffect, useState } from "react";
// import ClimateChart from "./ClimateChart";
import LineChart from "../pages/charts/LineChart";
import { Chart, Line } from "react-chartjs-2";

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


    const [data, setData] = useState([]);

    const GetData = async()=>{
        const res = await fetch(encodeUrl)
        .then((res)=>res.json());
        // .then((res) => res.data);
        
        // let length = res.length;
        // console.log(length);
        
        // let labels = [];
        // let humidity = [];
        // let temperature = [];

        // for(let i=0; i<length; i++){
        //     labels.push(data.data[i].DAILYDATADT);
        //     humidity.push(data.data[i].HUMIDITY);
        //     temperature.push(data.data[i].TEMPERATURE);
        // }
        console.log(res);
        const climateData = res.map((it, index)=>{
            return {
                label: it.DAILYDATADT,
                humidity: it.HUMIDITY,
                temperature: it.TEMPERATURE
            };
        });
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
        setData(climateData);
    //     new Chart(document.getElementById("line-chart"), {
    //     type: 'line',
    //     data: {
    //         labels: labels,
    //         datasets: [
    //             {
    //                 label: "Climateeee",
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
    

    useEffect(()=>{
        setTimeout(()=>{
            GetData();
        }, 1500);
        // GetData();
    },[])

    return (
        <div className="page">
            
            <div className='chart'>
                <LineChart chartData={data}/>
            </div>
                    {/* <ClimateChart lables={labels} humidity={humidity}/> */}
        </div>
    )
}


export default DataRequester;