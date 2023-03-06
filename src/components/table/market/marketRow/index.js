import { Link } from "react-router-dom"
import { unDecimalfullNum, twoDecimal, fullNum } from "../../../../ٖUtils/manageNum"
import Style from "./style"
export default function MarketRow({ market }) {

  function renderRow() {
    return market.map(function(item, index) {
      const { exchangeId, baseSymbol, quoteSymbol, priceUsd, volumeUsd24Hr, volumePercent, tradesCount24Hr } = item
      return (
        <tr key={index}>
          <td className="name">
            <Link to={`/exchanges/${exchangeId}`}>
              <p>{exchangeId}</p>
            </Link>
          </td>
          <td className="right">{baseSymbol}/{quoteSymbol}</td>
          <td className="right">{"$" + fullNum(priceUsd)}</td>
          <td className="right">{"$" + unDecimalfullNum(volumeUsd24Hr)}</td>
          <td className="right">{twoDecimal(volumePercent) + "%"}</td>
          <td className="center">
            <div className="circle" style={{ background: tradesCount24Hr === null ? "#ffeb3b" : "#18C683" }}></div>
          </td>
        </tr>
      )
    })
  }
  return (
    <Style>
      {renderRow()}
    </Style>)
}
