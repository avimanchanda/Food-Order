import {image_url} from "../../utils/constants"
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";

const Header=()=>{
    const [Btnname, setBtnname]=useState("Login");

    const onlinestatus=useOnlineStatus();

    const {loggedInUser}=useContext(UserContext);
    console.log(loggedInUser)

    //Subsrcibig to store using Selector

    const cartItems=useSelector((store)=>store.cart.items);

    return(
        <div className="header-section flex justify-between bg-pink-100 shadow-lg">
            <div className="logo-container">
                <img  className="logo-image w-24" src={image_url} alt=""></img>
            </div>

            <div className="nav-items flex items-center">
            <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status: {onlinestatus ? "✅" : "🔴"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us </Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4 font-bold text-xl">
                    <Link to="/cart">Cart- ({cartItems.length} Items)</Link></li>
                    <button onClick={()=>{
                        if(Btnname=="Login")
                        {
                            setBtnname("Logout");
                        }
                        else{
                            setBtnname("Login");
                        }
                    }} className="login-btn">{Btnname}</button>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;