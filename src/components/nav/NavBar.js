import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./NavBar.css";

export const NavBar = (props) => {
    const history = useHistory();
    return (
        <>
            <ul className="navbar">
                <li className="navbar__item active">
                    <Link className="navbar__link" to="/">NSS Kennels</Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/locations">Locations</Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/animals">Animals</Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/customers">Customers</Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/employees">Employees</Link>
                </li>
                <button id="logout_button" onClick={(e) => {
                        if(e.target.id === "logout_button"){
                            localStorage.removeItem("kennel_customer");
                            return history.push("/login")
                        } else {
                            return false;
                        }
                    }
                }>
                    Logout
                </button>
            </ul>
        </>
    );
};