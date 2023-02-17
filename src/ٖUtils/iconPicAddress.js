// export default function IconPicAddress(props) {
//     const { iconPic } = props
//     return (
//         <img src={`https://assets.coincap.io/assets/icons/${iconPic.toLowerCase()}@2x.png`}/>
//         )
// }

export default function iconPicAddress(params){
    const iconPic = `${params}`;
    const address = `https://assets.coincap.io/assets/icons/${iconPic.toLowerCase()}@2x.png`
    return address;
}