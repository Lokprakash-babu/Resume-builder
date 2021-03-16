import React from 'react'
// import { useForm } from 'react-hook-form'
import './profile.css'
import FirstName from './firstName';
import LastName from './lastName';
import Email from './email';
import Phone from './Phone';
const Profile = ({history}) => {

    // const {register, handleSubmit} = useForm();

    return (
        <div class="profile">  
        
            {/*Firstname*/}
            <FirstName/>
            {/*LastName*/}
            <LastName/>
            {/*Email*/}
            <Email/>
            {/*Phone*/}
            <Phone/>

        </div>
    )
}

export default Profile
