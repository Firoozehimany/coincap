import { useEffect } from "react";
import Button from "../../components/button";
import InfoSegment from "../../components/infoSegment";
import MainLayout from "../../components/layout/mainLayout";
import ExchangeTable from "../../components/table/exchanges/exchangeTable";
import { setTitle } from "../../ٖUtils/setTitle";

export default function Exchanges() {
    useEffect(function () {
        setTitle("Exchanges")
    }, [])
    return (
        <MainLayout>
            <InfoSegment/>
            <ExchangeTable/>
        </MainLayout>
    )
}