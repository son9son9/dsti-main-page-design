import React from "react";
import "./style.css";
import logo from "../../assets/logo_navy.png";
import { Link } from "react-router-dom";
import NavButton from "../NavButton";

const Header = () => {
    return(
        <nav className="nav-bar">
            <div className="nav-logo">
                <Link to="/">
                    <img src={logo} alt="DSTI" />
                </Link>
            </div>
            <NavButton />
        </nav>
    );
}

export default Header;