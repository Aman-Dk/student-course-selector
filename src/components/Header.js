import axios from 'axios'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/headerStyle.css'

export default function Header(props) {
    //method of react router v6 used to navigate between pages
    let navigate = useNavigate()

    //this function will logout admin from the app and send them to login page 
    function logoutHandler(){
        // sending logout request to backend
        axios.get('/admin/logout').then(()=>{
            navigate('/')
        })
        .catch(err=>{
            console.log(err);
        })
    }

    //this function will set the edit state to false in Home Component causing the view to change back to list of students
    function goBackHandler(){
        props.goBackHandler(false)
    }

    return (
        <div>
            <div className="navigation">
                <div className="nav-brand">
                    <img src="https://img.icons8.com/officel/40/000000/courses.png" alt='logo'/>
                    &nbsp;&nbsp;
                    Student Course Selector
                </div>
                <ul className="nav-links">
                    {/* <li className="list-inline">
                        <Link to="/" className="links link-active">login</Link>
                    </li> */}
                    <li className="list-inline">
                        <Link to="/home" className="links link-active" onClick={goBackHandler}>Home</Link>
                    </li>
                    <li className="list-inline logout">
                        <Link to="#" className="links" onClick={logoutHandler}>Logout</Link>
                    </li>
                </ul>
            </div>      
        </div>
    )
}
