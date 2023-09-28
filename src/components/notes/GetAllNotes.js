import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import cookie from "cookie";


function GetAllNotes() {
    const [notes, setNotes] = useState([]);

    const [message, setMessage] = useState('');


    useEffect(() => {
        // Выполнение GET-запроса при монтировании компонента
        axios.get('http://localhost:8080/tracks', {withCredentials:true, credentials: "include"})
            .then(response => {
                // Обработка успешного ответа от сервера
                setNotes(response.data);
            })
            .catch(error => {
                // Обработка ошибки запроса
                console.error('GET error:', error);
                if (error.response.status === 403)
                    setMessage("You're not authorized ")
            });
    }, []);

    function deleteHandle(e, id){
        axios.delete('http://localhost:8080/tracks?id=' + id, {withCredentials:true, credentials: "include"})
            .then(response => {
                setMessage('Success');
                window.location.reload()
            })
            .catch(error => {
                console.error('Error in DELETE-method:', error);
            });
    }




    return (
        <div>
            {notes.map(item => (
                <p key={item.id}>
                    {item.id}  {item.note} , {item.time}, {item.date}
                    <button onClick={(e) => deleteHandle(e, item.id)}>Delete</button>
                    <Link to={`/notes/${item.id}`}>Edit</Link>

                </p>
            ))}
            <p>{message}</p>
        </div>
    );
}

export default GetAllNotes;
