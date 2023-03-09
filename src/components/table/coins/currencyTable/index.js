import CurrencyRow from "../currencyRow"
import ViewMore from "../../../viewMore"
import { FaCaretUp, FaCaretDown } from "react-icons/fa"
import { useEffect, useState, useRef } from "react"
import { sortWords, sortNumbers } from "../../../../ٖUtils/manageSorting"
import { showArrowIcon } from "../../../../ٖUtils/manageArrows"
import { Link, useParams } from "react-router-dom"
import Style from "./style"

export default function CurrencyTable({data, setData, offset, setOffset, limit, setLimit}) {

    const [sortData, setSortData] = useState([])
    const [isSorting, setIsSorting] = useState(true);
    const [showIcon, setShowIcon] = useState(false)

    const firstShow = data.slice(0,limit)

    return(
        <Style>
            <div className="container">
                <table>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th className="left">Name</th>
                            <th className="right">Price</th>
                            <th className="right">Market Cap</th>
                            <th className="right">VWAP(24HR)</th>
                            <th className="right">Supply</th>
                            <th className="right">Volume(24Hr)</th>
                            <th className="right">Change(24Hr)</th>
                        </tr>
                    </thead>
                    <CurrencyRow data={firstShow}/>
                </table>
                <ViewMore address={'assets'} data={data} setData={setData} limit={limit} setLimit={setLimit} offset={offset} setOffset={setOffset}/>
            </div>
        </Style>
    )
}