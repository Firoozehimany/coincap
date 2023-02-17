import { useEffect } from "react";
import Button from "../../components/button";
import InfoSegment from "../../components/infoSegment";
import MainLayout from "../../components/layout/mainLayout";
import ExchangeTable from "../../components/table/exchanges/exchangeTable";
import Style from "./style"
import setTitle from "../../ٖUtils/setTitle"

export default function Exchanges() {
    useEffect(function () {
        setTitle("Exchanges")
    }, [])

    return (
        <MainLayout>
            <InfoSegment/>
            <ExchangeTable/>
            <Style>
                <div className="buttom"><Button text="View More" /></div>
            </Style>
        </MainLayout>
    )
}