import React from 'react'
import Input from '../Input/input'
import {useSelector} from 'react-redux'
import {changeLinkedin} from '../../action/action.js';

const Linkedin = () => {
    const linkedIn=useSelector((state)=>state.linkedIn);
    return (
        <div className="linkedin">
            <Input label="LinkedIn" value={linkedIn} changer={changeLinkedin} placeholder="LinkedIn" type="url" required/>
        </div>
    )
}

export default Linkedin;