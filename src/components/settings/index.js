import { FaTimes, FaSortDown } from "react-icons/fa";
import { RiSettings3Fill, RiSettings4Fill } from "react-icons/ri";
import { useState, useEffect } from "react"
import Style from "./style";

export default function Settings(){
    const [showSetting, setShowSetting] = useState(false)

    useEffect(() => {
        if (showSetting) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [showSetting]);

    return(
        <Style>
            <i className="setting"><RiSettings3Fill size={16} onClick={() => setShowSetting(true)} /></i>
            {showSetting === true? 
                <div className="background">
                    <div className="moreInfo">
                        <div className="heade">
                            <div className="title">
                                <div className="icon">
                                    <i><RiSettings3Fill size={30} /></i>
                                    <i className="icons">
                                        <RiSettings4Fill />
                                        <RiSettings4Fill />
                                    </i>
                                </div>
                                <h3>Settings</h3>
                            </div>  
                            <i><FaTimes onClick={() => setShowSetting(false)}/></i>
                        </div>
                        <div className="body">
                            <div className="row">
                                <h4>Dark Theme</h4>
                                <div className="square"></div>
                            </div>
                            <div className="row">
                                <h4>Flash Price Indicators</h4>
                                <div className="square"></div>
                            </div>
                            <div className="row">
                                <h4>USD</h4>
                                <i><FaSortDown/></i>
                            </div>
                            <div className="row">
                                <h4>English</h4>
                                <i><FaSortDown/></i>
                            </div>
                        </div>
                    </div>
                </div>
            : null}
        </Style>
    )
}
