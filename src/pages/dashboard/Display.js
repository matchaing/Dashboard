import {React, useState, useEffect} from "react";
import '../../App.css'
import { QueryClient, QueryClientProvider } from "react-query";
import { ClimateData } from '../../data/ClimateData';
import LineChart from "../charts/LineChart";
import ScatterChart from "../charts/ScatterChart";
import BarChart from "../charts/BarChart";

//react-query 사용
const queryClient = new QueryClient();

export default function Display(){
    const [climateData, setClimateData] = useState({
        labels: ClimateData.map((data) => data.DAILYDATATIME),
        datasets: [
            {
            label: "Humidity",
            data: ClimateData.map((data) => data.HUMIDITY),
            backgroundColor: [
                // "#8ab0ba",
                "#ecf0f1",
                // "#619cab",
                // "#5bbfd9",
                // "#159cbf",
            ],
            },
        ],
    });

    const [climateData_temp, setClimateData_temp] = useState({
        labels: ClimateData.map((data) => data.DAILYDATATIME),
        datasets: [
            {
            label: "Temperature",
            data: ClimateData.map((data) => data.TEMPERATURE),
            backgroundColor: "#5bbfd9",
            },
        ],
        });

        const getData = async()=>{
            const res = await fetch("http://localhost:8080/Dashboard/detail/gochang?sdate=20211208&edate=20211208"
            ).then((res)=>res.json());
            console.log(res);
            
            
        };
    
        useEffect(()=>{
            getData();
        },[])


        return (
            <div className="page">
                <p className= "p-text">데이터 현황</p>
                <QueryClientProvider client={queryClient}>
                <div className='chart'>
                    <LineChart chartData={climateData}/>
                </div>
                <div className='chart'>
                    <LineChart chartData={climateData_temp}/>
                </div>
                {/* <div className='chart'>
                    <LineChart chartData={climateData}/>
                </div> */}
                </QueryClientProvider>
            </div>
        )
    
}