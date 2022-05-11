import React from "react";
import "./style.css";
import logo from "../../assets/logo_white.png";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <nav className="nav-bar">
            <div className="nav-logo">
                <Link to="/">
                    <img src={logo} alt="DSTI" />
                </Link>
            </div>
            <div className="nav-menu">
                
            </div>
        </nav>
    );
}

export default Header;