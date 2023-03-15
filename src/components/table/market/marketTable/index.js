import MarketRow from "../marketRow"
import ViewMore from "../../../viewMore"
import { FaCaretUp, FaCaretDown } from "react-icons/fa"
import { useState, useRef } from "react"
import { useParams } from "react-router-dom"
import { sortWords, sortNumbers } from "../../../../ٖUtils/manageSorting"
import { showArrowIcon } from "../../../../ٖUtils/manageArrows"
import Style from "./style"

export default function MarketTable({ marketData, setMarketData, limit, setLimit, offset, setOffset }) {

    const [isSorting, setIsSorting] = useState(true);
    const [showIcon, setShowIcon] = useState(false)
    const { id } = useParams()

    const tHeadRef = {
        "exchange": useRef(null), "price": useRef(null), "volume24": useRef(null), "volumeP": useRef(null),
    };

    const firstShowMarket = marketData.slice(0, limit)

    function sortNameClick(refId, sortValue) {
        setIsSorting(!isSorting)
        sortWords(isSorting, marketData, setMarketData, sortValue)
        setShowIcon(!showIcon)
        showArrowIcon(showIcon, tHeadRef, refId)
    };

    function sortNumberClick(refId, sortValue) {
        setIsSorting(!isSorting)
        sortNumbers(isSorting, marketData, setMarketData, sortValue)
        setShowIcon(!showIcon)
        showArrowIcon(showIcon, tHeadRef, refId)
    };

    return (
        <Style>
            <div className="container">
                <table>
                    <thead>
                        <tr>
                            <th className="left" ref={tHeadRef["exchange"]} onClick={() => sortNameClick("exchange", "exchangeId")}>
                                <span>Exchange</span>
                                <i className="up"><FaCaretUp /></i>
                                <i className="down"><FaCaretDown /></i>
                            </th>
                            <th className="right none" >
                                <span>Pair</span>
                            </th>
                            <th className="right" ref={tHeadRef["price"]} onClick={() => sortNumberClick("price", "priceUsd")}>
                                <span>Price</span>
                                <i className="up"><FaCaretUp /></i>
                                <i className="down"><FaCaretDown /></i>
                            </th>
                            <th className="right showArrowDown" ref={tHeadRef["volume24"]} onClick={() => sortNumberClick("volume24", "volumeUsd24Hr")}>
                                <span>Volume(24Hr)</span>
                                <i className="up"><FaCaretUp /></i>
                                <i className="down"><FaCaretDown /></i>
                            </th>
                            <th className="right" ref={tHeadRef["volumeP"]} onClick={() => sortNumberClick("volumeP", "volumePercent")}>
                                <span>Volume(%)</span>
                                <i className="up"><FaCaretUp /></i>
                                <i className="down"><FaCaretDown /></i>
                            </th>
                            <th className="center none">Status</th>
                        </tr>
                    </thead>
                    <MarketRow market={firstShowMarket} />
                </table>
                <ViewMore address={`assets/${id}/markets`} data={marketData} setData={setMarketData} limit={limit} setLimit={setLimit} offset={offset} setOffset={setOffset} />
            </div>
        </Style>
    )
}