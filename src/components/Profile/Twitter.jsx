import React from 'react'
import Input from '../Input/input'
import {useSelector} from 'react-redux'
import {changeTwitter} from '../../action/action.js';

const Twitter = () => {
    const twitter=useSelector((state)=>state.twitter);
    return (
        <div className="twitter">
            <Input label="Twitter" value={twitter} changer={changeTwitter} placeholder="Twitter" type="url" required/>
        </div>
    )
}

export default Twitter;