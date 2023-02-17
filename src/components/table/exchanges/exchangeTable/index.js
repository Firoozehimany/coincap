import Style from "./style"
import ExchangeRow from "../exchangeRow"
export default function ExchangeTable() {
    return(
        <Style>
            <div className="container">
                <table>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th className="left">Name</th>
                            <th className="right">Trading Pairs</th>
                            <th className="right">Top Pair</th>
                            <th className="right">Volume(24Hr)</th>
                            <th className="right">Total(%)</th>
                            <th className="center">Status</th>
                        </tr>
                    </thead>
                    <ExchangeRow/>
                </table>
            </div>
        </Style>
    )
}