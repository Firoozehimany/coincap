import { Link } from "react-router-dom"
import { abbreviateNum, fullNum, twoDecimal } from "../../../../ٖUtils/manageNum"
import iconPicAddress from "../../../../ٖUtils/iconPicAddress"
import Style from "./style"

export default function CurrencyRow({data}) {

  function renderCurrencyRow() {
    return data.map(function (item) {
      const { id, rank, name, symbol, priceUsd, marketCapUsd, vwap24Hr, supply, volumeUsd24Hr, changePercent24Hr, } = item
      return (
        <tr key={id}>
          <td>{rank}</td>
          <td className="icon">
            <Link to={`/assets/${id}`}>
              <img src={iconPicAddress(symbol)} />
              <div>
                <p className="name">{name}</p>
                <p className="symbol">{symbol}</p>
              </div>
            </Link>
          </td>
          <td className="right">{data.length >= 0 ? "$" + fullNum(priceUsd) : " - "}</td>
          <td className="right">{"$" + abbreviateNum(marketCapUsd)}</td>
          <td className="right">{"$" + fullNum(vwap24Hr)}</td>
          <td className="right">{abbreviateNum(supply)}</td>
          <td className="right">{"$" + abbreviateNum(volumeUsd24Hr)}</td>
          <td className="right" style={{ color: changePercent24Hr < 0 ? "#F44336" : "#18C683" }}>{data.length >= 0 ? twoDecimal(changePercent24Hr) + "%" : " - "}</td>
        </tr>
      )
    })
  }

  return (
    <Style>
      {renderCurrencyRow()}
    </Style>
  )
}

