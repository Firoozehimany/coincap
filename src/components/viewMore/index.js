import { useState ,useEffect } from "react";

export default function moreInfo() {
    const [changeOffset, setChangeOffset] = useState()
    const [showButton, setShowButton] = useState(true)

    setShowButton(true)
    return (
        <div>{moreInfo}</div>
    )
}