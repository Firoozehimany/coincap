import Button from "../button"
import { useState } from "react"
import api from "../../ٖUtils/api"
import Style from "./style"

export default function ViewMore({address, data, setData, limit, setLimit, offset, setOffset}){

    async function viewMore() {
        const newOffset = offset + 20;
        const newLimit = limit + 20;
        const response = await api.get(`${address}`, { params: { limit: newLimit, offset: newOffset } })
        const newData = response.data.data;
        setData([...data, ...newData]);
        setOffset(newOffset);
        setLimit(newLimit);
    };
    return(
        <Style>
            {data.length >= limit ? <div className="buttom"><Button text="View More" click={viewMore}/></div> : <div className="empty"></div> }
        </Style>
        )
}