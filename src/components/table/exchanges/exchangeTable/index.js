import ExchangeRow from "../exchangeRow"
import ViewMore from "../../../viewMore"
import { FaCaretUp, FaCaretDown } from "react-icons/fa"
import { useEffect, useState, useRef } from "react"
import { useParams } from "react-router-dom"
import { sortWords, sortNumbers } from "../../../../ٖUtils/manageSorting"
import { showArrowIcon } from "../../../../ٖUtils/manageArrows"
import api from "../../../../ٖUtils/api"
import Style from "./style"

export default function ExchangeTable() {
    const [exchange, setExchange] = useState([])
    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(20);
    const [sortData, setSortData] = useState([])
    const [isSorting, setIsSorting] = useState(true);
    const [showIcon, setShowIcon] = useState(false)
    const tHeadRef = {
       "rank":useRef(null), "exchange": useRef(null), "price": useRef(null), "volume24": useRef(null), "volumeP": useRef(null),
    };

    useEffect(() => { getApi() }, [offset, limit])
    async function getApi(){
        const response = await api.get('exchanges')
        setExchange(response.data.data)
    }
    const firstShow = exchange.slice(0,limit)


    function sortNameClick(refId, sortValue) {
        setIsSorting(!isSorting)
        sortWords(isSorting, exchange, setExchange, sortValue)
        setShowIcon(!showIcon)
        showArrowIcon(showIcon, tHeadRef, refId)
    };
    
    function sortNumberClick(refId, sortValue) {
        setIsSorting(!isSorting)
        sortNumbers(isSorting, exchange, setExchange, sortValue)
        setShowIcon(!showIcon)
        showArrowIcon(showIcon, tHeadRef, refId)
    };

  
    return(
        <Style>
            <div className="container">
                <table>
                    <thead>
                        <tr>
                            <th className="showArrowUp" ref={tHeadRef["rank"]} onClick={() => sortNumberClick("rank", "rank")}>
                                <span>Rank</span>
                                <i className="up"><FaCaretUp/></i>
                                <i className="down"><FaCaretDown/></i>
                            </th>
                            <th className="left" ref={tHeadRef["exchange"]} onClick={() => sortNameClick("exchange", "exchangeId")}>
                                <span>Name</span>
                                <i className="up"><FaCaretUp/></i>
                                <i className="down"><FaCaretDown/></i>
                            </th>
                            <th className="right">
                                <span>Trading Pairs</span>
                                <i className="up"><FaCaretUp/></i>
                                <i className="down"><FaCaretDown/></i>
                            </th>
                            <th className="right">
                                <span>Top Pair</span>
                            </th>
                            <th className="right">
                                <span>Volume(24Hr)</span>
                                <i className="up"><FaCaretUp/></i>
                                <i className="down"><FaCaretDown/></i>
                            </th>
                            <th className="right">
                                <span>Total(%)</span>
                                <i className="up"><FaCaretUp/></i>
                                <i className="down"><FaCaretDown/></i>
                            </th>
                            <th className="center">
                                <span>Status</span>
                                <i className="up"><FaCaretUp/></i>
                                <i className="down"><FaCaretDown/></i>
                            </th>
                        </tr>
                    </thead>
                    <ExchangeRow exchange={firstShow}/>
                </table>
                <ViewMore address={'exchanges'} data={exchange} setData={setExchange} limit={limit} setLimit={setLimit} offset={offset} setOffset={setOffset}/>
            </div>
        </Style>
    )
}