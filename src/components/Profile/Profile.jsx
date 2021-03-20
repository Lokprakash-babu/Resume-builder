import React from 'react'
// import { useForm } from 'react-hook-form'
import './profile.css'
import FirstName from './firstName';
import LastName from './lastName';
import Email from './email';
import Phone from './Phone';
import Github from './Github';
import Linkedin from './Linkedin';
import Twitter from './Twitter';


const Profile = ({history}) => {

    // const {register, handleSubmit} = useForm();


    
    return (
        <form>
            <div className="profile">  
            
                {/*Firstname*/}
                <FirstName/>
                {/*LastName*/}
                <LastName/>
                {/*Email*/}
                <Email/>
                {/*Phone*/}
                <Phone/>

            </div>
            <div className="profile urls">
                <Github/>
                <Twitter/>
                <Linkedin/>
            </div>
            <div className="btnContainer">
                <button type='submit' className="nextBtn">Next</button>
            </div>
        </form>
    )
}

export default Profile
