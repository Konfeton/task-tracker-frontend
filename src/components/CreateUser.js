import React, {useState} from 'react';
import axios from "axios";

function PostForm(props) {

    const url = 'http://localhost:8080/users'
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
        console.log(url)
        console.log(data)
        axios.post(url, {
            name: data.name,
            lastname: data.lastname,
            email: data.email,
            password: data.password
        })
            .then(res=>{
                console.log(res.data)
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
        </div>
    );
}

export default PostForm;