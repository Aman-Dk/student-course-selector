import React,{Component} from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'

import '../styles/listStyle.css'

export default class List extends Component {

    state={
        // name:'aman',
        // selectedCourse:this.props.selectedCourse,
        studentId:this.props.id,
        edit:this.props.edit,
        courses:['BTECH','BSC','BIOTECH','BA','MBA','MTECH','MBBS','AUTOMOBILE','MECHANICAL','ELECTRICAL']
    }

    // the method gets executed upon clicking on any particular student from the given list of students which pass the props of
    // clicked student to the next component
    clicked=()=>{ 
        // this.setState({visibility:'hidden'})
        this.setState({edit:true})
        this.props.editHandler(this.props.name,this.props.selectedCourse,this.props.val,this.state.studentId)

    }

    // this method executes when selecting new course from the given list of course
    courseChangedHandler=(e)=>{
        this.props.courseHandler(e.target.value)
        // console.log(e.target.value);
    }
    
    render(){

        // courseList is a collection of all the courses available and is mapped with the dropdown item
        const courseList= this.state.courses.map((course)=>{
            if(course!==this.props.selectedCourse){
            return(
                <Dropdown.Item key={`${course}`}as="button" onClick={this.courseChangedHandler} value={course}>{course}</Dropdown.Item>
            )}else{
                return(null)
            }
        })

    return (
            <div onClick={!this.state.edit? this.clicked: null} className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                {/* <img src="https://github.com/twbs.png" alt="twbs" width="32" height="32" className="rounded-circle flex-shrink-0"/> */}
                <h6 className='pt-1'>{this.props.val}.</h6>
                <div className="d-flex gap-2 w-100 justify-content-between">
                <div>
                    <h5 className="mb-0">{this.props.name}</h5>
                    <p className="mb-0 opacity-75 fw-bold">Selected-Course : <span className='selectedCourse'>{this.props.selectedCourse}</span></p>
                
                    {this.state.edit=== true ?
                    <DropdownButton id="dropdown-item-button" title="Change Course" className='keep-scrolling' variant="secondary"
                    menuVariant="dark" style={{display:'block',width:'auto',height:'40vh',overflow:'auto'}}>
                        {courseList}
                    </DropdownButton>

                    :
                    
                    null
                }
                </div>



                </div>
            </div>
        )
    }
}
