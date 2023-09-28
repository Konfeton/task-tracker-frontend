import React from 'react';
import {Link, Navigate} from "react-router-dom";

function WelcomePage(props) {

    let logged = false;

    function isLogged(){
        return logged;
    }


    return (
        <div>


        <div>
            <div className="mt-5 pt-5 row  d-inline-block justify-content-between">
                <div className="">
                    <Link to={"/notes/create"} className="btn btn-primary mb-3 me-5">Create note</Link>

                    <Link to={"/notes"} className="btn btn-primary mb-3 ms-5">Check notes</Link>
                </div>
            </div>

        </div>
        </div>
    );
}

export default WelcomePage;