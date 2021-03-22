// let state={
//     firstName:"",
//     lastName:"",
//     email:"",
//     phone:"",
//     github:"",
//     linkedIn:"",
//     personalSite:"",
//     twitter:"",
//     projects:[],
//     workExperience:[],
//     skills:[]
// }

const Reducer=(state={
    firstName:"",
    lastName:"",
    email:"",
    phone:"",
    github:"",
    linkedIn:"",
    personalSite:"",
    twitter:"",
    projects:[],
    workExperience:[],
    skills:[]
}, action)=>{

    switch(action.type){
        case "FIRSTNAME":
            return {
                ...state,
                firstName:action.payload
            }
        case "LASTNAME":
            return {
                ...state,
                lastName:action.payload
            }
        case "EMAIL":
            return {
                ...state,
                email:action.payload
            }
        case "PHONE":
            return {
                ...state,
                phone:action.payload
            }
        case "GITHUB":
            return {
                ...state,
                github:action.payload
            }
        case "LINKEDIN":
            return {
                ...state,
                linkedIn:action.payload
            }
        case "SITE":
            return {
                ...state,
                personalSite:action.payload
            }
        case "TWITTER":
            return {
                ...state,
                twitter:action.payload
            }
        case "PROJECTS":

            return {
                ...state,
                projects:action.payload
            }
        case "WORKEXPERIENCE":
            return{
                ...state,
                workExperience:action.payload
            }
        case "SKILLS":
            return{
                ...state,
                skills:action.payload
            }
        default:
            return state
    }
}

export default Reducer;