import React, { useEffect, useRef, useState } from "react";
import api from "../api";
import { IApiEntireResponse } from "../types/BizEntireResponse";
import BizItem from "./BizItem";
import LoadingSpinner from "./LoadingSpinner";


interface Props {
    pageNumber: number;
    setEntirePageAmount: (amount: number) => void;
    disablePaginationHandler : (status: boolean) => void
}

const BizListContainer: React.FC<Props> = ({ pageNumber, disablePaginationHandler, setEntirePageAmount }) => {
    const [biz, setBiz] = useState<IApiEntireResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [fadeOnDemandLoading, setFadeOnDemandLoading] = useState(false);

    const containerRef = useRef<HTMLDivElement>(null);


    useEffect(function fetchBizListHandler() {
        disablePaginationHandler(true);
        setFadeOnDemandLoading(true);
        api(pageNumber)
            .then(data => {
                setBiz(data);
                setEntirePageAmount(data.TotalPage);
                disablePaginationHandler(false);
                containerRef.current?.scrollIntoView({ behavior : "smooth" });
                setFadeOnDemandLoading(false)
                setLoading(false);
            });
    }, [pageNumber]);


    return (
        <div ref={containerRef} className={`bizContainer ${fadeOnDemandLoading ? "bizContainer--loading" : ""}`}>
            {
                (loading && !biz)
                    ? <LoadingSpinner />
                    : biz?.BizList.map((biz, i) => (
                        <BizItem key={i} {...biz} />
                    ))
            }
        </div>
    )
}


export default BizListContainer;