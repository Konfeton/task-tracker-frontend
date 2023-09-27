import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import cookie from "cookie";


function GetAllNotes() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Выполнение GET-запроса при монтировании компонента
        axios.get('http://localhost:8080/tracks')
            .then(response => {
                // Обработка успешного ответа от сервера
                setData(response.data);
            })
            .catch(error => {
                // Обработка ошибки запроса
                console.error('Ошибка при выполнении GET-запроса:', error);
            });
    }, []);


    const [message, setMessage] = useState('');

    function deleteHandle(e, id){
        cookie.set("user", )
        console.log(data.id)
        axios.delete('http://localhost:8080/tarcks?id=' + id)
            .then(response => {
                setMessage('Success');
            })
            .catch(error => {
                console.error('Error in DELETE-method:', error);
            });
    }




    return (
        <div>
            {data.map(item => (
                <p key={item.id}>
                    {item.id}  {item.note} , {item.time}, {item.date}
                    <button onClick={(e) => deleteHandle(e, item.id)}>Delete</button>
                    <Link to={`/tracks/${item.id}`}>Edit</Link>

                </p>
            ))}
            <p>{message}</p>
        </div>
    );
}

export default GetAllNotes;
