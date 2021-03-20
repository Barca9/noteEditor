import React from 'react'


//export const Notes = ({notes}) => {
export const Notes = (data) => {
    //let data = require('json!../data/notes.json');

    return(
        <ul className="list-group">
            {data.map(note => (
                <li className="list-group-item note" key={note.id}>
                    {note.title}
                    <button type="button" className="btn btn-outline-danger">Удалить</button>
                </li>
            ))}
        </ul>
    )
}