import React, {useState} from 'react';
import './project.css';
import GrpInput from '../groupInputs/grpInput';


const Project = () => {

    const [projects, addProject]=useState([]);

    function handleAddProject(){
        let project=[...projects];
        project.push({});
        addProject(project);
    }

    function handleSubmit(data){
        console.log('projects', projects);
    }

    function removeProject(data){
        projects.splice(data,1);
        let project=[...projects];
        addProject(project);
    }

    function handleChange(data){
        let ind=data.target.id.split('-');
        projects[parseInt(ind[0])][ind[1]]=data.target.value;
        let newProject=[...projects];
        addProject(newProject);
    }

    return (
        <div className="projects">
            {
                projects.map((data, ind)=><GrpInput onSubmit={handleSubmit} index={ind} key={ind} data={data} detectChange={handleChange} remove={removeProject}/>)
            }
            <button className="addProjBtn" onClick={handleAddProject}>Add project</button>
        </div>
    )
}

export default Project
