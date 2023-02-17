import { useEffect, useState } from "react";
import { useParams } from "react-router";
import api from "../../../ٖUtils/api"
import Button from "../../button";
import { Link } from "react-router-dom";
import { fullNum, twoDecimal, abbreviateNum } from "../../../ٖUtils/manageNum";
import Style from "./style";

export default function CurrencyHeaderInfo() {
    const [currencyInfo, setCurrencyInfo] = useState([])
    const { id } = useParams()

    useEffect(function () {
        getApi()
    }, [])

    async function getApi() {
        const response = await api.get('assets', { params: { ids: `${id}` } })
        setCurrencyInfo(response.data.data)
    }

    function renderCurrencyInfo() {
        return currencyInfo.map(function (item) {
            const { id, rank, name, symbol, priceUsd, changePercent24Hr, marketCapUsd, volumeUsd24Hr, supply, website, explorer } = item
            return (
                <div className="background" key={id}>
                    <div className="container">
                        <div className="currencyinfo">
                            <div className="basicInfo">
                                <div className="flag">
                                    <div className="shape">
                                        <h2>{rank}</h2>
                                        <p>RANK</p>
                                    </div>
                                </div>
                                <div className="currency">
                                    <div className="currencyName">
                                        <h1>{name} ({symbol})</h1>
                                    </div>
                                    <div className="changePercent">
                                        <h2>{currencyInfo.length >= 0 ? "$" + fullNum(priceUsd) : " - "}</h2>
                                        <span style={{ color: changePercent24Hr < 0 ? "#EF9A9A" : "#18C683" }}>{currencyInfo.length >= 0 ? twoDecimal(changePercent24Hr) + "%" : " - "}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="moreInfo">
                                <div className="col">
                                    <div className="info">
                                        <p>Market Cap</p>
                                        <h3>{"$" + abbreviateNum(marketCapUsd)}</h3>
                                    </div>
                                    <Link to={""}>
                                        <Button text="Website"></Button>
                                    </Link>
                                </div>
                                <div className="col">
                                    <div className="info">
                                        <p>Volume (24Hr)</p>
                                        <h3>{"$" + abbreviateNum(volumeUsd24Hr)}</h3>
                                    </div>
                                    <Link to={""}>
                                        <Button text="Explorer"></Button>
                                    </Link>
                                </div>
                                <div className="col">
                                    <div className="info">
                                        <p>Supply</p>
                                        <h3>{abbreviateNum(supply)} {symbol}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }

    return (
        <Style>
            {renderCurrencyInfo()}
        </Style>
    )
}