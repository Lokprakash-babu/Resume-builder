import React from 'react'
import { useForm } from 'react-hook-form'
import Input from '../Input/input';
import './profile.css'
const Profile = ({history}) => {

    const {register, handleSubmit} = useForm();

    function onSubmit(data){
        console.log('profile', data);
        history.push('/user/projects');
    }
    return (
        <div class="profile">
            
            <form onSubmit={handleSubmit(onSubmit)} className="forms">
                <div className="names">
                    <Input label="First Name" validate={register} type="text" placeHolder="First Name" name="firstName" required={true}/>
                    <Input required={true} label="Last Name" validate={register} type="text" placeHolder="Last Name" name="lastName"/>
                </div>
                <Input required={true} label="Email" validate={register} type="email" placeHolder="Email" name="email"/>
                <Input required={true} label="Mobile" validate={register} type="tel" placeHolder="Mobile number" name="phoneNumber"/>
                <div className="profiles">
                    <Input required={false} label="Github profile" validate={register} type="url" placeHolder="Github" name="gitHub"/>
                    <Input required={false} label="LinkedIn profile" validate={register} type="url" placeHolder="Linkedin" name="linkedIn"/>
                </div>
                <div className="profiles">
                    <Input required={false} label="Twitter" validate={register} type="url" placeHolder="Twitter" name="twitter"/>
                    <Input required={false} label="Your Website" validate={register} type="url" placeHolder="Your website" name="website"/>
                </div>
                <button type="submit" className="submitBtn">Next</button>
            </form>
        </div>
    )
}

export default Profile
