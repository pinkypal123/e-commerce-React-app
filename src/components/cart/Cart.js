import { useContext } from "react"
import { dataContext } from "../context/Context";


import Navbar from "../navbar/Navbar";

export default function Cart(){
   const cartValue=useContext(dataContext)
    console.log(cartValue)
    return(
        <>
        <Navbar/>
<div>hello</div>
        </>
    )
}