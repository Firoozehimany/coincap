import { fullNum, twoDecimal } from "../../../ٖUtils/manageNum"
import moment from "moment"
import iconPicAddress from "../../../ٖUtils/iconPicAddress"
import Style from "./style"
export default function CurrencyDayInfo({ data, date, lowDayPrice, highDayPrice, average, change }) {
    const { symbol, name } = data
    
    return (
        <Style>
            <div className="info">
                <div className="nameInfo">
                    <img src={iconPicAddress(symbol)}/>
                    <div className="other">
                        <h2 className="name">{name} ({symbol})</h2>
                        <p className="date">{moment(date).format("DD MMMM YYYY")}</p>
                    </div>
                </div>
                <div className="priceInfo">
                    <div className="col">
                        <div className="high">
                            <h3 className="title">HIGH</h3>
                            <span className="price">{"$" + fullNum(highDayPrice)}</span>
                        </div>
                        <div className="low">
                            <h3 className="title">LOW</h3>
                            <span className="price">{"$" + fullNum(lowDayPrice)}</span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="average">
                            <h3 className="title">AVERAGE</h3>
                            <span className="price">{"$" + fullNum(average)}</span>
                        </div>
                        <div className="change">
                            <h3 className="title">CHANGE</h3>
                            <span style={{ color: change < 0 ? "#F44336" : "#18C683" }}>{twoDecimal(change) + "%"}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Style>
    )
}
