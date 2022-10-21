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

    // const handleClickButton = (e => {
    //     // console.log('state');
    //     const {s} = startdate.toString();
    //     const {e} = enddate.toString();
    //     setStartdate(s);

    // };

    const startdate_str = startdate.toString().replace(/-/g,"");
    const enddate_str = enddate.toString().replace(/-/g, "");
    console.log(startdate_str,enddate_str);

    let rawUrl = `http://localhost:8080/Test3/detail/climate?sdate=${startdate_str}&edate=${enddate_str}`;
    let encodeUrl = encodeURI(rawUrl);
    console.log(encodeUrl);

    const getData = async() => {
        const res = await fetch(encodeUrl)
        .then((res)=>res.json());
        console.log(res);
    };

    useEffect(()=>{
        getData();
    },[])

    return (
        <div>
            <div className='SearchDate'>
                <form>
                    <input type="date" name="sdate" min="2018-01-01" id="s_date" 
                    value={startdate}
                    onChange={(e)=>{
                        console.log(e.target.value);
                        setStartdate(e.target.value);
                        } }/>
                    <input type="date" name="edate" min={startdate} id="e_date"
                    value={enddate}
                    onChange={(e)=>{
                        console.log(e.target.value);
                        setEnddate(e.target.value);
                        } }/>
                    {/* <button onClick={handleClickButton}>조회하기</button> */}
                </form>
                    {/* <button>조회하기</button>     */}
                    {/* <button onClick={()=>document.location.href=getvalue()}>조회하기</button> */}
                    <div>
                        {/* <DateRequester s={startdate.toString()} e={enddate.toString()}/> */}
                    </div>
                {/* </form> */}
            </div>
        </div>
    )
}