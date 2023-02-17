import Style from "./style"
import CurrencyRow from "../currencyRow"
import { Link } from "react-router-dom"
export default function CurrencyTable() {
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
                    <CurrencyRow/>
                </table>
            </div>
        </Style>
    )
}