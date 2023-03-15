import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import api from "../../ٖUtils/api"
import MainLayout from "../../components/layout/mainLayout"
import ExchangeHeaderInfo from "../../components/exchangeHeaderInfo"
import ExchangeTable from "../../components/table/exchanges/exchangeTable";

export default function ExchangePage() {
    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(20);
    const [exchangeData, setExchangeData] = useState([])
    const [exchange, setExchange] = useState([])
    const { id } = useParams()

    useEffect(() => { getApi() }, [])
    async function getApi() {
        const response = await api.get(`exchanges/${id}`)
        setExchangeData(response.data.data)
    }

    useEffect(() => { getExchangeApi() }, [offset, limit])
    async function getExchangeApi() {
        const response = await api.get(`exchanges`)
        setExchange(response.data.data)
    }

    return (
        <MainLayout>
            <ExchangeHeaderInfo data={exchangeData} />
            <ExchangeTable data={exchange} setData={setExchange} offset={offset} setOffset={setOffset} limit={limit} setLimit={setLimit}/>
        </MainLayout>
    )
}