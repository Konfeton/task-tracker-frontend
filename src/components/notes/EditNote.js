import React, { useState, useEffect } from 'react';
import {Navigate, useNavigate, useParams} from 'react-router-dom';
import axios from "axios";
import '../../config';

function EditNote(props) {

    const { id } = useParams(); // ѕолучаем значение параметра :id из URL
    let navigate = useNavigate()
    const BASE_URL = global.config.BASE_URL;


    const [message, setMessage] = useState()
    const [data, setData] = useState({
        note : "",
        time : "",
        date : ""

    })

    useEffect(() => {
        // ¬ыполнение GET-запроса с использованием id из URL
        axios.get(BASE_URL + `/tracks?id=${id}`,
            {withCredentials:true, credentials: 'include'})
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('GET error:', error);
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
        axios.put(BASE_URL + `/tracks?id=${id}`, {
            note: data.note ,
            time: data.time,
            date: data.date
        }, {withCredentials:true, credentials: 'include'})
            .then(res=>{
                console.log(res.data)
                navigate("/notes")
            })
            .catch(e =>{
                setMessage("smt went wrong")
            })
    }

    return (
        <div>
            <form onSubmit={(e) =>submit(e)}>
                <input onChange={(e) =>handle(e)} id={'note'} value={data.note} type={"text"} placeholder={'note'}/>
                <input onChange={(e) =>handle(e)} id={'time'} value={data.time} type={"number"} placeholder={'time'}/>
                <input onChange={(e) =>handle(e)} id={'date'} value={data.date} type={"date"} placeholder={'date'}/>
                <button>Submit</button>
            </form>
            <p>{message}</p>
        </div>
    );
}

export default EditNote;