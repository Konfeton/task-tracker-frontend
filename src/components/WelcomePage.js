import React from 'react';
import {Link, Navigate} from "react-router-dom";

function WelcomePage(props) {

    let logged = false;

    function isLogged(){
        return logged;
    }


    return (
        <Link to={"/tracks"}>
            See tracks
        </Link>
    );
}

export default WelcomePage;