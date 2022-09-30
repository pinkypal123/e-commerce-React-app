import { Navigate, useNavigate } from "react-router-dom";
import './Navbar.css'
export default function Navbar(){
    const navigate=useNavigate()
    const cartNavigate=()=>{
        navigate('/cart')
    }
    const homeNav=()=>{
        navigate('/')
    }
    return(
        <>
       <div className="navbar">
            
            <div className="logo" onClick={homeNav}>BUY</div>
            <div className="cartIcon" onClick={cartNavigate}>Cart</div>
        </div>
        </>
    )
}