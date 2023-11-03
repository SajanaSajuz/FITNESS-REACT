import React from 'react'
import './Orderedtrainer.css'
import Navbar from './Navbar'
export default function Orderedtrainer() {
    const date= new Date()
    console.log(date);
  return (
    <>
   
    <div>
      <div class="product-containerf">
      
  <div class="imgd">
    <img src="https://static.hsappstatic.net/ui-images/static-2.592/optimized/success.svg" alt="International-Women-s-Day-Facebook-Post" border="0" />
  </div>
  
  <div class="details">
  <h3 class="titleg">YOUR APPOINTMENT IS REQUESTED</h3>
    
    {/* <h5 class="title1">You're booked with Adrian.
An invitation has been emailed to you</h5> */}
    <h1 class="cost"></h1>
    {/* <button type="button">SHOW</button> */}
    
  </div>
</div>
    </div>
    
    </>
  )
}
