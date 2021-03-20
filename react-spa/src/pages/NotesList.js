import React, {Fragment} from 'react'
import {Form} from "../components/Form";
import {Notes} from "../components/Notes";


export const NotesList = () => {
    //const note = new  Array(3)
        //.fill('')
        //.map((_,i)=>({id:i, title:`Note:${i+1}`}))


    let data = require('../data/notes.json');

    return(
        <Fragment>
            <Form/>
            <hr/>
            <Notes notes={data}/>
        </Fragment>
    )

}