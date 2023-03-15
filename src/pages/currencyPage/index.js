import CurrencyInfo from "../../components/currency/currencyInfo";
import CurrencyHeaderInfo from "../../components/currency/currencyHeaderInfo";
import MarketTable from "../../components/table/market/marketTable";
import MainLayout from "../../components/layout/mainLayout";
import { setTitle } from "../../ٖUtils/setTitle";
import api from "../../ٖUtils/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CurrencyPage() {
    const [currencyData, setCurrencyData] = useState([]);
    const [currencyHistory, setCurrencyHistory] = useState([])
    const [changeInterval, setChangeInterval] = useState("m1")
    const [market, setMarket] = useState([])
    const [offset, setOffset] = useState(1);
    const [limit, setLimit] = useState(20);
    const [date, setDate] = useState([])
    const { id } = useParams();

    useEffect(() => { getDataApi() }, []);
    async function getDataApi() {
        const response = await api.get(`assets/${id}`);
        setCurrencyData(response.data.data);
    };

    useEffect(function () {
        setTitle(currencyData.name, currencyData.symbol);
    }, [currencyData]);

    useEffect(() => { getHistoryApi() }, [changeInterval])
    async function getHistoryApi() {
        const response = await api.get(`assets/${id}/history`, { params: { interval: `${changeInterval}` } })
        setCurrencyHistory(response.data.data)
        setDate(response.data.timestamp)
    }

    useEffect(() => { getApi() }, [offset, limit])
    async function getApi() {
        const response = await api.get(`assets/${id}/markets`)
        setMarket(response.data.data)
    };

    return (
        <MainLayout>
            <CurrencyHeaderInfo data={currencyData} />
            <CurrencyInfo data={currencyData} date={date} currencyHistory={currencyHistory} setCurrencyHistory={setCurrencyHistory} changeInterval={changeInterval} setChangeInterval={setChangeInterval} />
            <MarketTable marketData={market} setMarketData={setMarket} limit={limit} setLimit={setLimit} offset={offset} setOffset={setOffset}/>
        </MainLayout>
    )
}