import { useState ,useEffect } from "react";
import api from "../../ٖUtils/api"

export default function GetMoreInfo() {

    const [offset, setOffset] = useState = ([])

    useEffect (function(){
        moreCurrency()
    },[])

    async function moreCurrency() {
        const response = await api.get('assets', { params: { limit: 40, offset: 0 } })
        setOffset(response.data.data)
    }
    return (
        <div>{moreInfo}</div>
    )

}