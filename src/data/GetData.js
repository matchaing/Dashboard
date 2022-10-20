import '../App.css';
import SearchDate from '../components/SearchDate';

function GetClimate(startdate, enddate){
    let startdate_str = startdate.replace('-', '');
    let enddate_str = enddate.replace('-', '');

    const response = fetch(`http://localhost:8080/Test3/detail/climate?sdate=${startdate_str}&edate=${enddate_str}`);
    return response.then(res => res.json());

}