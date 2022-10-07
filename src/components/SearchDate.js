import {createAsyncThunk} from "@reduxjs/toolkit";
import '../App.css';
import Requester, { requestGetAPI } from "../data/Requester";
var sdate = 20180101;
var edate = 20180101;
export const getClimateView = createAsyncThunk(
    '/climate',
    async (param)=> {
    const response = await requestGetAPI(`/climate?sdate=${sdate}&edate=${edate}`,{
        humidity : param.humidity,
        temperature : param.temperature
    });
    return response.data;
})

function getvalue(){
    var idx = document.getElementById('idx').value;
    // var xdate = document.getElementById('xdate').value;
    var sdate = document.getElementById('sdate').value;
    var edate = document.getElementById('edate').value;
    var urll = '/m'+idx+'/'+sdate+edate;
    return urll;
}

export default function SearchDate() {
    return (
        <div>
            <div>
                {/* <getClimateView/> */}
                <form>
                    <input type="date" name="date" id="sdate"/>
                    <input type="date" name="date" id="edate"/>
                    <button onclick="document.location.href=getvalue()">조회하기</button>
                    
                    {/* <div>
                    <getClimateView/>
                    </div> */}
                </form>
            </div>
        </div>
    )
}