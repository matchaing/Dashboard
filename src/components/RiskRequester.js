import '../App.css';
// import { useEffect, useState } from "react";
import ScatterChart from "../pages/charts/ScatterChart";
import { Scatter } from "react-chartjs-2";
import riskData from '../data/riskData';

const RiskRequester = function(){
    const data = {
        labels: ['M','T','W','T','F'],
        datasets: [
        {
            label: 'Weekly Scatter',
            data: [13,12,13,3,45],
            //UserData.map((data) => data.userGain),
            backgroundColor: [
                "#ecf0f1"
            ],
        },
        ],
    };


    return (
        <div className="risk-chart">
            <ScatterChart chartData={data}/>
        </div>

    );
}

export default RiskRequester;