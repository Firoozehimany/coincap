import { useEffect } from "react";
import Button from "../../components/button";
import InfoSegment from "../../components/infoSegment";
import MainLayout from "../../components/layout/mainLayout";
import CurrencyTable from "../../components/table/coins/currencyTable";
import Style from "./style"
export default function Home() {
    useEffect(function () {
        document.title = "CoinCap | Reliable";
    }, [])
    
    return (
        <MainLayout>
            <InfoSegment/>
            <CurrencyTable/>
            <Style>
                <div className="buttom"><Button text="View More" /></div>
            </Style>
        </MainLayout>
    )
}