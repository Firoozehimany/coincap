import { useState, useRef, useEffect } from "react";
import api from "../../ٖUtils/api"
import ClipLoader from "react-spinners/ClipLoader"
import Style from "./style";

export default function ShowSearchInput() {
    const [assetsValue, setAssetsValue] = useState([])
    const [exchangesValue, setExchangesValue] = useState([])
    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState(false)
    const ref = useRef(null)


    // useEffect(function () {
    //     getApi()
    // }, [])

    async function getApi(e) {
        setLoading(true)
        const assets = await api.get('assets', { params: { limit: 5, search: e.target.value } })
        setAssetsValue(assets.data.data);
        const exchange = await api.get('exchanges', { params: { limit: 5, search: e.target.value } });
        setExchangesValue(exchange.data.data);
        setLoading(false)
    }

    function handelOnChange(e) {
        getApi(e)
    }

    function renderAssets() {
        return assetsValue.map(function (item, id) {
            const { symbol, name } = item
            return (
                <a href="" key={id}>{name} ({symbol})</a>
            )
        })
    }

    function renderExchanges() {
        return exchangesValue.map(function (item, id) {
            const { name } = item
            return (
                <a href="" key={id}>{name}</a>
            )
        })
    }

    return (
        <Style>
            {loading === true ? <div className="loading">< ClipLoader size="20px" /></div> :
                <img className="searchIcon" src="/assets/images/search.svg" onClick={() => ref.current.focus()} />
            }

            <input ref={ref} name="search" type="text"
                onChange={handelOnChange} onBlur={() => setResult(true)} onFocus={() => setResult(false)} ></input>
                
            {result === false ?
                <div className="dropDown">
                    {assetsValue.length || exchangesValue.length > 0
                        ? <div className="show">
                            {assetsValue.length <= 0 ? <div>{ }</div>
                                : <div className="result"><h3>Assets</h3><div>{renderAssets()}</div></div>}
                            {exchangesValue.length <= 0 ? <div>{ }</div>
                                : <div className="result"><h3>Exchenge</h3><div>{renderExchanges()}</div></div>}
                        </div>
                        : null}
                </div>
                : result === true}
        </Style>
    )
}

