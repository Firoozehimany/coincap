import Style from "./style"
import MarketRow from "../marketRow"
export default function MarketTable() {
    return(
        <Style>
            <div className="container">
                <table>
                    <thead>
                        <tr>
                            <th className="left" >Exchange</th>
                            <th className="right">Pair</th>
                            <th className="right">Price</th>
                            <th className="right">Volume(24Hr)</th>
                            <th className="right">Volume(%)</th>
                            <th className="center">Status</th>
                        </tr>
                    </thead>
                    <MarketRow/>
                </table>
            </div>
        </Style>
    )
}