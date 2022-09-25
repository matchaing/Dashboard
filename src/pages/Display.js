import React from "react";
import '../App.css'
import DisplayData from '../components/DisplayData';
import { QueryClient, QueryClientProvider } from "react-query";

//react-query 사용
const queryClient = new QueryClient();

class Display extends React.Component {
    render () {
        return (
            <div className="page">데이터 현황
                <QueryClientProvider client={queryClient}>
                <DisplayData/>
                </QueryClientProvider>
            </div>
        )
    }
}

export default Display;