import { useQuery } from "react-query";
import './Data.css';
// import LineChart from "./LineChart";

const DisData = () => {
    const dailyTime_currency = "climate";

    //console.log(res)
    const {status, data, error} = useQuery(dailyTime_currency,() => 
        fetch(`http://localhost:8080/Test3/detail/climate?sdate=20180101&edate=20180102`)
            .then((res) => res.json())
            // .then((data) =>console.log(data));
            .then((res) => res.data),
            { refetchInterval: 1000 } 
    );

    if (status === "loading") {
        return <span>Loading...</span>;
    }
    
    if (status === "error") {
        return <span>Error: {error.message}</span>;
    }
    
    return (
    <div id="container">
        <div id="datas">
            {data.map((el, idx) => {
                return (
                <div className="data" key={idx}>
                    {/* <LineChart name="payment_currency"></LineChart> */}
                    <p>1 : {el.climateDataNo}</p>
                    <p>2 : {el.dailyTime + " "}</p>
                    <p>3 : {el.humidity + " "}</p>
                </div>);
            })}
        </div>
    </div>);
}

export default DisData;