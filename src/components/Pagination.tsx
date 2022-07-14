import React, { useEffect, useState } from "react";

interface Props {
    currentPage: number;
    setPageNumber: (pageNo: number) => void
    allPageNumber: number;
    range?: number;
}

const Pagination: React.FC<Props> = ({ currentPage, range = 5, allPageNumber, setPageNumber }) => {
    const [rangeNumber, setRangeNumber] = useState<number>(0);

    const changeRangeHandler = (action: "next" | "prev") => {
        setRangeNumber(prev => action === "next" ? prev + 1 : prev - 1);
    }


    useEffect(function changePageNumberInParallelOfRangeChange() {
        if (rangeNumber) setPageNumber((range * rangeNumber) + 1);
        else setPageNumber(1)
    }, [rangeNumber])


    const reachEndOfPages = ((range * rangeNumber) + 5 < allPageNumber);


    // if the parent don't specify all available page numbers, don't render the component!
    if (!allPageNumber) return null;
    return (
        <div className="pagination">
            {
                rangeNumber !== 0 && <div onClick={() => changeRangeHandler("prev")} className="pagination__rangeController">
                    <p>{"<"}</p>
                </div>
            }

            {
                new Array(range)
                    .fill("")
                    .map((_, i) => i + (range * rangeNumber + 1))
                    .map((number, i) => (
                        <div
                            className={`pagination__item ${currentPage === number ? "pagination__item--active" : ""}`}
                            key={i}
                            onClick={() => setPageNumber(number)}
                        >
                            <p>{number}</p>
                        </div>
                    ))
            }
            {
                reachEndOfPages && <div onClick={() => changeRangeHandler("next")} className="pagination__rangeController">
                    <p>{">"}</p>
                </div>
            }
        </div>
    )
}


export default Pagination;