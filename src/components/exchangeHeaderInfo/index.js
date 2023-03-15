import Button from "../button";
import { fullNum } from "../../ٖUtils/manageNum";
import Style from "./style";

export default function ExchangeHeaderInfo({ data }) {
    const { exchangeId, rank, name, tradingPairs, volumeUsd, exchangeUrl } = data
    return (
        <Style>
            <div className="background" key={exchangeId}>
                <div className="container">
                    <div className="exchangeinfo">
                        <div className="basicInfo">
                            <div className="flag">
                                <div className="shape">
                                    <h2>{rank}</h2>
                                    <p>RANK</p>
                                </div>
                            </div>
                            <div className="exchange">
                                <div className="exchangeName">
                                    <h1>{name}</h1>
                                </div>
                                <div className="pairs">
                                    <h2>{tradingPairs}</h2>
                                    <span>Pairs</span>
                                </div>
                            </div>
                        </div>
                        <div className="moreInfo">
                            <div className="col">
                                <div className="info">
                                    <p>Volume (24Hr)</p>
                                    <h3>{"$" + fullNum(volumeUsd)}</h3>
                                </div>
                                <Button text="Website" link={exchangeUrl}></Button>
                            </div>
                            <div className="col">
                                <div className="info">
                                    <p>Top Pair</p>
                                    <h3>BTC/USDT</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Style>
    )
}