import React from 'react'
import {useDispatch} from 'react-redux';
import {editProjects, removeProject} from '../../action/action';

const ProjectComp = ({ind, value, key, all}) => {
    const dispatch=useDispatch();

    function changer(e){
        console.log(e);
        all[ind][e.target.name]=e.target.value;
        dispatch(editProjects(all));
    }

    function deleter(){
        all.splice(ind, 1);
        dispatch(removeProject(all));
    }
    return (
        <div>
            <input type="text" name="title" value={value.title} placeholder="Enter the Title" onChange={changer}/>
            <input type="text" name="link" value={value.link} placeholder="Enter the link" onChange={changer} />
            <textarea name="description" placeholder="Description" onChange={changer}></textarea>
            <button onClick={deleter}>-</button>
        </div>
    )
}

export default ProjectComp
