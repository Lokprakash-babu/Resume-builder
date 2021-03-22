import React, {useState} from 'react';
import './project.css';
import {useSelector, useDispatch} from 'react-redux';
import ProjectComp from '../ProjectComp/ProjectComp';
import {addProjects} from '../../action/action';
const Project = () => {

    const projects=useSelector((state)=>state.projects);

    const dispatch = useDispatch()
    function addProj(){
        dispatch(addProjects(projects));
    }
    return (
        <div className="projects">
            {
                projects.map((ele, idx)=><ProjectComp key={ele.key} all={projects} value={ele} ind={idx} />)
            }
            <button class="addProjectBtn" onClick={addProj}>Add Project</button>
        </div>
    )
}

export default Project
