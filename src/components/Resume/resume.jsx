import React from 'react';
import Profile from '../Profile/Profile';
import "./resume.css"
import {NavLink, Route, Switch} from 'react-router-dom';
import Project from '../Projects/Project';


function Resume({match}){



    return(
        <div>
            <ul className="navBar">
                <li className="item1"><NavLink to={`${match.url}/profile`}>Profile</NavLink></li>
                <li className="item2"><NavLink to={`${match.url}/projects`}>Projects</NavLink></li>
                <li className="item3"><NavLink to={`${match.url}/skills`}>Skills</NavLink></li>
            </ul>
            <Route path={`${match.path}/profile`} exact={true} component={Profile}/>
            <Route path={`${match.path}/projects`} exact={true} component={Project}/>
        </div>
    )
}

export default Resume;