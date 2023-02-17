import Style from "./style"
import CurrencyHeaderInfo from "../../components/currency/currencyHeaderInfo";
import CurrencyDayInfo from "../../components/currency/currencyDayInfo";
import MarketTable from "../../components/table/market/marketTable";
import Button from "../../components/button";
import MainLayout from "../../components/layout/mainLayout";
import { useEffect } from "react";
import setTitle from "../../ٖUtils/setTitle";
import Chart from "../../components/currency/currencyChart";
import CurrencyInfo from "../../components/currency/currencyInfo";
export default function CurrencyPage(){
    useEffect(function(){
        setTitle()
    },[])
    return(
       <MainLayout>
            <CurrencyHeaderInfo/>
            <CurrencyInfo/>
            {/* <CurrencyDayInfo/> */}
            <Chart/>
            <MarketTable/>
            <Style>
                <div className="buttom"><Button text="View More" /></div>
            </Style>
       </MainLayout>
    )
}