import Button from "../../button";
import { Link } from "react-router-dom";
import { FaCaretUp, FaCaretDown } from "react-icons/fa"
import { fullNum, twoDecimal, abbreviateNum } from "../../../ٖUtils/manageNum";
import Style from "./style";

export default function CurrencyHeaderInfo({data}) {
    const { id, rank, name, symbol, priceUsd, changePercent24Hr, marketCapUsd, volumeUsd24Hr, supply, explorer } = data
    return (
        <Style>
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
                                <h2>{fullNum(priceUsd)}</h2>
                                <span style={{ color: changePercent24Hr < 0 ? "#EF9A9A" : "#18C683" }}>{twoDecimal(changePercent24Hr) + "%"}</span>
                                {changePercent24Hr < 0 ? <FaCaretDown size={18} color={"#EF9A9A"}/> :<FaCaretUp size={18} color={"#18C683"}/> }
                            </div>
                        </div>
                    </div>
                    <div className="moreInfo">
                        <div className="col">
                            <div className="info">
                                <p>Market Cap</p>
                                <h3>{"$" + abbreviateNum(marketCapUsd)}</h3>
                            </div>
                            <Button text="Website" link={explorer}></Button>
                        </div>
                        <div className="col">
                            <div className="info">
                                <p>Volume (24Hr)</p>
                                <h3>{"$" + abbreviateNum(volumeUsd24Hr)}</h3>
                            </div>
                            <Button text="Explorer" link={explorer}></Button>
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
        </Style>
    )
}