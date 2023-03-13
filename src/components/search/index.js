import ClipLoader from "react-spinners/ClipLoader"
import { FaSearch } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom"
import api from "../../ٖUtils/api"
import Style from "./style";


export default function Search() {

    const [assetsValue, setAssetsValue] = useState([])
    const [loading, setLoading] = useState(false)
    const [showInput, setShowInput] = useState(false)
    const [result, setResult] = useState(false)
    const inputRef = useRef(null);

    useEffect(() => {
        if (showInput && inputRef.current) {
            inputRef.current.focus();
        }
    }, [showInput]);

    async function handelOnChange(e) {
        setLoading(true)
        const assets = await api.get('assets', { params: { limit: 5, search: e.target.value } })
        setAssetsValue(assets.data.data);
        setLoading(false)
        setResult(true)
    }

    function handelSearchIcon() {
        setShowInput(!showInput);
    }

    function handelLink(id) {
        window.location.href = `/assets/${id}`;
    }

    function renderSearch() {
        return assetsValue.map(function (item) {
            const { symbol, name, id } = item
            return (
                <Link key={id} to="#" onClick={() => handelLink(id)}>
                    <span>{name} ({symbol})</span>
                </Link>
            )
        })
    }

    return (
        <Style>
             {loading === true ? <div className="loading">< ClipLoader size="20px" /></div> :
                <i className="searchIcon"><FaSearch size={14} onClick={handelSearchIcon} /></i>
            }
            {showInput && (
                <input ref={inputRef} name="search" type="text" onChange={handelOnChange}/>
            )}
            {inputRef.current && inputRef.current.value !== "" ?
                <div className="dropDown">
                    {result === true && (
                        <div className="show">
                            <h3>Assets</h3>
                            <div>{renderSearch()}</div>
                        </div>
                    )}
                </div>
                : null}
        </Style>
    )
}

