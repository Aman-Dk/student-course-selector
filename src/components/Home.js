import React, { Component } from 'react'
import Header from './Header'
import List from './List'
import Page from './Page'

import axios from 'axios'
import '../styles/listStyle.css'
// import { Button, FormControl, InputGroup,Image } from 'react-bootstrap'
// import { MdClose } from 'react-icons/md'
// import Course from './Course'


export default class Home extends Component{

    constructor(props) {
        super(props)
    
        this.state = {
            studentList:[
                // {
                //     id:'1',
                //     name:'Daisy',
                //     course:'BTECH'
                // },
                // {   id:'2',
                //     name:'Jack',
                //     course:'BSC'
                // },
                // {   id:'3',
                //     name:'Jasper',
                //     course:'BIOTECH'
                // },
                // {   id:'4',
                //     name:'Julie',
                //     course:'BA'
                // },
                // {   id:'5',
                //     name:'Emma',
                //     course:'MBA'
                // },
                // {   id:'6',
                //     name:'Jane',
                //     course:'MTECH'
                // },
                // {   id:'7',
                //     name:'Jerry',
                //     course:'MBBS'
                // },
                // {   id:'8',
                //     name:'Kevin',
                //     course:'ELECTRICAL'
                // },
                // {   id:'9',
                //     name:'Dwayne',
                //     course:'BIOTECH'
                // },
                // {   id:'10',
                //     name:'Jimmy',
                //     course:'AUTOMOBILE-ENG.'
                // },
                // {   id:'11',
                //     name:'Rick',
                //     course:'MECHANICAL ENG.'
                // }
                
            ],
            //  studentList:['Aman','Jack','Jasper','Batman','Oggy','Spiderman','Jerry'],
             edit: false,
             student_Id:'',
             studentName:'',
             selectedCourse:'',
             id:''
        }
    }

    // fetching list of students from database using axios
    async componentDidMount() {
        const fetchedStudents = await axios.get('/api/students')
        // console.log(fetchedStudents.data)
        this.setState({ studentList: fetchedStudents.data })
    }

    // this method gets executed when clicking on any particular student from student list and the view changes from list of students to
    // that selected student
    editHandler = (studentName,selectedCourse,val,studentId) =>{
        this.setState({edit: true,studentName:studentName,selectedCourse:selectedCourse,id:val,student_Id:studentId})
    }

    // this will re-render/update the home page when the admin selects new course for student and go back to home page
    async componentDidUpdate(prevProps,prevState) {

        if(prevState.selectedCourse!==this.state.selectedCourse){
        // console.log(prevState.selectedCourse)
        // console.log(this.state.selectedCourse);
        const fetchedStudents = await axios.get('/api/students')
        this.setState({ studentList: fetchedStudents.data })

        }
        // if(prevState.selectedCourse!== this.state.selectedCourse ){
        //     console.log(prevState.selectedCourse)
        //     console.log(this.state.selectedCourse);
        // }else{
        //     return null
        // }
        // if(this.state.edit===false){
        // const fetchedStudents = await axios.get('/students')
        // // console.log(fetchedStudents.data)
        // this.setState({ studentList: fetchedStudents.data })
        // }
    }

    // async componentWillUnmount(){
    //     if (source) {
    //         source.cancel("Landing Component got unmounted");
    //       }
    // }

    // this method get executed when the admin change the student course
    courseHandler = async(newCourse) =>{
        // console.log(newCourse,this.state.student_Id)
        // await axios.post('/updateCourse',{id:this.state.student_Id,course:newCourse})
        // sending request to update the student course with newly selectedCourse
        await axios.patch('/api/updateCourse',{id:this.state.student_Id,course:newCourse})
            .then(()=>{
                this.setState({selectedCourse:newCourse})

            })
            .catch(err=>
                console.log(err)
            )
        // this.setState({ [e.target.name]:e.target.value })
        // console.log(e.target.name + ': ' + e.target.value)
    }

    // this method will execute when the admin click the back button in the app which will change the view to home page
    goBackHandler = (home) =>{
        if(home){
        this.setState({edit:home})
        }
        this.setState({edit:false})
    }

    // isClickedOutHandler = () =>{
    //     this.setState({edit : false})
    // }
    
    render(){
        // filteredStudentList stores sliced array of studentsList to display in particular page, only 10 students displayed on each page
        let filteredStudentList = this.state.studentList.slice(this.props.start,this.props.end)

        // show maps the data of filteredStudentList with the List Component to display as a list
        let show = filteredStudentList.map((student,index)=>{
            // if(index===this.props.start &&index!==this.props.end){
                return(
                    <List 
                        key={student.name}
                        val={student.id}
                        id={student._id}
                        name={student.name} 
                        selectedCourse={student.course}
                        edit={this.state.edit}
                        editHandler={this.editHandler}
                    />
                )
            // }else
            //     {
            //         return null
            //     }
        })
        // let show = for(let index=this.props.start;index<this.props.end;index++){
        //             return()
        // }

        return (
            <div>
                
                <Header goBackHandler={this.goBackHandler}/>

                {this.state.edit !== true ?
                <div className="list-group container">
                    {show}
                </div>
                : 
                    null
                }
                
                {this.state.edit === true ?
                        <div className="list-group container">
                            {/* go back link with image */}
                            {/* clicking this will cause edit to turn false and this view will be removed from display */}
                            <div>
                                <div className='image block' onClick={this.goBackHandler}/>
                            </div>
                            {/* new view of selected student will added to display replacing list of students view */}
                            <List 
                                name={this.state.studentName}
                                selectedCourse={this.state.selectedCourse}
                                val={this.state.id}
                                courseHandler={this.courseHandler}
                                edit={this.state.edit}
                            />
                        </div>
                    :

                    // the number of pages appears here
                    <Page id={this.props.id} active={this.props.active}/>

                }


            </div>
        )
    }
}

