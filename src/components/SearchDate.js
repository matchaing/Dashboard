// import {createAsyncThunk} from "@reduxjs/toolkit";
import '../App.css';
// import Requester, { requestGetAPI } from "../data/Requester";
import axios from "axios";
import { useEffect, useState } from "react";

// var sdate = 20180101;
// var edate = 20180101;
// export const getClimateView = createAsyncThunk(
//     '/climate',
//     async (param)=> {
//     const response = await requestGetAPI(`/climate?sdate=${sdate}&edate=${edate}`,{
//         humidity : param.humidity,
//         temperature : param.temperature
//     });
//     return response.data;
// })

function getvalue(){
    var idx = document.getElementById('idx').value;
    var sdate = document.getElementById('s_date').value;
    var edate = document.getElementById('e_date').value;
    var urll = '/m'+idx+'/'+sdate+edate;
    return urll;
}

function GetClimate(){
    const response = fetch("http://localhost:8080/Test3/detail/climate?sdate=20180101&edate=20180102");
    return response.then(res => res.json());

}

export default function SearchDate() {
    // const baseURL= "http://localhost:8080/Test3/detail";
    // const [datas, setDatas] = useState(null);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     const fetchDatas = async () => {
    //         try {
    //             //error, users 초기화
    //             setError(null);
    //             setDatas(null);

    //             // loading 상태를 true 로 변경
    //             setLoading(true);
    //             const response = await axios.get(
    //                 baseURL+'/climate?sdate=20180101&edate=20180102'
    //             );
    //             setDatas(response.data); // 데이터는 response.data
    //         } catch (e) {
    //         setError(e);
    //         }
    //         setLoading(false);
    //     };
    //     fetchDatas();
    // }, []);
    
    // if (loading) return <div>Loading..</div>;
    // if (error) return <div>error</div>;
    // if (!datas) return null;
    return (
        <div>
            <div>
                {/* <getClimateView/> */}
                <form>
                    <input type="date" name="sdate" min="2018-01-01" id="s_date"/>
                    <input type="date" name="edate" min="2018-01-01" id="e_date"/>
                    <button onClick={()=>document.location.href=getvalue()}>조회하기</button>
                    
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
                </form>
            </div>
        </div>
    )
}