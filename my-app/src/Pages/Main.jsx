import React from 'react'
import Navbar from '../Components/Navbar'
import Weightlifting from '../Components/Weightlifting'
import Classes from '../Components/Classes'
import './Navbar.css'
import Crossfit from '../Components/Crossfit'


export default function Main() {
  return (
    <>
      <div>
        <div className="mainNav">
          <Navbar />
        </div>
        <div className='main'>
        <div className="headerbg"> 
          <Crossfit/>
        </div>
        </div>


        <div className="mainNav2">
          <Weightlifting />
        </div>
        <div className="mainNav3">
          <Classes />
        </div>

        {/* <Navbar/>
      <Weightlifting/>
      <Classes/> */}
      </div>
    </>
  )
}
