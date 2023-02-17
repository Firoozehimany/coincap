import { useEffect, useState, } from "react"
import api from "../../../../ٖUtils/api"
import axios from "axios"
import { Link, useParams } from "react-router-dom"
import { abbreviateNum, twoDecimal } from "../../../../ٖUtils/manageNum"
import Style from "./style"
export default function ExchangeRow() {
  const [exchange, setExchange] = useState([])
  const [market, setmarket] = useState([])
  const {baseSymbol, quoteSymbol} = useParams()


  useEffect(function () {
    getApi()
  }, [])

  async function getApi() {
    const eResponse = await api.get('exchanges', { params: { limit: 20 } })
    const mResponse = await api.get('markets', { params: { limit: 20 } })
    setExchange(eResponse.data.data)
    setmarket(mResponse.data.data)
    // setResponse(()=>{
    //   return [...eResponse.data.data , ...mResponse.data.data]
    // })
  }

  function renderCurrency() {
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
          <td className="right">{{baseSymbol}/{quoteSymbol}}</td>
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
      {renderCurrency()}
    </Style>
  )
}

