import React, {useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

import '../../config';
function PostForm(props) {

    const BASE_URL = global.config.BASE_URL;
    let navigate = useNavigate()

    const [message, setMessage] = useState('');
    const [data, setData] = useState({
        name : "",
        lastname : "",
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
        axios.post(BASE_URL +"/users", {
            name: data.name,
            lastname: data.lastname,
            email: data.email,
            password: data.password
        }, {withCredentials:true, credentials: 'include'})
            .then(res=>{
                console.log(res.data)
                navigate("/")

            })
            .catch(error =>{
                if (error.response.status === 400)
                    setMessage("Can't create such user")
                else
                    setMessage("smth went wrong")
            })
    }

    return (
        <div>
            <form onSubmit={(e) =>submit(e)}>
                <input onChange={(e) =>handle(e)} id={'name'} value={data.name} type={"text"} placeholder={'name'}/>
                <input onChange={(e) =>handle(e)} id={'lastname'} value={data.lastname} type={"text"} placeholder={'lastname'}/>
                <input onChange={(e) =>handle(e)} id={'email'} value={data.email} type={"email"} placeholder={'email'}/>
                <input onChange={(e) =>handle(e)} id={'password'} value={data.password} type={"password"} placeholder={'password'}/>
                <button>Submit</button>
            </form>
            <p>{message}</p>
        </div>
    );
}

export default PostForm;