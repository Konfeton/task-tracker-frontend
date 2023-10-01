import React, {useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import '../../config';

function CreateNote(props) {

    const [message, setMessage] = useState()
    const BASE_URL = global.config.BASE_URL;

    const [data, setData] = useState({
        note : "",
        time : "",
        date : ""

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
        axios.post(BASE_URL + "/tracks", {
            note: data.note,
            time: data.time,
            date: data.date

        }, {withCredentials : true,
        credentials : 'include'} )
            .then(res=>{
                window.location.reload()
            })
            .catch(err =>{
                if (err.response.status === 403)
                    setMessage("You're not authorized ")
                else
                    setMessage("smth went wrong")
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
            {/*<Link to={"/"}>Back to Main menu</Link>*/}
        </div>
    );
}

export default CreateNote;