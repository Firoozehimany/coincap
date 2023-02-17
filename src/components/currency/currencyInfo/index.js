import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../../ٖUtils/api"
import Style from "./style";
import moment from "moment";
import CurrencyDayInfo from "../currencyDayInfo";

export default function CurrencyInfo() {
    const [currencyData, setCurrencyData] = useState([])
    const [currencyHistory, setCurrencyHistory] = useState([])
    const [dayDate, setDayDate] = useState([])
    const { id } = useParams()

    useEffect(() => { getDataApi() }, [])
    async function getDataApi() {
        const response = await api.get('assets', { params: { ids: `${id}` } })
        setCurrencyData(response.data.data)
    }

    useEffect(() => { getHistoryApi() }, [])
    async function getHistoryApi() {
        const response = await api.get(`assets/${id}/history`, { params: { interval: "m1" } })
        setCurrencyHistory(response.data.data)
        setDayDate(response.data)
    }

    const dayPrice = currencyHistory.map(item => item.priceUsd)
    const lowDayPrice = Math.min(...dayPrice)
    const highDayPrice = Math.max(...dayPrice)
    const average = (lowDayPrice + highDayPrice) / 2
    const lastPrice = dayPrice.slice(-1)
    const change = ((lastPrice - average) * 100) / average
    const date = dayDate.timestamp

    const name = currencyData.map(item => item.name)
    const symbol = currencyData.map(item => item.symbol)
    // const name = ((currencyData[0].name))
    // const symbol = (currencyData[0].symbol)

    return (
        <Style>
            <CurrencyDayInfo name={name} symbol={symbol} date={date} lowDayPrice={lowDayPrice} highDayPrice={highDayPrice} average={average} change={change} />
        </Style>
    )
}