import axios from 'axios'
import React, { useState } from 'react'
import { Form,Button,Image } from 'react-bootstrap'
import { useNavigate   } from 'react-router-dom'

// import universityPhoto from '../images/universityPhoto.jpg'
import '../styles/loginStyle.css'

export default function Login (){
    let navigate = useNavigate()
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //         username:'',
    //         password:''
    //     }
    // }
    const [username,setusername] = useState('')
    const [password,setpassword] = useState('')
    
    const changeHandler = (e) =>{
        if(e.target.name==='username'){
            setusername(e.target.value)
        }else{
            setpassword(e.target.value)
        }
        // this.setState({[e.target.name]: e.target.value})
    }
    
    const submitHandler = async(e) =>{
        e.preventDefault();

        await axios.post('/api/login',{username:username,
                                    password:password})
                                    .then((message)=>{
                                        navigate('/home')
                                        console.log(message)
                                    })
                                    .catch(err=>{
                                        console.log(err);
                                    })                        
        // console.log(this.state)
    }

    // render(){
        return (
            <div className='login'>
                <h3 style={{fontWeight:'bold'}}>Student Course Selector</h3>
                <Form className='custom-form' onSubmit={submitHandler}>
                    {/* <div className='custom-img'></div> */}
                    <Image className='custom-img' src='https://cdn.pixabay.com/photo/2021/12/02/16/46/graduation-6840941_960_720.png' alt='logo'/>
                    <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Control 
                            type="username" 
                            name="username"
                            placeholder="Enter admin username"
                            onChange={changeHandler}
                            required
                        />
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control 
                            type="password" 
                            name="password"
                            placeholder="Password"
                            onChange={changeHandler}
                            required
                        />
                    </Form.Group>
                    
                    <Button variant="primary" className='custom-btn' type='submit'>
                        {/* <Link to='home' style={{textDecoration : 'none',color:'white'}}>Login</Link> */}
                        Login
                    </Button>
                </Form>
            </div>
        )
    // }
}
