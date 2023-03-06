import MarketRow from "../marketRow"
import Button from "../../../button"
import { FaCaretUp, FaCaretDown } from "react-icons/fa"
import { useEffect, useState, useRef } from "react"
import { useParams } from "react-router-dom"
import api from "../../../../ٖUtils/api"
import Style from "./style"
import react from "react"

export default function MarketTable() {
    const [market, setMarket] = useState([])
    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(20);
    const [addMore, setAddMore] = useState([])
    const [isSorting, setIsSorting] = useState(true);
    const [showIcon, setShowIcon] = useState(false)
    const { id } = useParams()
    const tHeadRef = {
        "exchange": useRef(null), "price": useRef(null), "volume24": useRef(null), "volumeP": useRef(null),
    };

    useEffect(() => { getApi() }, [])
    async function getApi() {
        const response = await api.get(`assets/${id}/markets`, { params: { limit: limit, offset: offset } })
        setMarket(response.data.data)
        setAddMore(response.data.data)
    };

    async function viewMore() {
        setOffset(offset + 20)
        setLimit(limit + 20)
        setMarket(current => [...current, ...addMore])
    };

    function sorting(value) {
        if (isSorting === true) {
            const sortedMarket = [...market].sort(value);
            setMarket(sortedMarket);
        } else {
            const reSortedMarket = [...market].reverse(value);
            setMarket(reSortedMarket);
        }
    };

    function showArrowUp(refId){
        tHeadRef[refId].current.classList.remove("showArrowDown")
        tHeadRef[refId].current.classList.add("showArrowUp")
    };
    
    function showArrowDown(refId){
        tHeadRef[refId].current.classList.remove("showArrowUp")
        tHeadRef[refId].current.classList.add("showArrowDown")
    }

    function showArrowicon(refId){
        for(const key in tHeadRef){
            tHeadRef[key].current.classList.remove("showArrowUp", "showArrowDown")
        }
        if (showIcon === false){
            showArrowUp(refId)
        } else {
            showArrowDown(refId)
        }
    }

    function sortExchanges(refId) {
        setIsSorting(!isSorting)
        sorting((a, b) => a.exchangeId.localeCompare(b.exchangeId))
        setShowIcon(!showIcon)
        showArrowicon(refId)
    };

    function sortPrice(refId) {
        setIsSorting(!isSorting);
        sorting((a, b) => a.priceUsd - b.priceUsd);
        setShowIcon(!showIcon);
        showArrowicon(refId);
    };

    function sortVolume24(refId) {
        setIsSorting(!isSorting);
        sorting((a, b) => a.volumeUsd24Hr - b.volumeUsd24Hr);
        setShowIcon(!showIcon);
        showArrowicon(refId);
    };

    function sortvolumePercent(refId) {
        setIsSorting(!isSorting);
        sorting((a, b) => a.volumePercent - b.volumePercent);
        setShowIcon(!showIcon);
        showArrowicon(refId);
    };
    
    return (
        <Style>
            <div className="container">
                <table>
                    <thead>
                        <tr>
                            <th className="left" ref={tHeadRef["exchange"]} onClick={() => sortExchanges("exchange")}>
                                <span>Exchange</span>
                                <i className="up"><FaCaretUp/></i>
                                <i className="down"><FaCaretDown/></i>
                            </th>
                            <th className="right none" >
                            <span>Pair</span>
                            </th>
                            <th className="right" ref={tHeadRef["price"]} onClick={() => sortExchanges("price")}>
                                <span>Price</span>
                                <i className="up"><FaCaretUp/></i>
                                <i className="down"><FaCaretDown/></i>
                                </th>
                                <th className="right showArrowDown" ref={tHeadRef["volume24"]} onClick={() => sortVolume24("volume24")}>
                                <span>Volume(24Hr)</span>
                                <i className="up"><FaCaretUp/></i>
                                <i className="down"><FaCaretDown/></i>
                                </th>
                            <th className="right" ref={tHeadRef["volumeP"]} onClick={() => sortvolumePercent("volumeP")}>
                                <span>Volume(%)</span>
                                <i className="up"><FaCaretUp/></i>
                                <i className="down"><FaCaretDown/></i>
                                </th>
                            <th className="center none">Status</th>
                        </tr>
                    </thead>
                    <MarketRow market={market} />
                </table>
                {addMore.length > 0 && addMore.length === limit ? <div className="buttom"><Button text="View More" click={viewMore} /></div> : <div className="empty"></div>}
            </div>
        </Style>
    )
}