import React, {useState} from 'react';
import axios from "axios";

function CreateNote(props) {

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
        axios.post("http://localhost:8080/tracks", {
            note: data.note,
            time: data.time,
            date: data.date

        }, {withCredentials : true} )
            .then(res=>{

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