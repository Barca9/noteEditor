import React, {useState} from 'react'


export const Form = () => {

    const [value, setValue]= useState('')


    const submitHandler = event => {
        event.preventDefault()
        if(value.trim()){
            alert("Заметка была создана")
            setValue('')
        } else alert("Введите заметку")
    }

    return(
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <input type="text"
                       className="form-control"
                       placeholder="Введите заметку"
                       value={value}
                       onChange={e =>setValue(e.target.value)}
                />
            </div>
        </form>
    )

}