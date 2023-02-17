import { Fragment } from "react"
import Header from "../header"
import Footer from "../footer"
export default function MainLayout(props){
    const {children} = props
    return(
        <Fragment>
            <Header></Header>
            {children}
            <Footer></Footer>
        </Fragment>
    )
}