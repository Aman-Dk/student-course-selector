import React, { Component } from 'react'
import './Styles.css'
import Login from './components/Login'

class App extends Component {

  render() {
 
    return (
            <div className='App' style={{width:'',height:'',margin:'',padding:''}}>
              {/* fist page which is displayed when the application loads */}
                  <Login/>
            </div>
          )
      }
}

export default App