import React, {useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

function LogInPage(props) {

    let navigate = useNavigate()
    const [data, setData] = useState({
        email : "",
        password : ""

    })

    function handle(e){
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData)
    }

    function submit(e){
        e.preventDefault();
        console.log(data)
        axios.post("http://localhost:8080/login", {
            email: data.email,
            password: data.password
        })
            .then(res=>{
                console.log(res.data)
                console.log("loggedIn")
            })
            .catch(error =>{
                console.log(error)
            })
        navigate("/")
        // axios.post("http://localhost:8080/logout")
    }

    return (
        <div>
            <form onSubmit={(e) =>submit(e)}>
                <input onChange={(e) =>handle(e)} id={'email'} value={data.email} type={"email"} placeholder={'email'}/>
                <input onChange={(e) =>handle(e)} id={'password'} value={data.password} type={"password"} placeholder={'password'}/>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default LogInPage;