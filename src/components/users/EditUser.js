import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";

function EditUser(props) {

    const { id } = useParams(); // Получаем значение параметра :id из URL

    const [data, setData] = useState({
        id: "",
        name : "",
        lastname : "",
        email : "",

    })

    useEffect(() => {
        // Выполнение GET-запроса с использованием id из URL
        axios.get(`http://localhost:8080/users?id=${id}`, {withCredentials:true, credentials: 'include'})
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Ошибка при выполнении GET-запроса:', error);
            });
    },[id]);

    function handle(e){
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData)
    }

    function submit(e){
        e.preventDefault();
        console.log(data)
        axios.put(`http://localhost:8080/users?id=${id}`, {
            name: data.name,
            lastname: data.lastname,
            email: data.email
        }, {withCredentials:true, credentials: 'include'})
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
                <button>Submit</button>
            </form>
        </div>
    );
}

export default EditUser;