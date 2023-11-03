import React from 'react'
import Login from './Login'
import '../Pages/Trainerhome.css'
import '../css/trainer.css'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import Trainer from './Trainer'

export default function Trainerhome() {
  const role = localStorage.getItem('Role')

  return (
    <>

<Navbar/>
<div className='mainnn'>
<Trainer/>
</div>

      
     {/* {role== 3?  //conditional rendering

<div class="wrapper">
  <header>
    
    <nav>
      <div class="menu-icon">
        <i class="fa fa-bars fa-2x"></i>
      </div>
      <div class="logo">
        CROSSBODY

      </div>
      <div class="menu">
        <ul>
          <Link to={'/Home'}><li>Home</li></Link>
          <Link to={'/Class'}><li>Classes</li></Link>
          <Link to={'/Viewtrainer'}><li>Coaches</li></Link>
          <Link to={'/ViewDiet'}><li>Diet Plan</li></Link>
          
        </ul>

      </div>
    </nav>
  </header>
</div>
:
//home
<div class="wrapper">
<Login/>
</div> */}

{/* } */}





    </>
  )
}
