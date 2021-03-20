import React from 'react'
import {useSelector} from 'react-redux'
import {changePhone} from '../../action/action.js';
import Input from '../Input/input';
const Phone = () => {
    const phone=useSelector((state)=>state.phone);
    return (
        <div>
            <Input label="Phone" type="tel" changer={changePhone} value={phone} placeholder="Phone" required/>
        </div>
    )
}

export default Phone
