import React from 'react'
import {useSelector} from 'react-redux'
import {changeFirstName} from '../../action/action.js';
import Input from '../Input/input';
const FirstName = () => {
    const firstName=useSelector((state)=>state.firstName);

    return (
        <div className="firstName">
            <Input label="First Name" type="text" changer={changeFirstName} value={firstName} placeholder="First Name" required/>
        </div>
    );
}

export default FirstName;
