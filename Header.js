import { useState } from "react";
import { Link,Outlet } from "react-router-dom";

const Header = () => {
    const [btnName, setbtnName] = useState("login");
    return(
        <div className= "flex m-4 justify-between">
            <div className="flex ">
                <img className="w-20 h-25" src="https://cdn.dribbble.com/userupload/10755916/file/original-e6113d034c15311d1f20642a8e570356.jpg"></img>
            </div>
            <div className="flex">
                <ul className="flex items-center space-x-4 ">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="flex " onClick={() =>
                     btnName === "login" 
                     ?setbtnName("logout") 
                     : setbtnName("login")
                    }>{btnName}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;