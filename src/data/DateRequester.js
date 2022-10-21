import '../App.css';
import { useQuery } from "react-query";

const DateRequester = (props) =>{
    console.log(props);
    const startdate_str = props.s.replace(/-/g,"");
    const enddate_str = props.e.replace(/-/g, "");
    console.log(startdate_str,enddate_str);

    let uri = `http://localhost:8080/Test3/detail/climate?sdate=${startdate_str}&edate=${enddate_str}`;
    let encodeUri = encodeURI(uri);
    console.log(encodeUri);

    const {status, data, error} = useQuery(
        [startdate_str,enddate_str],() => 
        fetch(encodeUri)
            .then((res) => res.json())
            .then((res) => res.data)
    );

    if (status === "loading") {
        return <span>Loading...</span>;
    }
    
    if (status === "error") {
        return <span>Error</span>;
    }

    return (
        <div id="container">
        <div id="datas">
            {data && data.map((el, idx) => {
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

export default DateRequester;