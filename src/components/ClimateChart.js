import LineChart from "../pages/charts/LineChart";
import { Line } from "react-chartjs-2";

const ClimateChart = (props) =>{
    const [climateData, setClimateData] = useState({
            labels: climateData.map((data) => data.DAILYDATATIME),
            datasets: [
                {
                label: "Humidity",
                data: climateData.map((data) => data.HUMIDITY),
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

    return (
            <div className="page">
                <QueryClientProvider client={queryClient}>
                    <div className='chart'>
                        <LineChart chartData={climateData}/>
                    </div>
                </QueryClientProvider>
            </div>
        )
    }
    
    
    export default DataRequester;