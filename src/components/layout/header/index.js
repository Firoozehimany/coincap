import Style from "./style";
import Button from "../../button"
import Search from "../../search";
import { Link } from "react-router-dom";
import Settings from "../../settings"
import { useState } from "react"

export default function Header() {
    return (
        <Style>
            <div className="header">
                <div className="container">
                    <div className="headBar">
                        <div className="menu">
                            <Link to={"/"}>Coins</Link>
                            <Link to={"/exchanges"}>Exchanges</Link>
                            <Link>Swap</Link>
                        </div>
                        <div className="logo">
                            <Link to={"/"}><img src="/assets/images/logo.svg"/></Link>
                        </div>
                        <div className="info">
                            <Search/>
                            <Settings/>
                            <Button text="Connect Wallet"/>
                        </div>
                    </div>
                </div>
            </div>
        </Style>
    )
}