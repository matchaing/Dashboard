import {React, useState} from "react";
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


        return (
            <div className="page">데이터 현황 
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