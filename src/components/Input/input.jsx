import React from 'react'
import './input.css';

const Input = ({validate, label, placeHolder, type, name, required}) => {

    return (
        <div className="inputs">
            <input  
            className="inputField" 
            name={name} 
            type={type} 
            ref={validate}
            placeholder={placeHolder}
            required={required}/>
            <label className="labelField">{label}</label>
        </div>
    )
}

export default Input
