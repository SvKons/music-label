import React, { useState } from "react";
import './ContactForm.scss';
import axios from 'axios'; 


interface IText{
    text: string,
}

const text: IText = {
    text: '',
}


const ContactForm = () => {
    const [formValues, setFormValues] = useState('')

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormValues(e.target.value)

    }
        const send = async () => {
            await axios.post ('http://localhost:3000/', formValues)

        }

    return(
        <div className="form">
            <p className='form__write'>Напишите нам</p>
            <textarea onChange={onChange} className="form__text" name="text" value={formValues}/>
            <button onClick={send} className="form__button">Отправить</button>
        </div>
    )
}

export default ContactForm;