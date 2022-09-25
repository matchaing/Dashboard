import { useQuery } from "react-query";
import './Data.css';
// import LineChart from "./LineChart";

const Data = () => {
    //필요한 데이터 요청
    const payment_currency = "KRW";
    const order_currency = "BTC";

    const {status, data, error} = useQuery(
        payment_currency,() => 
        fetch(`https://api.bithumb.com/public/transaction_history/${order_currency}_${payment_currency}`)
            .then((res) => res.json())
            .then((res) => res.data),
            { refetchInterval: 1000 } 
    );

    if (status === "loading") {
        return <span>Loading...</span>;
    }
    
    if (status === "error") {
        return <span>Error: {error.message}</span>;
    }
    
    return (
    <div id="container">
    
        <div id="datas">
            {data.map((el, idx) => {
                return (
                <div className="data" key={idx}>
                    {/* <LineChart name="payment_currency"></LineChart> */}
                    <p>거래 일시 : {el.transaction_date}</p>
                    <p>현재 가격 : {el.price + " " + payment_currency}</p>
                    
                    <p>거래 금액 : {el.total + " " + payment_currency}</p>
                </div>);
            })}
        </div>
    </div>);
}

export default Data;