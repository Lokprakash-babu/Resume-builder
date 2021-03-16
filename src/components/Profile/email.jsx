import React from 'react'
import {useSelector} from 'react-redux'
import {changeEmail} from '../../action/action.js';
import Input from '../Input/input';
const Email = () => {
    const email=useSelector((state)=>state.email);
    return (
        <div className="email">
            <Input label="Email" type="email" changer={changeEmail} value={email} required/>
        </div>
    )
}

export default Email;
