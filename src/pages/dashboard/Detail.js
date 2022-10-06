import React from "react";
import '../../App.css'
import SearchDate from '../../components/SearchDate';
import { QueryClient, QueryClientProvider } from "react-query";

//react-query 사용
const queryClient = new QueryClient();

class Detail extends React.Component {
    render () {
        return (
            <div className="page">데이터 상세 분석
            
                <QueryClientProvider client={queryClient}>
                    <SearchDate/>
                </QueryClientProvider>    
            </div>
            
        )
    }
}

export default Detail;