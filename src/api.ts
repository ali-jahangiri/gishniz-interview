import { IApiEntireResponse } from "./types/BizEntireResponse";

const BASE_URL = "https://api.gishnizapp.ir/api/";

const api = (pageNumber : number) => {
    return fetch(`${BASE_URL}/biz-list` , {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({ PageNO : pageNumber })
    }).then(res => res.json())
    .then(data => data as IApiEntireResponse)
}


export default api;