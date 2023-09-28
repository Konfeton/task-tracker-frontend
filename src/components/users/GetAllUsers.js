import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import '../../config';



function GetAllUsers() {
    const [data, setData] = useState([]);
    const BASE_URL = global.config.BASE_URL;

    useEffect(() => {
        // Выполнение GET-запроса при монтировании компонента
        axios.get( BASE_URL +'/users', {withCredentials:true, credentials: 'include'})
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
        console.log(data.id)
        axios.delete(BASE_URL + '/users?id=' + id, {withCredentials:true, credentials: 'include'})
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

            <div className="container">
                <div className="py-4">
                    <table className="table border shadow">
                        <thead>
                        <tr>
                            <th scope="col">S.N</th>
                            <th scope="col">Name</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>
            </div>

            {data.map(item => (
                <p key={item.id}>
                    {item.id}  {item.name} , {item.lastname}, {item.email}
                    <button onClick={(e) => deleteHandle(e, item.id)}>Delete</button>
                    <Link to={`/users/${item.id}`}>Edit</Link>

                </p>
            ))}
            <p>{message}</p>
        </div>
    );
}

export default GetAllUsers;
