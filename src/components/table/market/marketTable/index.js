import MarketRow from "../marketRow"
import Button from "../../../button"
import ViewMore from "../../../viewMore"
import { FaCaretUp, FaCaretDown } from "react-icons/fa"
import { useEffect, useState, useRef } from "react"
import { useParams } from "react-router-dom"
import { sortWords, sortNumbers } from "../../../../ٖUtils/manageSorting"
import { showArrowIcon } from "../../../../ٖUtils/manageArrows"
import api from "../../../../ٖUtils/api"
import Style from "./style"

export default function MarketTable() {
    const [market, setMarket] = useState([])
    const [offset, setOffset] = useState(1);
    const [limit, setLimit] = useState(20);
    const [addMore, setAddMore] = useState([])
    const [isSorting, setIsSorting] = useState(true);
    const [showIcon, setShowIcon] = useState(false)
    const { id } = useParams()
    const tHeadRef = {
        "exchange": useRef(null), "price": useRef(null), "volume24": useRef(null), "volumeP": useRef(null),
    };

    useEffect(() => { getApi() }, [offset, limit])
    async function getApi() {
        const response = await api.get(`assets/${id}/markets`)
        setMarket(response.data.data)
    };

    const firstShowMarket = market.slice(0, limit)

    async function viewMore() {
        setOffset(offset + 20)
        setLimit(limit + 20)
        const response = await api.get(`assets/${id}/markets`, { params: { limit: limit+20, offset: offset } })
        setAddMore(response.data.data)
        setMarket(current => [...current, ...addMore])
    };

    function sortNameClick(refId, sortValue) {
        setIsSorting(!isSorting)
        sortWords(isSorting, market, setMarket, sortValue)
        setShowIcon(!showIcon)
        showArrowIcon(showIcon, tHeadRef, refId)
    };
    
    function sortNumberClick(refId, sortValue) {
        setIsSorting(!isSorting)
        sortNumbers(isSorting, market, setMarket, sortValue)
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
                                <i className="up"><FaCaretUp/></i>
                                <i className="down"><FaCaretDown/></i>
                            </th>
                            <th className="right none" >
                            <span>Pair</span>
                            </th>
                            <th className="right" ref={tHeadRef["price"]} onClick={() => sortNumberClick("price", "priceUsd")}>
                                <span>Price</span>
                                <i className="up"><FaCaretUp/></i>
                                <i className="down"><FaCaretDown/></i>
                                </th>
                                <th className="right showArrowDown" ref={tHeadRef["volume24"]} onClick={() => sortNumberClick("volume24", "volumeUsd24Hr")}>
                                <span>Volume(24Hr)</span>
                                <i className="up"><FaCaretUp/></i>
                                <i className="down"><FaCaretDown/></i>
                                </th>
                            <th className="right" ref={tHeadRef["volumeP"]} onClick={() => sortNumberClick("volumeP", "volumePercent")}>
                                <span>Volume(%)</span>
                                <i className="up"><FaCaretUp/></i>
                                <i className="down"><FaCaretDown/></i>
                                </th>
                            <th className="center none">Status</th>
                        </tr>
                    </thead>
                    <MarketRow market={firstShowMarket} />
                </table>
                <ViewMore address={`assets/${id}/markets`} data={market} setData={setMarket} limit={limit} setLimit={setLimit} offset={offset} setOffset={setOffset}/>
                {/* <div className="buttom"><Button text="View More" click={viewMore} /></div> */}
                {/* {addMore.length > 0 && addMore.length === limit ? <div className="buttom"><Button text="View More" click={viewMore} /></div> : <div className="empty"></div>} */}
            </div>
        </Style>
    )
}