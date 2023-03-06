import CurrencyHeaderInfo from "../../components/currency/currencyHeaderInfo";
import MarketTable from "../../components/table/market/marketTable";
import Button from "../../components/button";
import MainLayout from "../../components/layout/mainLayout";
import setTitle from "../../ٖUtils/setTitle";
import api from "../../ٖUtils/api"
import CurrencyInfo from "../../components/currency/currencyInfo";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Style from "./style"

export default function CurrencyPage() {
    const [currencyData, setCurrencyData] = useState({})
    const { id } = useParams()

    useEffect(() => { getDataApi() }, [currencyData])
    async function getDataApi() {
        const response = await api.get(`assets/${id}`)
        setCurrencyData(response.data.data)
    }

    useEffect(function () {
        setTitle(currencyData.name, currencyData.symbol)
    }, [currencyData])

    return (
        <MainLayout>
            <CurrencyHeaderInfo data={currencyData} />
            <CurrencyInfo data={currencyData} />
            <MarketTable />
            <Style>
            </Style>
        </MainLayout>
    )
}