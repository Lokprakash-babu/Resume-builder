import React from 'react'
import Input from '../Input/input'
import {useSelector} from 'react-redux'
import {changeLinkedin} from '../../action/action.js';
const Linkedin = () => {
    const linkedin=useSelector((state)=>state.linkedIn);
    return (
        <div className="linkedin">
            <Input label="Label" value={linkedin} changer={changeLinkedin} placeholder="Linkedin" type="url" required/>

        </div>
    )
}

export default Linkedin
