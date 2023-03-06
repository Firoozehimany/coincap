import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import api from "../../../ٖUtils/api"

export default function ManageChart({timePeriod}){

    return(
       <div>{timePeriod}</div> 
    )

}