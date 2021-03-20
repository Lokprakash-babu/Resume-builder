import React from 'react'
import {useSelector} from 'react-redux'
import {changeLastName} from '../../action/action.js';
import Input from '../Input/input';
const LastName = () => {
    const lastName=useSelector((state)=>state.lastName);
    return (
        <div className="lastName">
            <Input label="Last Name" type="text" changer={changeLastName} placeholder="Last Name" value={lastName} required/>
        </div>
    )
}

export default LastName;
