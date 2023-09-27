import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';




function GetAllUsers() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // ���������� GET-������� ��� ������������ ����������
        axios.get('http://localhost:8080/users')
            .then(response => {
                // ��������� ��������� ������ �� �������
                setData(response.data);
            })
            .catch(error => {
                // ��������� ������ �������
                console.error('������ ��� ���������� GET-�������:', error);
            });
    }, []);


    const [message, setMessage] = useState('');

    function deleteHandle(e, id){
        console.log(data.id)
        axios.delete('http://localhost:8080/users?id=' + id)
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
