import { useEffect, useState } from "react";
import InfoSegment from "../../components/infoSegment";
import MainLayout from "../../components/layout/mainLayout";
import CurrencyTable from "../../components/table/coins/currencyTable";
import api from "../../ٖUtils/api"

export default function Home() {
    const [currency, setCurrency] = useState([])
    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(20);

    useEffect(() => { getApi()}, [currency, offset, limit] )
    async function getApi() {
      const response = await api.get('assets')
      setCurrency(response.data.data)
    }

    useEffect(function () {
        document.title = "CoinCap | Reliable";
    }, [])
    
    return (
        <MainLayout>
            <InfoSegment/>
            <CurrencyTable data={currency} setData={setCurrency} offset={offset} setOffset={setOffset} limit={limit} setLimit={setLimit}/>
        </MainLayout>
    )
}