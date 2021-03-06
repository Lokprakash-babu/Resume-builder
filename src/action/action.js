import {uuid} from 'uuidv4';


export const changeFirstName=(name)=>{
    return {
        type:"FIRSTNAME",
        payload:name
    }
}

export const changeLastName=(name)=>{
    return {
        type:"LASTNAME",
        payload:name
    }
}

export const changeEmail=(name)=>{
    return {
        type:"EMAIL",
        payload:name
    }
}

export const changePhone=(name)=>{
    return {
        type:"PHONE",
        payload:name
    }
}

export const changeGit=(name)=>{
    return {
        type:"GITHUB",
        payload:name
    }
}

export const changeLinkedin=(name)=>{
    return {
        type:"LINKEDIN",
        payload:name
    }
}

export const changeSite=(name)=>{
    return {
        type:"SITE",
        payload:name
    }
}

export const changeTwitter=(name)=>{
    return {
        type:"TWITTER",
        payload:name
    }
}

export const changeProjects=(name)=>{
    return {
        type:"PROJECTS",
        payload:name
    }
}

export const changework=(name)=>{
    return {
        type:"WORKEXPERIENCE",
        payload:name
    }
}

export const changeSkills=(name)=>{
    return {
        type:"SKILLS",
        payload:name
    }
}

export const addProjects=(projects)=>{
    let newProj=[...projects];
    newProj.push({
        key: uuid(),
        title:"",
        link:"",
        description:""
    });
    return {
        type:"PROJECTS",
        payload:newProj
    }
}

export const removeProject=(projects)=>{
    let newProj=[...projects];
    return {
        type:"PROJECTS",
        payload:newProj
    }
}
export const editProjects=(projects)=>{
    let newProj=[...projects];
    
    return {
        type: "PROJECTS",
        payload: newProj
    }
}