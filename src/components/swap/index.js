import { FaChevronDown } from "react-icons/fa";
import Style from "./style"
export default function Swap() {
    return (
        <Style>
            <div className="wrapper">
                <div className="title">
                    <h3>Swap</h3>
                    <img className="setting" src="/assets/images/setting.svg" />
                </div>
                <div className="inputBox">
                    <label>You Sell</label>
                    <div className="info">
                        <input type="text" placeholder="0" name="youSell" ></input>
                        <div>
                            <img className="logo" src="https://assets.coincap.io/assets/icons/eth@2x.png"/>
                            <span>ETH</span>
                            <i className="icon"><FaChevronDown size={16} /></i>
                        </div>
                    </div>
                </div>
                <img className="shuffle" src="/assets/images/shuffle.svg" />
                <div className="inputBox">
                    <label>You Get</label>
                    <div className="info">
                        <input type="text" placeholder="0" name="youSell" ></input>
                        <div>
                            <span>Select a token</span>
                            <i className="icon"><FaChevronDown size={16} /></i>
                        </div>
                    </div>
                </div>
                <button>Connect Wallet</button>

            </div>
        </Style>
    )
}