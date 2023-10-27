import React from 'react'
import { Link } from 'react-router-dom' //npm i link- react 



export default function Navbar() {

  const role = localStorage.getItem('Role')

  return (
    <>

      {role == 3?  //conditional rendering

        <div class="wrapper mb-3">
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
                  <Link to={'/trainer-userlist'}><li>Orders</li></Link>
                  <Link to={'/ViewDiet'}><li>Diet Plan</li></Link>
                  
                </ul>

              </div>
            </nav>
          </header>
        </div>

        :
        role == 2 ?

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
                   <Link to={'/about'}><li>About</li></Link>
                   <Link to ={'/viewtrainer'}><li>Trainers</li></Link>
                    <Link to ={'/user-trainerlist'}><li>My Bookings</li></Link>
                    <Link to ={'/shop'}><li>Shop</li></Link>
                    <Link to={'/Logout'}><li>Logout</li></Link>
                  </ul>
                    
                   

                </div>
              </nav>
            </header>
          </div>

          :
//home
          <div class="wrapper">
            <header id="nav">
              <nav>
                <div class="menu-icon">
                  <i class="fa fa-bars fa-2x"></i>
                </div>
                <div class="logo">
                  CROSSBODY

                </div>
                <div class="menu">
                  <ul>
                    <Link to={'/Login'}><li>Login</li></Link>
                  </ul>

                </div>
              </nav>
            </header>
          </div>

      }




    </>
  )
}


