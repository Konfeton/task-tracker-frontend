import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import LogInPage from "../components/users/LogInPage";
 function Navbar() {
    const BASE_URL = global.config.BASE_URL;

    function handle(){
        axios.post(BASE_URL + "/logout", {}, {withCredentials:true, credentials: 'include'})
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        Main menu
                    </Link>

                    <Link className="btn btn-outline-light" to="/register">
                        Register
                    </Link>

                    <Link className="btn btn-outline-light" to="/login">
                        Login
                    </Link>
                    <Link className="btn btn-outline-light" to="/" onClick={handle}>
                        Logout
                    </Link>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;