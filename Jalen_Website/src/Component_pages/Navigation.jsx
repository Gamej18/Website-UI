import React from "react";
import { NavLink } from "react-router-dom";

function Navigation () {
    return (
        <div className="navigation">
            <div>
                <NavLink className="nav-link" to="/">
                    Home

                </NavLink>
                <NavLink className="nav-link" to="/about">
                    About
        
                </NavLink>
                <NavLink className="nav-link" to="/contact">
                    Contact
                </NavLink>
                <NavLink className="nav-link" to="/works">
                    Works
                </NavLink>
            </div>
        </div>
    )
}

export default Navigation;