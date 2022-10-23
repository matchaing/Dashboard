import '../App.css';
import { useQuery, useEffect, useState } from "react";
// import LineChart from "../charts/LineChart";

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

    const getData = async()=>{
        const res = await fetch(encodeUrl).then((res)=>res.json());
        console.log(res);
        
    };

    useEffect(()=>{
        getData();
    },[])

    // const {status, data, error} = useQuery([],() => 
    //     fetch(encodeUrl)
    //         // .then((res) => res.json())
    //         .then((data) =>console.log(data))
    //         // .then((res) => res.data)
    //         // { refetchInterval: 1000 } 
    // );

    // if (status === "loading") {
    //     return <span>Loading...</span>;
    // }
    
    // if (status === "error") {
    //     return <span>Error: {error.message}</span>;
    // }

    
    // const [climateData_temp, setClimateData_temp] = useState({
    //     labels: ClimateData.map((data) => data.DAILYDATATIME),
    //     datasets: [
    //         {
    //         label: "Temperature",
    //         data: ClimateData.map((data) => data.TEMPERATURE),
    //         backgroundColor: "#5bbfd9",
    //         },
    //     ],
    //     });
    

    return (
        <div className="page">
            test

        </div>
    )
}
export default DataRequester;