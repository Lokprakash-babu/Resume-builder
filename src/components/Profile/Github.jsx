import React from 'react'
import Input from '../Input/input'
import {useSelector} from 'react-redux'
import {changeGit} from '../../action/action.js';

const Github = () => {
    const gitHub=useSelector((state)=>state.github);
    return (
        <div className="gitHub">
            <Input label="Github" value={gitHub} changer={changeGit} placeholder="Github" type="url" required/>
        </div>
    )
}

export default Github
