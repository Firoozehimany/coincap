import CurrencyRow from "../currencyRow"
import ViewMore from "../../../viewMore"
import { FaCaretUp, FaCaretDown } from "react-icons/fa"
import { useEffect, useState, useRef } from "react"
import { sortWords, sortNumbers } from "../../../../ٖUtils/manageSorting"
import { showArrowIcon } from "../../../../ٖUtils/manageArrows"
import Style from "./style"

export default function CurrencyTable({data, setData, offset, setOffset, limit, setLimit}) {

    const [sortData, setSortData] = useState([])
    const [isSorting, setIsSorting] = useState(true);
    const [showIcon, setShowIcon] = useState(false)
    const tHeadRef = {
        "rank":useRef(null), "name": useRef(null), "price": useRef(null), "marketCap": useRef(null), "vWap": useRef(null), "supply": useRef(null), "volume24": useRef(null), "change": useRef(null) };

    const firstShow = data.slice(0,limit)

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

    return(
        <Style>
            <div className="container">
                <table>
                    <thead>
                        <tr>
                            <th className="center showArrowUp" ref={tHeadRef["rank"]} onClick={() => sortNumberClick("rank", "rank")}>
                                <span>Rank</span>
                                <i className="up"><FaCaretUp/></i>
                                <i className="down"><FaCaretDown/></i>
                            </th>
                            <th className="left" ref={tHeadRef["name"]} onClick={() => sortNameClick("name", "name")}>
                                <span>Name</span>
                                <i className="up"><FaCaretUp/></i>
                                <i className="down"><FaCaretDown/></i>
                            </th>
                            <th className="right" ref={tHeadRef["price"]} onClick={() => sortNumberClick("price", "priceUsd")}> 
                                <span>Price</span>
                                <i className="up"><FaCaretUp/></i>
                                <i className="down"><FaCaretDown/></i>
                            </th>
                            <th className="right" ref={tHeadRef["marketCap"]} onClick={() => sortNumberClick("marketCap", "marketCapUsd")}> 
                                <span>Market Cap</span>
                                <i className="up"><FaCaretUp/></i>
                                <i className="down"><FaCaretDown/></i>
                            </th>
                            <th className="right" ref={tHeadRef["vWap"]} onClick={() => sortNumberClick("vWap", "vwap24Hr")}> 
                                <span>VWAP(24HR)</span>
                                <i className="up"><FaCaretUp/></i>
                                <i className="down"><FaCaretDown/></i>
                            </th>
                            <th className="right" ref={tHeadRef["supply"]} onClick={() => sortNumberClick("supply", "supply")}> 
                                <span>Supply</span>
                                <i className="up"><FaCaretUp/></i>
                                <i className="down"><FaCaretDown/></i>
                            </th>
                            <th className="right" ref={tHeadRef["volume24"]} onClick={() => sortNumberClick("volume24", "volumeUsd24Hr")}> 
                                <span>Volume(24Hr)</span>
                                <i className="up"><FaCaretUp/></i>
                                <i className="down"><FaCaretDown/></i>
                            </th>
                            <th className="right" ref={tHeadRef["change"]} onClick={() => sortNumberClick("change", "changePercent24Hr")}> 
                                <span>Change(24Hr)</span>
                                <i className="up"><FaCaretUp/></i>
                                <i className="down"><FaCaretDown/></i>
                            </th>
                        </tr>
                    </thead>
                    <CurrencyRow data={firstShow}/>
                </table>
                <ViewMore address={'assets'} data={data} setData={setData} limit={limit} setLimit={setLimit} offset={offset} setOffset={setOffset}/>
            </div>
        </Style>
    )
}