import React from "react";
import '../../App.css'
import { QueryClient, QueryClientProvider } from "react-query";

//react-query 사용
const queryClient = new QueryClient();

class Display extends React.Component {
    render () {
        return (
            <div className="page">데이터 현황
                <QueryClientProvider client={queryClient}>

                </QueryClientProvider>
            </div>
        )
    }
}

export default Display;