import axios from 'axios';

const BASE_URL = 'http://localhost:8080/Test3/detail';

export function requestGetAPI(url, param){
    return axios({
        method: 'get',
        url: BASE_URL + url,
        params: param,
    });
}