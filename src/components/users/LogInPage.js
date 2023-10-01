import React, {useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import '../../config';

function LogInPage(props) {

    const [message, setMessage] = useState('');
    const BASE_URL = global.config.BASE_URL;

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
        axios.post(BASE_URL + "/login", {
            email: data.email,
            password: data.password
        }, {withCredentials: true, credential: 'include'})
            .then(res=>{
                console.log("loggedIn")
                navigate("/")
            })
            .catch(error =>{
                setMessage("Wrong email or password")
            })
        localStorage.setItem("email", data.email)
    }



    return (
        <div>
            <form onSubmit={(e) =>submit(e)}>
                <input onChange={(e) =>handle(e)} id={'email'} value={data.email} type={"email"} placeholder={'email'}/>
                <input onChange={(e) =>handle(e)} id={'password'} value={data.password} type={"password"} placeholder={'password'}/>
                <button>Submit</button>
            </form>
            <p>{message}</p>
        </div>
    );
}

export default LogInPage;