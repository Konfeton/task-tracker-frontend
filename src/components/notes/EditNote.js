import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";

function EditNote(props) {

    const { id } = useParams(); // Получаем значение параметра :id из URL

    const [data, setData] = useState({
        note : "",
        time : "",
        date : ""

    })

    useEffect(() => {
        // Выполнение GET-запроса с использованием id из URL
        axios.get(`http://localhost:8080/tracks?id=${id}`)
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
        axios.put(`http://localhost:8080/tracks?id=${id}`, {
            name: data.name,
            lastname: data.lastname,
            email: data.email
        })
            .then(res=>{
                console.log(res.data)
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
        </div>
    );
}

export default EditNote;