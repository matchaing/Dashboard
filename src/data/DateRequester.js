import '../App.css';
import { useQuery } from "react-query";
import './queries/Data.css';

const DateRequester = (props) =>{
    console.log(props);
    const startdate_str = props.s.replace(/-/g,"");
    const enddate_str = props.e.replace(/-/g, "");
    console.log(startdate_str,enddate_str);

    let rawUrl = `http://localhost:8080/Test3/detail/climate?sdate=${startdate_str}&edate=${enddate_str}`;
    let encodeUrl = encodeURI(rawUrl);
    console.log(encodeUrl);

    const getData = async() => {
        const res = await fetch(encodeUrl).then((res)=>res.json());
        console.log(res);
    };
    

    let res = fetch(encodeUrl).then((res)=>console.log(res));
    // let rawRes = await fetch(encodeUrl)
    // let jsonRes = await rawRes.json();
    // console.log(jsonRes);

    // const {status, data, error} = useQuery(
    //     [startdate_str,enddate_str],() => 
    //     fetch(encodeUrl)
    //         .then((res) => res.json())
    //         .then((res) => res.data)
    // );

    // if (status === "loading") {
    //     return <span>Loading...</span>;
    // }
    
    // if (status === "error") {
    //     return <span>Error</span>;
    // }

//     return (
//         <div id="container">
//         <div id="datas">
//             {data && data.map((el, idx) => {
//                 return (
//                 <div className="data" key={idx}>
//                     {/* <LineChart name="payment_currency"></LineChart> */}
//                     <p>1 : {el.climateDataNo}</p>
//                     <p>2 : {el.dailyTime + " "}</p>
//                     <p>3 : {el.humidity + " "}</p>
//                 </div>);
//             })}
//         </div>
//     </div>
//     );
}

export default DateRequester;