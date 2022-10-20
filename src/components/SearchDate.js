import '../App.css';
import { useEffect, useState } from "react";

function getvalue(){
    var idx = document.getElementById('idx').value;
    var sdate = document.getElementById('s_date').value;
    var edate = document.getElementById('e_date').value;
    var urll = '/m'+idx+'/'+sdate+edate;
    return urll;
}

    
export default function SearchDate() {
    const [startdate,setStartdate] = useState(0);
    const [enddate,setEnddate] = useState(0);
    return (
        <div>
            <div>
                {/* <getClimateView/> */}
                <form>
                    <input type="date" name="sdate" min="2018-01-01" id="s_date" 
                    value={startdate}
                    onChange={(e)=>{
                        console.log(e.target.value);
                        setStartdate(e.target.value);
                        } }/>
                    <input type="date" name="edate" min="2018-01-01" id="e_date"
                    value={enddate}
                    onChange={(e)=>{
                        console.log(e.target.value);
                        console.log(typeof(e.target.value));
                        setEnddate(e.target.value);
                        } }/>
                    <button onClick={()=>document.location.href=getvalue()}>조회하기</button>
                    
                </form>
            </div>
        </div>
    )
}