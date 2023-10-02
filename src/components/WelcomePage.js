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
                    <Link to={"/notes/create"} className="btn btn-primary  me-5">Create note</Link>

                    <Link to={"/notes"} className="btn btn-primary  me-5 ms-5">Check notes</Link>

                    <Link className="btn btn-primary ms-5" to="/users">Show users</Link>
                </div>
            </div>

        </div>
        </div>
    );
}

export default WelcomePage;