import { useEffect, useState } from "react";
import Button from "../../components/button";
import InfoSegment from "../../components/infoSegment";
import MainLayout from "../../components/layout/mainLayout";
import ExchangeTable from "../../components/table/exchanges/exchangeTable";
import { setTitle } from "../../ٖUtils/setTitle";
import api from "../../ٖUtils/api";

export default function Exchanges() {
    const [exchange, setExchange] = useState([])
    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(20);

    useEffect(() => { getApi() }, [offset, limit])
    async function getApi(){
        const response = await api.get('exchanges')
        setExchange(response.data.data)
    }

    useEffect(function () {
        setTitle("Exchanges")
    }, [])
    return (
        <MainLayout>
            <InfoSegment/>
            <ExchangeTable data={exchange} setData={setExchange} offset={offset} setOffset={setOffset} limit={limit} setLimit={setLimit}/>
        </MainLayout>
    )
}