import { Link } from "react-router-dom"
import { abbreviateNum, twoDecimal } from "../../../../ٖUtils/manageNum"
import Style from "./style"
export default function ExchangeRow({exchange}) {
  
  function renderExchangeRow() {
    return exchange.map(function (item) {
      const { exchangeId, rank, name, tradingPairs, volumeUsd, percentTotalVolume, socket, } = item
      return (
        <tr key={exchangeId}>
          <td>{rank}</td>
          <td className="name">
            <Link to={`/exchanges/${exchangeId}`}>
              <p>{name}</p>
            </Link>
          </td>
          <td className="right">{tradingPairs}</td>
          <td className="right">BTC/USDT</td>
          <td className="right">{"$" + abbreviateNum(volumeUsd)}</td>
          <td className="right">{twoDecimal(percentTotalVolume) + "%"}</td>
          <td className="center">
            <div className="circle" style={{ background: socket === false ? "#F44336" : "#18C683" }}></div>
          </td>
        </tr>
      )
    })
  }

  return (
    <Style>
      {renderExchangeRow()}
    </Style>
  )
}

