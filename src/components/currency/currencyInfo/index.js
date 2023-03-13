import CurrencyDayInfo from "../currencyDayInfo";
import Chart from "../currencyChart";
import Swap from "../../swap"
import { useEffect, useState, useRef } from "react"
import { useParams } from "react-router-dom"
import moment from "moment";
import api from "../../../ٖUtils/api"
import Style from "./style";

export default function CurrencyInfo({ data, date, currencyHistory, changeInterval, setChangeInterval }) {

    const buttonsRef = {
        "1d": useRef(null), "1w": useRef(null), "1m": useRef(null), "3m": useRef(null), "6m": useRef(null), "1y": useRef(null), "all": useRef(null),
    };

    let briefing = [];
    for (let i = 0; i < currencyHistory.length; i += 5) {
        const currentValue = currencyHistory[i];
        briefing.push(currentValue);
    }
    
    const price = briefing.map(item => item.priceUsd)
    const lowDayPrice = Math.min(...price)
    const highDayPrice = Math.max(...price)
    const average = (lowDayPrice + highDayPrice) / 2
    const change = ((price.slice(-1)) - average) * 100 / average

    function manageTime(time) {
        if (changeInterval === "m1" || changeInterval === "m15") {
            return moment(time).format("hA")
        } else if (changeInterval === "h1" || changeInterval === "h2" || changeInterval === "h6") {
            return moment(time).format("MMM D")
        } else if (changeInterval === "h12" || changeInterval === "d1") {
            return moment(time).format("MMM YYYY")
        }
    }

    const time = briefing.map(item => item.time)
    const timeSheet = briefing.map(item => manageTime(item.time))

    function changeChart(interval, buttonId) {
        setChangeInterval(interval);
        for (const key in buttonsRef) {
            buttonsRef[key].current.classList.remove("click");
        };
        buttonsRef[buttonId].current.classList.add("click");
    }

    return (
        <Style>
            <div className="container">
                <div className="mainInfo">
                    <div className="currencyInfo">
                        <CurrencyDayInfo data={data} date={date} lowDayPrice={lowDayPrice} highDayPrice={highDayPrice} average={average} change={change} />
                        <Chart price={price} time={time} change={change} timeSheet={timeSheet} />
                        <div className="manageChart">
                            <button className="click" ref={buttonsRef["1d"]} onClick={() => changeChart("m1", "1d")}>1D</button>
                            <button ref={buttonsRef["1w"]} onClick={() => changeChart("m15", "1w")}>1W</button>
                            <button ref={buttonsRef["1m"]} onClick={() => changeChart("h1", "1m")}>1M</button>
                            <button ref={buttonsRef["3m"]} onClick={() => changeChart("h2", "3m")}>3M</button>
                            <button ref={buttonsRef["6m"]} onClick={() => changeChart("h6", "6m")}>6M</button>
                            <button ref={buttonsRef["1y"]} onClick={() => changeChart("h12", "1y")}>1Y</button>
                            <button ref={buttonsRef["all"]} onClick={() => changeChart("d1", "all")}>ALL</button>
                        </div>
                    </div>
                    <Swap />
                </div>
            </div>
        </Style>
    )
}