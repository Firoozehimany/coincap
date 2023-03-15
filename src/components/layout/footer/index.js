import Style from "./style";
export default function Footer() {
    return (
        <Style>
            <div className="footer">
                <div className="container">
                    <div className="columns">
                        <div className="col">
                            <h3 className="title">COINCAP.IO</h3>
                            <h3><a href="#">Methodology</a></h3>
                            <h3><a href="#">Support</a></h3>
                            <h3><a href="#">Our API</a></h3>
                            <h3><a href="#">Rate Comparison</a></h3>
                            <h3><a href="#">Careers</a></h3>
                        </div>
                        <div className="col">
                            <h3 className="title">LEGALS</h3>
                            <h3><a href="#">Terms of Service</a></h3>
                            <h3><a href="#">Privacy Poacy</a></h3>
                            <h3 className="title">DISCLAIMER</h3>
                            <p>Neither ShapeShift AG nor CoinCap are in any way associated with CoinMarketCap, LLC or any of its goods and services.</p>
                        </div>
                        <div className="col">
                            <h3 className="title">FOLLOW US</h3>
                            <a href="#"><img className="icon" src="/assets/images/twitter.svg" /></a>
                            <a href="#"><img className="icon" src="/assets/images/facebook.svg" /></a>
                        </div>
                        <div className="col">
                            <h3 className="title">COINCAP APP AVAILABLE ON</h3>
                            <a href="#"><img className="store" src="/assets/images/google_play.svg" /></a>
                            <a href="#"><img className="store" src="/assets/images/apple_store.svg" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </Style>
    )
}