import React from 'react'
import './input.css';
import {useDispatch} from 'react-redux';

const Input = ({value, type, label, required, changer}) => {

    const dispatch=useDispatch();
    
    function change(e){
        dispatch(changer(e.target.value));
    }
    return (
        <div className="inputs">
            <input type={type}
            onChange={change}
            className="inputField"
            required={required}
            value={value} />
            <label className="labelField">{label}</label>
        </div>
    )
}

export default Input
