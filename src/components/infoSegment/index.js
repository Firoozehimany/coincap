import { data } from "./data"
import Style from "./style"
export default function InfoSegment() {
    function itemInfo() {
        return data.map(function (item, index) {
            const { label, value } = item
            return (
                <div className="info" key={index}>
                    <p className="label">{label}</p>
                    <p className="value">{value}</p>
                </div>
            )
        })
    }
    return (
        <Style>
            <div className="container">
                <div className="segment">
                    {itemInfo()}
                </div>
            </div>
        </Style>
    )
}