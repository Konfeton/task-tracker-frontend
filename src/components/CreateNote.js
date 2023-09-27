import React, {useState} from 'react';
import axios from "axios";

function CreateNote(props) {

    const url = 'http://localhost:8080/users'
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
        console.log(url)
        console.log(data)
        axios.post(url, {
            note: data.note,
            time: data.time,
            date: data.date
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

export default CreateNote;