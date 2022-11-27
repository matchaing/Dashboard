import React from "react";
import '../../App.css'
// import { QueryClient, QueryClientProvider } from "react-query";
import ClimateRequester from '../../components/ClimateRequester';
import GochangRequester from '../../components/GochangRequester';

//react-query 사용
// const queryClient = new QueryClient();

// class Display extends React.Component{
export default function Display(){
        return (
            <div className="page">
                <p className= "p-text">데이터 현황</p>
                {/* <button style={{display:'flex'}} onClick="window.location.reload()">조회하기</button> */}
                {/* <QueryClientProvider client={queryClient}> */}
                    <ClimateRequester s={20180103} e={20180103}/>
                    <GochangRequester s={20211208} e={20211208}/>
                {/* </QueryClientProvider> */}
            </div>
        );
}