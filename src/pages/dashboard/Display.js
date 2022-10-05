import React from "react";
import '../../App.css'
// import DisplayData from '../../data/queries/DisplayData';
import SearchDate from '../../components/SearchDate';
import { QueryClient, QueryClientProvider } from "react-query";

//react-query 사용
const queryClient = new QueryClient();

class Display extends React.Component {
    render () {
        return (
            <div className="page">데이터 현황

                <QueryClientProvider client={queryClient}>
                <SearchDate/>
                {/* <DisplayData/> */}
                </QueryClientProvider>
            </div>
        )
    }
}

export default Display;