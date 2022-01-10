import React, { Component } from 'react'
import {Link}  from "react-router-dom"

import '../styles/pageStyle.css'

export default class Page extends Component{

    render() {
        return (
            <div className="pages">
                <ul>
                    <li className="list-inline">
                        <Link to='/home' id='1' className={this.props.id==='1'? `links ${this.props.active}`:`links`}>1</Link>
                    </li>
                    <li className="list-inline">
                        <Link to='/home/2' id='2' className={this.props.id==='2'? `links ${this.props.active}`:`links`}>2</Link>
                    </li>
                    {/* <li className="list-inline">
                        <Link to='/home/3' id='3' className={this.props.id==='3'? `links ${this.props.active}`:`links`}>3</Link>
                    </li>
                    <li className="list-inline">
                        <Link to='/home/4' id='4' className={this.props.id==='4'? `links ${this.props.active}`:`links`}>4</Link>
                    </li>
                    <li className="list-inline">
                        <Link to='/home/5' id='5' className={this.props.id==='5'? `links ${this.props.active}`:`links`}>5</Link>
                    </li>
                    <li className="list-inline">
                        <Link to='/home/6' id='6' className={this.props.id==='6'? `links ${this.props.active}`:`links`}>6</Link>
                    </li> */}
                </ul>
            </div>
        )
    }
}

