import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Routes,Route } from "react-router-dom"
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';
import Course from './components/Course';


ReactDOM.render(     
    <BrowserRouter>
        <Routes>
            <Route>
                <Route path='/' element={ <App/>} />
                <Route path='home' element={ <Home id='1' start={0} end={7} active='link-active'/>} />
                <Route path='home/2' element={ <Home id='2' start={7} end={14} active='link-active'/>} />
                {/* <Route path='home/3' element={ <Home id='3' start={14} end={21} active='link-active'/>} />
                <Route path='home/4' element={ <Home id='4' start={21} end={28} active='link-active'/>} />
                <Route path='home/5' element={ <Home id='5' start={28} end={35} active='link-active'/>} />
                <Route path='home/6' element={ <Home id='6' start={35} end={42} active='link-active'/>} /> */}
                <Route path='course' element={ <Course/>} />
            </Route>
        </Routes>

    </BrowserRouter> , 
    document.getElementById('root')
);
