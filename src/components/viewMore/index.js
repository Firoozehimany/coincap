import Button from "../button"
import ClipLoader from "react-spinners/ClipLoader"
import { useState } from "react"
import api from "../../ٖUtils/api"
import Style from "./style"

export default function ViewMore({address, data, setData, limit, setLimit, offset, setOffset}){

    const [loading, setLoading] = useState(false)
    async function viewMore() {
        setLoading(true)
        const newOffset = offset + 20;
        const newLimit = limit + 20;
        const response = await api.get(`${address}`, { params: { limit: newLimit, offset: newOffset } })
        const newData = response.data.data;
        setData([...data, ...newData]);
        setOffset(newOffset);
        setLimit(newLimit);
        setLoading(false)
    };

    return(
        <Style>
            {data.length > limit ? <div className="buttom"><Button text= {loading === true ? < ClipLoader size="20px" color="#fff" /> : "View More"} click={viewMore}/></div> : <div className="empty"></div> }
        </Style>
    )
}