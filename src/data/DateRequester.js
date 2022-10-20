import '../App.css';


const DateRequester = (props)=>{
    console.log(props);

    let startdate_str = props.s.replace(/-/g,"");
    let enddate_str = props.e.replace(/-/g, "");
    
    const response = fetch(`http://localhost:8080/Test3/detail/climate?sdate=${startdate_str}&edate=${enddate_str}`);
}

export default DateRequester;