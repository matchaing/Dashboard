import {React, useState, useEffect} from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import LineChart from "../pages/charts/LineChart";
import { Line } from "react-chartjs-2";

//react-query 사용
const queryClient = new QueryClient();

const ClimateChart = (props) =>{
    const labels = props.labels;
    const humidity = props.humidity;
    const temperature = props.temperature;
    console.log(labels, humidity, temperature);

    const [humidityData, setHumidityData] = useState({
        labels: labels,
        datasets: [
            {
            label: "Humidity",
            data: humidity,
            backgroundColor: "#ecf0f1",
            },
        ],
    });

    const [temperatureData, setTemperatureData] = useState({
        labels: labels,
        datasets: [
            {
            label: "Temperature",
            data: temperature,
            backgroundColor: "#5bbfd9",
            },
        ],
    });

        
    return (
            <div>
                <QueryClientProvider client={queryClient}>
                    <div className="chart">
                        <LineChart chartData={humidityData}/>
                    </div>
                    <div className="chart">
                        <LineChart chartData={temperatureData}/>
                    </div>
                </QueryClientProvider>
            </div>
        )
    }
    
    
    export default ClimateChart;