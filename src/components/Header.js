import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = ()=>{
    const [btnName,setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    return (
        <div className="flex justify-between bg-pink-50 shadow-lg m-2">
            <div className="logo-container">
                <img className="w-40" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4 items-center">
                    <li className="px-4">
                        {/* ONLINE & OFFLINE FEATURE */}
                        Online Status : {onlineStatus === true ?  "🟢" :"🔴"}
                    </li>
                    <li className="px-4">
                    <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="px-4">
                    <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4">
                    <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4">Cart</li>
                    {/* TOGGLE FUNCTIONALITY OF LOGIN / LOGOUT BUTTON */}
                    <button className="login" onClick={()=>{btnName === "Login" ? setBtnName("Logout"):setBtnName("Login")}}>{btnName}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;