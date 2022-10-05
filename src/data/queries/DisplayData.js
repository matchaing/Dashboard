import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import './Data.css';
import LineChart from "./LineChart";

//https://api.github.com/orgs/nodejs
//http://localhost:8080/Test3/detail/climate
////climate, gochang


function DisplayData() {
    const baseURL= "http://localhost:8080/Test3/detail";
    const [datas, setDatas] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDatas = async () => {
            try {
                //error, users 초기화
                setError(null);
                setDatas(null);

                // loading 상태를 true 로 변경
                setLoading(true);
                const response = await axios.get(
                    baseURL+'/climate'
                );
                setDatas(response.data); // 데이터는 response.data
            } catch (e) {
            setError(e);
            }
            setLoading(false);
        };
        fetchDatas();
    }, []);
    
    if (loading) return <div>Loading..</div>;
    if (error) return <div>error</div>;
    if (!datas) return null;
    
    return (
        <div id="container">
            <div id="datas">
            {/* <ul> */}
                {datas.map(data => (
                    <div className="data" key={data.id}>
                        <p> [{data.climateDataNo}번] {data.dailyDt} </p>
                        <p>지역코드: {data.regionCode}번 </p>
                        <p>습도: {data.humidity}%,온도: {data.temperature}도 </p>
                    </div>
                ))}
            {/* </ul> */}
            </div>
        </div>
    );
}
setTimeout(DisplayData, 1000);
export default DisplayData;
