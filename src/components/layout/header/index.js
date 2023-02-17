import Style from "./style";
import Button from "../../button"
import ShowSearchInput from "../../search";
import { Link } from "react-router-dom";
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
                            <ShowSearchInput/>
                            <img className="setting" src="/assets/images/setting.svg"/>
                            <Button text="Connect Wallet"/>
                        </div>
                    </div>
                </div>
            </div>
        </Style>
    )
}