import ExchangeRow from "../exchangeRow"
import ViewMore from "../../../viewMore"
import { FaCaretUp, FaCaretDown } from "react-icons/fa"
import { useEffect, useState, useRef } from "react"
import { sortWords, sortNumbers } from "../../../../ٖUtils/manageSorting"
import { showArrowIcon } from "../../../../ٖUtils/manageArrows"
import Style from "./style"

export default function ExchangeTable({ data, setData, offset, setOffset, limit, setLimit }) {

    const [sortData, setSortData] = useState([])
    const [isSorting, setIsSorting] = useState(true);
    const [showIcon, setShowIcon] = useState(false)
    const tHeadRef = {
        "rank": useRef(null), "exchange": useRef(null), "price": useRef(null), "volume24": useRef(null), "total": useRef(null), "status": useRef(null)
    };

    const firstShow = data.slice(0, limit)

    function sortNameClick(refId, sortValue) {
        setIsSorting(!isSorting)
        sortWords(isSorting, data, setData, sortValue)
        setShowIcon(!showIcon)
        showArrowIcon(showIcon, tHeadRef, refId)
    };

    function sortNumberClick(refId, sortValue) {
        setIsSorting(!isSorting)
        sortNumbers(isSorting, data, setData, sortValue)
        setShowIcon(!showIcon)
        showArrowIcon(showIcon, tHeadRef, refId)
    };

    return (
        <Style>
            <div className="container">
                <table>
                    <thead>
                        <tr>
                            <th className="center showArrowUp" ref={tHeadRef["rank"]} onClick={() => sortNumberClick("rank", "rank")}>
                                <span>Rank</span>
                                <i className="up"><FaCaretUp /></i>
                                <i className="down"><FaCaretDown /></i>
                            </th>
                            <th className="left" ref={tHeadRef["exchange"]} onClick={() => sortNameClick("exchange", "exchangeId")}>
                                <span>Name</span>
                                <i className="up"><FaCaretUp /></i>
                                <i className="down"><FaCaretDown /></i>
                            </th>
                            <th className="right" ref={tHeadRef["price"]} onClick={() => sortNumberClick("price", "tradingPairs")} >
                                <span>Trading Pairs</span>
                                <i className="up"><FaCaretUp /></i>
                                <i className="down"><FaCaretDown /></i>
                            </th>
                            <th className="right none">
                                <span>Top Pair</span>
                            </th>
                            <th className="right" ref={tHeadRef["volume24"]} onClick={() => sortNumberClick("volume24", "volumeUsd")} >                                <span>Volume(24Hr)</span>
                                <i className="up"><FaCaretUp /></i>
                                <i className="down"><FaCaretDown /></i>
                            </th>
                            <th className="right" ref={tHeadRef["total"]} onClick={() => sortNumberClick("total", "tradingPairs")} >                                <span>Total(%)</span>
                                <i className="up"><FaCaretUp /></i>
                                <i className="down"><FaCaretDown /></i>
                            </th>
                            <th className="center" ref={tHeadRef["status"]} onClick={() => sortNumberClick("status", "socket")} >                                <span>Status</span>
                                <i className="up"><FaCaretUp /></i>
                                <i className="down"><FaCaretDown /></i>
                            </th>
                        </tr>
                    </thead>
                    <ExchangeRow exchange={firstShow} />
                </table>
                <ViewMore address={'exchanges'} data={data} setData={setData} limit={limit} setLimit={setLimit} offset={offset} setOffset={setOffset} />
            </div>
        </Style>
    )
}