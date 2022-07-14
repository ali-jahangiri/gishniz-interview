import React, { useEffect, useState } from "react";
import api from "../api";
import { IApiEntireResponse } from "../types/BizEntireResponse";
import BizItem from "./BizItem";
import LoadingSpinner from "./LoadingSpinner";


interface Props {
    pageNumber : number
}

const BizListContainer : React.FC<Props> = ({ pageNumber }) => {
    const [biz, setBiz] = useState<IApiEntireResponse | null>(null);
    const [loading, setLoading] = useState(true);



    useEffect(function fetchBizListHandler() {
            api(pageNumber)
                .then(data => {
                    setBiz(data);
                    setLoading(false);
                })
    } , []);

    console.log(biz);
    

    return (
        <div className="bizContainer">
            {
                (loading && !biz) 
                ? <LoadingSpinner /> 
                : biz?.BizList.map((biz , i) => (
                    <BizItem key={i} {...biz} />
                ))
            }
        </div>
    )
}


export default BizListContainer;