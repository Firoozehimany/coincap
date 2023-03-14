import { useState, useRef, useEffect } from "react";
import api from "../../ٖUtils/api"
import ClipLoader from "react-spinners/ClipLoader"
import { Link } from "react-router-dom"
import { FaSearch } from "react-icons/fa";
import Style from "./style";

export default function ShowSearchInput() {
    const [assetsValue, setAssetsValue] = useState([])
    const [exchangesValue, setExchangesValue] = useState([])
    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState(false)
    const inputRef = useRef(null)

    async function handelOnChange(e) {
        setLoading(true)
        const assets = await api.get('assets', { params: { limit: 5, search: e.target.value } })
        setAssetsValue(assets.data.data);
        const exchange = await api.get('exchanges');
        setExchangesValue(exchange.data.data);
        setLoading(false)
    }

    function handelLink(id) {
        window.location.href = `/assets/${id}`;
    }

    function renderAssets() {
        return assetsValue.map(function (item) {
            const { symbol, name, id } = item
            return (
                <Link key={id} to="#" onClick={() => handelLink(id)}>
                    <span>{name} ({symbol})</span>
                </Link>
            )
        })
    }

    function renderExchanges() {
        const filteredExchanges = exchangesValue.filter(item => item.name.includes(inputRef.current.value));
        return filteredExchanges.slice(0,5).map(item => {
            const { name, exchangeId } = item
            return (
                <Link key={exchangeId} to={`/exchange/${exchangeId}`}>
                    <span>{name}</span>
                </Link>
            )
        })
      }


    function handleBlur(e) {
        const current = e.currentTarget;
        setTimeout(() => {
            if (!current.contains(document.activeElement)) {
                setResult(false);
            }
        }, 0);
    }

    return (
        <Style>
            {loading === true ? <div className="loading">< ClipLoader size="20px" /></div> :
                <i className="searchIcon" onClick={() => inputRef.current.focus()}><FaSearch size={14} /></i>
            }
            <input ref={inputRef} name="search" type="text"
                onChange={handelOnChange} onFocus={() => setResult(true)} onBlur={handleBlur} ></input>
            {inputRef.current && inputRef.current.value !== "" ?
                <div>
                    {result === true ?
                        <div className="dropDown">
                            {assetsValue.length || exchangesValue.length > 0
                                ? <div className="show">
                                    {assetsValue.length >= 0 &&
                                        <div className="result">
                                            <h3>Assets</h3>
                                            <div>{renderAssets()}</div>
                                        </div>}
                                    {exchangesValue.length >= 0 &&
                                        <div className="result">
                                            <h3>Exchenge</h3>
                                            <div>{renderExchanges()}</div>
                                        </div>}
                                </div>
                                : null}
                        </div>
                        : result === false}
                </div>
                : null}
        </Style>
    )
}